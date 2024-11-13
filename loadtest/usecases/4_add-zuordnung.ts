import { group } from "k6";
import { OrganisationResponse } from "../api-client/generated/index.ts";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";

type TestData = {
  testOrg: OrganisationResponse;
};

const loginData = new UserMix({ SYSADMIN: 1 }).getLogin();
export const options = {
  ...getDefaultOptions(),
};

export function setup() {}

export function teardown(data: TestData) {}

export default wrapTestFunction(main);

function main(data: TestData) {
  group("setup", () => {
    login(loginData);
    // TODO: go to details page
  });

  group("add zuordnung", () => {
    // TODO:
    // https://localhost:8099/api/personenkontext-workflow/step?limit=25
    // https://localhost:8099/api/personenkontext-workflow/step?limit=25
    // https://localhost:8099/api/personenkontext-workflow/step?organisationId=99a2e34e-c0b7-4afe-9120-a7cbc3dac6b9&limit=25
    // https://localhost:8099/api/organisationen/99a2e34e-c0b7-4afe-9120-a7cbc3dac6b9/administriert
    // https://localhost:8099/api/organisationen?limit=30&typ=SCHULE&systemrechte=SCHULEN_VERWALTEN&organisationIds=99a2e34e-c0b7-4afe-9120-a7cbc3dac6b9
    // https://localhost:8099/api/personenkontext-workflow/step?organisationId=99a2e34e-c0b7-4afe-9120-a7cbc3dac6b9&rolleId=c590a195-8416-44ad-9264-f6e6bd9f6744&limit=25
    // https://localhost:8099/api/personenkontext-workflow/c4852e54-cd0b-45c2-96cf-2028153db08b
    // {"lastModified":"2024-11-07T09:58:41.888Z","count":2,"personenkontexte":[{"personId":"c4852e54-cd0b-45c2-96cf-2028153db08b","organisationId":"d58ec217-42c8-4824-abae-13093eb29f40","rolleId":"c590a195-8416-44ad-9264-f6e6bd9f6744","befristung":null},{"personId":"c4852e54-cd0b-45c2-96cf-2028153db08b","organisationId":"99a2e34e-c0b7-4afe-9120-a7cbc3dac6b9","rolleId":"c590a195-8416-44ad-9264-f6e6bd9f6744"},{"personId":"c4852e54-cd0b-45c2-96cf-2028153db08b","organisationId":"9122528c-f67e-49b7-89e8-2669be7d39f9","rolleId":"c590a195-8416-44ad-9264-f6e6bd9f6744"},{"personId":"c4852e54-cd0b-45c2-96cf-2028153db08b","organisationId":"74567a50-d6d5-4a35-995f-72020b843c61","rolleId":"c590a195-8416-44ad-9264-f6e6bd9f6744","befristung":null}]}
    // TODO: reload details page
  });

  group("delete zuordnung", () => {
    // TODO:
    // https://localhost:8099/api/personenkontext-workflow/step?limit=25
    // https://localhost:8099/api/personenkontext-workflow/step?organisationId=d58ec217-42c8-4824-abae-13093eb29f40&rolleId=c590a195-8416-44ad-9264-f6e6bd9f6744&limit=25
    // https://localhost:8099/api/personenkontext-workflow/c4852e54-cd0b-45c2-96cf-2028153db08b
    // TODO: reload details page
  });
}
