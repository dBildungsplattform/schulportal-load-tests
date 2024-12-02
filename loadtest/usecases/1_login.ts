import { check, group } from "k6";
import { RefinedResponse, ResponseType } from "k6/http";
import { Counter, Trend } from "k6/metrics";
import { logout } from "../pages/index.ts";
import { loginPage } from "../pages/login.ts";
import { defaultHttpCheck, defaultTimingCheck } from "../util/checks.ts";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page.ts";
import { createLogins, deleteAllTestUsers } from "../util/resource-helper.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { LoginData, UserMix } from "../util/users.ts";

const successfulLoginCounter = new Counter("successful_logins_counter");
const successfulLoginDuration = new Trend("successful_logins_duration", true);
type TestData = {
  users: Array<LoginData>;
};

export const options = {
  ...getDefaultOptions(),
  setupTimeout: "180s",
};
const admin = new UserMix({ SYSADMIN: 1 });
const user = admin.getLogin();
// export function setup() {
//   login(admin.getLogin());
//   deleteAllTestUsers();
//   const users = createLogins({ LEHR: 100 });
//   logout();
//   return { users };
// }
// export function teardown() {
//   login(admin.getLogin());
//   deleteAllTestUsers();
//   logout();
// }
export default wrapTestFunction(main);

function main(/*{ users }: TestData*/) {
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
    keycloakFormResponse = loginPage.submitForm(loginPageResponse, user);
    check(keycloakFormResponse, {
      "submitting login form to kc succeeded": () =>
        keycloakFormResponse.status === 302,
      ...defaultTimingCheck,
    });
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
