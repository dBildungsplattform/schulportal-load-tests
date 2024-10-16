import { check, fail, sleep } from "k6";
import { makeHttpRequest } from "../util/api.ts";
import { defaultTimingCheck, getStatusChecker } from "../util/checks.ts";
import { getDefaultOptions } from "../util/config.ts";
import { prettyLog } from "../util/debug.ts";
import { loadPage, navigateToHomepage } from "../util/page.ts";
import { UserMix } from "../util/users.ts";
import http from "k6/http";

export const options = {
  ...getDefaultOptions(),
};

const serviceProviderName = "School-SH";

export default function main(users = new UserMix({ LEHR: 1 })) {
  const providers = navigateToHomepage(users);
  const target = providers.find((p) => p.name == serviceProviderName);
  if (!target) fail(`could not find sp ${serviceProviderName}`);
  loadPage(target.url);

  // hit logout button in spsh
  let res = makeHttpRequest("get", "auth/logout", {
    params: { redirects: 0 },
  });
  check(res, {
    "got 302": getStatusChecker(302),
    ...defaultTimingCheck,
  });

  res = http.get(res.headers["Location"], {
    redirects: 0,
  });

  // WIP

  check(res, {
    // "got 302": getStatusChecker(302),
    ...defaultTimingCheck,
  });

  prettyLog(res);
  sleep(1);
}
