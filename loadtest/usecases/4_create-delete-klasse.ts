import { group } from "k6";
import { getDefaultOptions } from "../util/config.ts";
import { goToUserList } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";
import { OrganisationResponse } from "../api-client/generated/index.ts";

type TestData = {
  testOrg: OrganisationResponse;
};

export const options = {
  ...getDefaultOptions(),
};
const users = getDefaultUserMix();

export function setup() {
  // TODO: get testOrg
}

export function teardown(data: TestData) {
  // TODO: delete klassen in testOrg
}

export default wrapTestFunction(main);

function main(data: TestData) {
  group("setup", () => {
    goToUserList(users.getLogin());
  });
  const klasseId = group("create klasse", () => {
    // TODO: create klasse in testOrg
  });
  group("delete klasse", () => {
    // TODO: delete klasse in testOrg
  });
}
