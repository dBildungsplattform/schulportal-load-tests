import { fail, sleep } from "k6";
import { getDefaultOptions } from "../util/config.ts";
import { loadPage, login } from "../util/page.ts";
import { getDefaultAdminMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

const serviceProviderName = "School-SH";

export default function main(users = getDefaultAdminMix()) {
  const { providers } = login(users.getLogin());
  const target = providers.find((p) => p.name == serviceProviderName);
  if (!target) fail(`could not find sp ${serviceProviderName}`);
  loadPage(target.url);
  sleep(1);
}
