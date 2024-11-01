import { getLoginInfo, getRollen } from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import { goToUserList } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";

const users = new UserMix({ SYSADMIN: 1 });

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main() {
  goToUserList(users.getLogin());
  getLoginInfo();
  for (let offset = 0; offset < 5; offset++)
    getRollen([`offset=${offset}`, "limit=30", "searchStr="]);
}
