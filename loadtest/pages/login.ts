import { check, fail, group } from "k6";
import { get, post, RefinedResponse, ResponseType } from "k6/http";
import { getLogin, removeQueryString } from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import { loadPage } from "../util/page.ts";
import { LoginData } from "../util/users.ts";
import { PageObject } from "./index.ts";

class LoginPage implements PageObject {
  name = "Login";
  url = getFrontendUrl();

  navigate() {
    loadPage(this.url, this.name);
  }

  /**
   * Navigate to landing page and complete the login process
   * Fails if login does not succeed
   * @param user data for login
   */
  login(user: LoginData) {
    group("login", () => {
      let response;
      try {
        this.navigate();
        response = this.goToKeycloakLogin();
        response = this.submitForm(response, user);
        response = this.complete(response);
        if (response.status !== 200 && response.status !== 302) {
          fail("login failed");
        }
      } catch {
        fail("login failed");
      }
    });
  }

  initialLogin(user: LoginData, newPassword: string) {
    group("initial login", () => {
      let response;
      this.navigate();
      response = this.goToKeycloakLogin();
      response = this.submitForm(response, user);
      const resetUrl = response.headers["Location"];
      response = get(resetUrl, {
        tags: { name: removeQueryString(resetUrl) },
      });
      response.submitForm({
        fields: {
          username: user.username,
          password: "",
          "password-new": newPassword,
          "password-confirm": newPassword,
        },
        params: {
          tags: {
            name: removeQueryString(
              response.html("form").attr("action") ?? "submit login form",
            ),
          },
        },
      });
      if (response.status !== 200 && response.status !== 302) {
        fail("login failed");
      }
    });
  }

  goToKeycloakLogin() {
    const response = getLogin(["redirectUrl=/"]);
    loadLinkedResourcesAndCheck(response);
    return response;
  }

  submitForm(
    response: RefinedResponse<ResponseType | undefined>,
    user: LoginData,
  ) {
    const doc = response.html();
    const actionUrl = doc.find("#kc-form-login").attr("action");

    if (
      !check(actionUrl, {
        "action url found": (url) => url != undefined,
      })
    )
      fail("action for #kc-form-login was not found");

    const loginData = {
      ...user,
      credentialId: "",
    };
    return post(actionUrl!, loginData, {
      redirects: 0,
      tags: { name: removeQueryString(actionUrl!) },
    });
  }

  complete(response: RefinedResponse<ResponseType | undefined>) {
    // retrieve the loginUrl from the response
    // this includes state, session_state, iss and security code
    const loginUrl = response.headers["Location"];
    if (
      !check(loginUrl, {
        "login url found": (url) => url != undefined,
      })
    ) {
      fail("did not find Location in kc response");
    }
    // this redirects to the start page
    const loginResponse = get(loginUrl, {
      tags: { name: removeQueryString(loginUrl) },
    });
    loadLinkedResourcesAndCheck(loginResponse);
    return loginResponse;
  }
}

export const loginPage = new LoginPage();
