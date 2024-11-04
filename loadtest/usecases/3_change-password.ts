import { check, fail, group } from "k6";
import { ProfilePage } from "../pages/profile.ts";
import { getResetPassword } from "../util/api.ts";
import { defaultHttpCheck, defaultTimingCheck } from "../util/checks.ts";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";

const users = getDefaultUserMix();
export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main() {
  const loginData = users.getLogin();

  const loginResponse = login(loginData);
  const { personId } = loginResponse.loginInfo;
  if (!personId) fail("no personId");

  const profilePage = new ProfilePage(personId);
  group("go to profile", () => {
    profilePage.navigate();
  });

  const reenterPasswordForm = group("redirect to keycloak", () => {
    const response = getResetPassword([
      `redirectUrl=${profilePage.url}`,
      `login_hint=${loginData.username}`,
    ]);
    check(response, {
      ...defaultHttpCheck,
    });
    return response;
  });

  group("confirm and change password", () => {
    const passwordChangeForm = reenterPasswordForm.submitForm({
      fields: {
        password: loginData.password,
        credentialId: "",
      },
    });
    check(passwordChangeForm, {
      "password confirmation succeeded": (r) => r.status == 200,
      ...defaultTimingCheck,
    });
    const response = passwordChangeForm.submitForm({
      fields: {
        username: loginData.username,
        password: "",
        "password-new": loginData.password,
        "password-confirm": loginData.password,
      },
    });
    check(response, {
      ...defaultHttpCheck,
    });
  });
}
