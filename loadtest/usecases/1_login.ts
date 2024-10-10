import { check, fail, group, sleep } from "k6";
import http from "k6/http";
import { defaultHttpCheck, defaultTimingCheck } from "../util/checks.ts";
import { getDefaultOptions, getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import { getDefaultUserMix } from "../util/users.ts";

const SPSH_BASE = getFrontendUrl();
// not needed yet
// const KC_BASE = __ENV["KC_BASE"];

export const options = {
  ...getDefaultOptions(),
};

export default function main(users = getDefaultUserMix()) {
  /**
   * URL for final login, which we obtain from keycloak during oidc-login
   */
  let loginUrl = "";

  group("load spsh", () => {
    const pageResponse = http.get(SPSH_BASE);
    check(pageResponse, defaultHttpCheck);
    loadLinkedResourcesAndCheck(pageResponse);
  });

  group("go to kc login and submit form", () => {
    // load page
    const loginPageResponse = http.get(
      SPSH_BASE + "api/auth/login?redirectUrl=/",
    );
    check(loginPageResponse, defaultHttpCheck);
    loadLinkedResourcesAndCheck(loginPageResponse);

    // submit form
    const doc = loginPageResponse.html();
    const actionUrl = doc.find("#kc-form-login").attr("action");
    if (!actionUrl) fail("action for #kc-form-login was not found");

    const user = users.getLogin();
    const loginData = {
      ...user,
      credentialId: "",
    };
    const loginResponse = http.post(actionUrl, loginData, { redirects: 0 });
    check(loginResponse, {
      "submitting login form to kc succeeded": () =>
        loginResponse.status === 302,
      ...defaultTimingCheck,
    });

    // retrieve the loginUrl from the response
    // this includes state, session_state, iss and security code
    loginUrl = loginResponse.headers["Location"];
    if (!loginUrl) {
      fail("did not find Location in kc response");
    }
  });

  group("finish login", () => {
    const response = http.get(loginUrl);
    check(response, {
      "login succeeded": () =>
        response.status === 200 || response.status === 302,
      ...defaultTimingCheck,
    });
    loadLinkedResourcesAndCheck(response);
  });

  sleep(1);
}
