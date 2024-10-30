import { check, fail, group } from "k6";
import { get } from "k6/http";
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

  const response = group("follow link", () => {
    const target = providers.find((p) => p.name == serviceProviderName);
    if (!target) fail(`could not find sp ${serviceProviderName}`);
    return loadPage(target.url);
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
      "reached school-sh login": (r) => {
        return r.html().find("#loginBox").text().includes("Anmeldung");
      },
    });
  });
}
