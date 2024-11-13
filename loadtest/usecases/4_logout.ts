import { group } from "k6";
import { logout } from "../pages/index";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main(users = getDefaultUserMix()) {
  group("setup", () => {
    login(users.getLogin());
  });
  group("logout", () => {
    logout();
  });
}
