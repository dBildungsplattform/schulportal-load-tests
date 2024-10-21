import { getLoginInfo, getRollen } from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import { UserMix } from "../util/users.ts";

const users = new UserMix({ SYSADMIN: 1 });

export const options = {
  ...getDefaultOptions(),
};

export default function main() {
  // https://localhost:8099/api/auth/logininfo
  getLoginInfo();
  // https://localhost:8099/api/rolle?offset=0&limit=30&searchStr=
  for (let offset = 0; offset < 5; offset++)
    getRollen([`offset=${offset}`, "limit=30", "searchStr="]);
}
