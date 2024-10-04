import { check, fail, group, sleep } from "k6";
import { SharedArray } from "k6/data";
import http from "k6/http";
import { getDefaultOptions, getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";

const SPSH_BASE = getFrontendUrl();
// not needed yet
// const KC_BASE = __ENV["KC_BASE"];

type User = {
  username: string;
  password: string;
};
/**
 * Array of usernames and passwords from users.json
 */
const users = new SharedArray("users", () => {
  const f = JSON.parse(open("../data/users.json")) as Array<User>;
  return f;
});

export const options = {
  ...getDefaultOptions(),
};

export default function main() {
  /**
   * URL for final login, which we obtain from keycloak during oidc-login
   */
  let loginUrl = "";

  group("load spsh", () => {
    const pageResponse = http.get(SPSH_BASE);
    check(pageResponse, {
      "page loaded": () => pageResponse.status === 200,
    });
    loadLinkedResourcesAndCheck(pageResponse);
  });

  group("go to kc login and submit form", () => {
    // load page
    const loginPageResponse = http.get(
      SPSH_BASE + "api/auth/login?redirectUrl=/",
    );
    check(loginPageResponse, {
      "page loaded": () => loginPageResponse.status === 200,
    });
    loadLinkedResourcesAndCheck(loginPageResponse);

    // submit form
    const doc = loginPageResponse.html();
    const actionUrl = doc.find("#kc-form-login").attr("action");
    if (!actionUrl) fail("action for #kc-form-login was not found");

    const user = users[__VU % users.length];
    const loginData = {
      ...user,
      credentialId: "",
    };
    const loginResponse = http.post(actionUrl, loginData, { redirects: 0 });
    check(loginResponse, {
      "submitting login form to kc succeeded": () =>
        loginResponse.status === 302,
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
    });
    loadLinkedResourcesAndCheck(response);
  });

  sleep(1);
}
