import { check, fail, group, sleep } from "k6";
import http from "k6/http";
import { getBackendUrl, getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import login from "./1_login.ts";
import { prettyLog } from "../util/debug.ts";
import { getDefaultAdminMix } from "../util/users.ts";

const frontendUrl = getFrontendUrl();
const backendUrl = getBackendUrl();

export default function main(users = getDefaultAdminMix()) {
  login(users);

  group("load start page", () => {
    const pageResponse = http.get(frontendUrl);
    check(pageResponse, {
      "page loaded": () => pageResponse.status === 200,
    });
    loadLinkedResourcesAndCheck(pageResponse);

    const logininfoResponse = http.get(http.url`${backendUrl}auth/logininfo`);
    check(logininfoResponse, {
      "got logininfo": (r) => r.status === 200,
    });
    const providerResponse = http.get(http.url`${backendUrl}provider`);
    check(providerResponse, {
      "got providers": (r) => r.status === 200,
    });
    try {
      const providers = providerResponse.json() as unknown as Array<{
        id: string;
      }>;
      for (const provider of providers) {
        const logoResponse = http.get(
          http.url`${backendUrl}provider/${provider.id}/logo`,
        );
        check(logoResponse, {
          "got provider logos": (r) => r.status === 200,
        });
      }
    } catch (error) {
      prettyLog(error);
      fail("did not get provider logo");
    }
  });

  sleep(1);
}
