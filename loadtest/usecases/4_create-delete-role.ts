import { check, group } from "k6";
import {
  CreateRolleBodyParams,
  OrganisationResponse,
  RollenArt,
} from "../api-client/generated/index.ts";
import { getDefaultOptions } from "../util/config.ts";
import { goToUserList } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";
import { createRollePage } from "../pages/create-rolle.ts";
import { getOrganisationById, getOrganisationen, postRolle } from "../util/api";
import { EditRollePage } from "../pages/edit-rolle";

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
  // TODO: delete rollen in testOrg
}

export default wrapTestFunction(main);

function main(data: TestData) {
  group("setup", () => {
    goToUserList(users.getLogin());
  });
  const rolleId = group("create rolle", () => {
    // TODO: create rolle in testOrg
    const data = createRollePage.fetchData();
    const bodyParams: CreateRolleBodyParams = {
      name: getRandomString(8),
      administeredBySchulstrukturknoten: "",
      rollenart: RollenArt.Lern,
      merkmale: new Set(),
      systemrechte: new Set(),
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
