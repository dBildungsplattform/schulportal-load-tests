import { fail, sleep } from "k6";
import { getDefaultOptions } from "../util/config.ts";
import { loadPage, navigateToHomepage } from "../util/page.ts";
import { UserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

const serviceProviderName = "School-SH";

export default function main(users = new UserMix({ LEHR: 1 })) {
  const providers = navigateToHomepage(users);
  const target = providers.find((p) => p.name == serviceProviderName);
  if (!target) fail(`could not find sp ${serviceProviderName}`);
  loadPage(target.url);
  sleep(1);
}
