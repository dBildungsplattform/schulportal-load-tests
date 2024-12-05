import { check, fail, group } from "k6";
import { get } from "k6/http";
import { logout } from "../pages/index.ts";
import { getDefaultOptions } from "../util/config.ts";
import { loadPage, login } from "../util/page.ts";
import { createLogins, deleteAllTestUsers } from "../util/resource-helper.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { LoginData, UserMix } from "../util/users.ts";

type TestData = {
  users: Array<LoginData>;
};

export const options = {
  ...getDefaultOptions(),
  setupTimeout: "180s",
};
const admin = new UserMix({ SYSADMIN: 1 });
export function setup() {
  login(admin.getLogin());
  deleteAllTestUsers();
  const users = createLogins({ LEHR: 100 });
  logout();
  return { users };
}
export function teardown() {
  login(admin.getLogin());
  deleteAllTestUsers();
  logout();
}

const serviceProviderName = "School-SH";

export default wrapTestFunction(main);

function main({ users }: TestData) {
  const { providers } = login(users[__VU - 1]);

  const response = group("follow link", () => {
    const target = providers.find((p) => p.name == serviceProviderName);
    if (!target) fail(`could not find sp ${serviceProviderName}`);
    return loadPage(target.url);
  });

  group("finish saml", () => {
    let submissionResponse = response.submitForm({
      params: { tags: { name: "post to kc" } },
    });
    check(submissionResponse, {
      "post to kc succeeded": (r) => r.status == 200,
    });
    submissionResponse = submissionResponse.submitForm({
      params: { tags: { name: "post to gateway" } },
    });
    check(submissionResponse, {
      "post to gateway succeeded": (r) => r.status == 200,
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
