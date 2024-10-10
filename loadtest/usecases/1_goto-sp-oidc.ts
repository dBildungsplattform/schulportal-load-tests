import { sleep } from "k6";
import showStart from "../usecases/1_show-start.ts";
import { getDefaultAdminMix } from "../util/users.ts";
import { goToOIDCServiceProvider } from "../util/page.ts";

export default function main(users = getDefaultAdminMix()) {
  showStart(users);
  goToOIDCServiceProvider();
  sleep(1);
}
