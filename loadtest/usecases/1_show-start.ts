import { group, sleep } from "k6";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultAdminMix } from "../util/users.ts";

const users = getDefaultAdminMix();

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main() {
  group("load start page", () => {
    login(users.getLogin());
  });

  sleep(1);
}
