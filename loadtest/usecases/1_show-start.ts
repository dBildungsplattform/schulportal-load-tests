import { group, sleep } from "k6";
import {
  getLoginInfo,
  getServiceProviderLogos,
  getServiceProviders,
} from "../util/api.ts";
import { goToStartPage } from "../util/page.ts";
import { getDefaultAdminMix } from "../util/users.ts";
import login from "./1_login.ts";

export default function main(users = getDefaultAdminMix()) {
  login(users);

  group("load start page", () => {
    goToStartPage();

    getLoginInfo();
    const providers = getServiceProviders();
    getServiceProviderLogos(providers);
  });

  sleep(1);
}
