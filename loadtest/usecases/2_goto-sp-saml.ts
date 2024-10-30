import { check, fail, sleep } from "k6";
import { getDefaultOptions } from "../util/config.ts";
import { prettyLog } from "../util/debug.ts";
import { loadPage, login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultAdminMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

const serviceProviderName = "School-SH";

export default wrapTestFunction(main);

function main(users = getDefaultAdminMix()) {
  const { providers } = login(users.getLogin());
  const target = providers.find((p) => p.name == serviceProviderName);
  if (!target) fail(`could not find sp ${serviceProviderName}`);
  const response = loadPage(target.url);
  check(response, {
    "found Anmeldung": (r) => {
      try {
        return r.html().find("#loginBox").text().includes("Anmeldung");
      } catch (error) {
        prettyLog(error);
        return false;
      }
    },
  });
  sleep(1);
}
