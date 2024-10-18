import { fail, group } from "k6";
import { get, post, RefinedResponse, ResponseType } from "k6/http";
import { getLogin } from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import { LoginData } from "../util/users.ts";
import { PageObject } from "./index.ts";

class LoginPage extends PageObject {
  constructor() {
    super("Login", getFrontendUrl());
  }

  /**
   * Navigate to landing page and complete the login process
   * Fails if login does not succeed
   * @param user data for login
   */
  login(user: LoginData) {
    group("login", () => {
      this.navigate();
      let response = this.goToKeycloakLogin();
      response = this.submitForm(response, user);
      response = this.complete(response);
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
    if (!actionUrl) fail("action for #kc-form-login was not found");
    const loginData = {
      ...user,
      credentialId: "",
    };
    return post(actionUrl, loginData, {
      redirects: 0,
      tags: { name: "post login-form" },
    });
  }

  complete(response: RefinedResponse<ResponseType | undefined>) {
    // retrieve the loginUrl from the response
    // this includes state, session_state, iss and security code
    const loginUrl = response.headers["Location"];
    if (!loginUrl) {
      fail("did not find Location in kc response");
    }
    // this redirects to the start page
    const loginResponse = get(loginUrl, {
      tags: { name: "auth/login?..." },
    });
    loadLinkedResourcesAndCheck(loginResponse);
    return loginResponse;
  }
}

export const loginPage = new LoginPage();