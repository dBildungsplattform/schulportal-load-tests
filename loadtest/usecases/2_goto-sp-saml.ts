import { check, fail, group } from "k6";
import { get } from "k6/http";
import { getDefaultOptions } from "../util/config.ts";
import { loadPage, login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";
import { prettyLog } from "../util/debug.ts";

export const options = {
  ...getDefaultOptions(),
};

const serviceProviderName = "School-SH";

export default wrapTestFunction(main);

// function main(users = new UserMix({ LEHR: 1000 })) {
function main(users = new UserMix({ SYSADMIN: 1 })) {
  // const { providers } = login(users.getLogin());
  login(users.getLogin());

  const response = group("follow link", () => {
    // const target = providers.find((p) => p.name == serviceProviderName);
    // if (!target) fail(`could not find sp ${serviceProviderName}`);
    // return loadPage(target.url);
    return get("https://141.91.161.139", {
      tags: { name: "navigate to dWebtor" },
    });
  });

  group("finish saml", () => {
    let submissionResponse = response.submitForm();
    check(submissionResponse, {
      "post to kc succeeded": (r) => r.status == 200,
    });
    submissionResponse = submissionResponse.submitForm();
    check(submissionResponse, {
      "post to school-sh succeeded": (r) => r.status == 200,
    });

    const stringifiedBody = submissionResponse.body?.toString();
    if (!stringifiedBody) {
      fail("no body returned");
    }
    const matches = RegExp(/URL='(\S+)'/).exec(stringifiedBody);
    const redirectUrl = matches?.at(matches?.length - 1) ?? undefined;
    const redirectUrlFound = check(redirectUrl, {
      "redirect url found": (url) => url != undefined,
    });
    if (!redirectUrlFound) fail("redirect url not found");
    const redirectResponse = get(redirectUrl!, {
      headers: {
        referer: submissionResponse.url,
      },
      tags: { name: "redirect to school-sh login" },
    });
    check(redirectResponse, {
      "reached dWebtor error page": (r) => {
        return r.html().find(".box").text().includes("dWebTor School-SH PROD");
      },
      "got 402": (r) => {
        return r.status == 402;
      },
    });
    // check(redirectResponse, {
    //   "reached school-sh login": (r) => {
    //     return r.html().find("#loginBox").text().includes("Anmeldung");
    //   },
    // });
  });
}
