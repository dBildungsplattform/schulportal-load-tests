import { check, fail, group } from "k6";
import { getDefaultOptions } from "../util/config.ts";
import { prettyLog } from "../util/debug.ts";
import { loadPage, login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

const serviceProviderName = "E-Mail";

export default wrapTestFunction(main);

function main(users = new UserMix({ LEHR: 1 })) {
  const { providers } = login(users.getLogin());
  group("go to sp", () => {
    const target = providers.find((p) => p.name == serviceProviderName);
    if (!check(target, { "service provider found": (t) => t != undefined }))
      fail(`could not find sp ${serviceProviderName}`);
    const response = loadPage(target!.url);
    check(response, {
      "arrived at ox": (r) => {
        try {
          return r.url.includes("ox");
        } catch (error) {
          prettyLog(error);
          return false;
        }
      },
      "did not end at kc": (r) => {
        try {
          return !(r.url.includes("keycloak") || r.url.includes("auth"));
        } catch (error) {
          prettyLog(error);
          return false;
        }
      },
    });
  });
}
