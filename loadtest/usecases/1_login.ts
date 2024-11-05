import { check, group } from "k6";
import { RefinedResponse, ResponseType } from "k6/http";
import { sha512 } from "k6/crypto";
import { Counter, Trend } from "k6/metrics";
import { loginPage } from "../pages/login.ts";
import { defaultHttpCheck, defaultTimingCheck } from "../util/checks.ts";
import { getDefaultOptions } from "../util/config.ts";
import { prettyLog } from "../util/debug.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";

const successfulLoginCounter = new Counter("successful_logins_counter");
const successfulLoginDuration = new Trend("successful_logins_duration", true);
const users = getDefaultUserMix();

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main() {
  /**
   * URL for final login, which we obtain from keycloak during oidc-login
   */
  let keycloakFormResponse: RefinedResponse<ResponseType | undefined>;
  let loginPageResponse: RefinedResponse<ResponseType | undefined>;

  const startTime = new Date();

  group("go to kc login", () => {
    loginPage.navigate();
    loginPageResponse = loginPage.goToKeycloakLogin();
    check(loginPageResponse, defaultHttpCheck);
  });

  group("submit form", () => {
    // submit form
    const user = users.getLogin();
    prettyLog(sha512(user.username, "hex"), "user");
    prettyLog(sha512(user.password, "hex"), "pass");
    keycloakFormResponse = loginPage.submitForm(loginPageResponse, user);
    check(keycloakFormResponse, {
      "submitting login form to kc succeeded": () =>
        keycloakFormResponse.status === 302,
      ...defaultTimingCheck,
    });
    console.log(keycloakFormResponse.url);
    console.log(keycloakFormResponse.status);
    console.log(keycloakFormResponse.body);
  });

  group("finish login", () => {
    const response = loginPage.complete(keycloakFormResponse);
    const loginSucceeded = check(response, {
      "login succeeded": () =>
        response.status === 200 || response.status === 302,
    });
    check(response, {
      ...defaultTimingCheck,
    });
    const endTime = new Date();
    if (loginSucceeded) {
      successfulLoginCounter.add(1);
      successfulLoginDuration.add(endTime.valueOf() - startTime.valueOf());
    }
  });
}
