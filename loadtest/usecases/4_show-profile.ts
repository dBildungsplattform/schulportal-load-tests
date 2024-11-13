import { check, fail, group } from "k6";
import { ProfilePage } from "../pages/profile";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main(users = getDefaultUserMix()) {
  const personId = group("setup", () => {
    const { loginInfo } = login(users.getLogin());
    if (
      !check(loginInfo, {
        "personId found": (info) => info.personId != undefined,
      })
    )
      fail("no personId found");
    return loginInfo.personId!;
  });
  group("go to profile", () => {
    const profilePage = new ProfilePage(personId);
    profilePage.navigate();
  });
}
