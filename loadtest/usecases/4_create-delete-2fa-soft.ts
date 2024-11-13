import { check, group } from "k6";
import {
  CreateRolleBodyParams,
  OrganisationResponse,
  RollenArt,
  TokenInitBodyParams,
} from "../api-client/generated/index.ts";
import { getDefaultOptions } from "../util/config.ts";
import { goToUserList } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix, UserMix } from "../util/users.ts";
import { createRollePage } from "../pages/create-rolle.ts";
import { getOrganisationById, getOrganisationen, postRolle } from "../util/api";
import { EditRollePage } from "../pages/edit-rolle";

type TestData = {
  testOrg: OrganisationResponse;
};

export const options = {
  ...getDefaultOptions(),
};
const users = new UserMix({ SYSADMIN: 1000 });

export function setup() {
  // TODO: get testOrg
  // TODO: create test users
}

export function teardown(data: TestData) {
  // TODO: delete test users in testOrg
}

export default wrapTestFunction(main);

function main(data: TestData) {
  const personId = group("setup", () => {
    goToUserList(users.getLogin());
    // TODO: pick user
    // TODO: go to details
  });
  const rolleId = group("create token", () => {
    const bodyParams: TokenInitBodyParams = {
      personId,
    };
    const rolleResponse = postRolle(bodyParams);
    check(rolleResponse, {
      "rolle created": (r) => r.id != undefined,
    });
    getOrganisationById(bodyParams.administeredBySchulstrukturknoten);
    return rolleResponse.id;
  });
  group("delete rolle", () => {
    const po = new EditRollePage(rolleId);
    po.fetchData();
    po.deleteRolle();
  });
}
