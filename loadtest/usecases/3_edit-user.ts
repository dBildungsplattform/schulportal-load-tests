import { group } from "k6";
import { DBiamPersonenzuordnungResponse } from "../api-client/generated/index.ts";
import {
  getLoginInfo,
  getParentOrganisationenByIds,
  getPersonById,
  getPersonenkontextWorkflowStep,
  getPersonenUebersichtById,
  getTwoFactorRequired,
  getTwoFactorState,
} from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import { goToUserList } from "../util/page.ts";
import { getDefaultUserMix } from "../util/users.ts";

const users = getDefaultUserMix();

export const options = {
  ...getDefaultOptions(),
};

export default function main() {
  // go to user list
  goToUserList(users.getLogin());
  // get id
  const viewedPersonId = "";

  group("fetch details", () => {
    // https://localhost:8099/api/auth/logininfo
    getLoginInfo();

    // https://localhost:8099/api/2fa-token/required?personId=9ba7433b-6b00-4bdf-b92a-96a3fbe8bb57
    getTwoFactorRequired([`personId=${viewedPersonId}`]);

    // https://localhost:8099/api/personen/9ba7433b-6b00-4bdf-b92a-96a3fbe8bb57
    getPersonById(viewedPersonId);

    // https://localhost:8099/api/dbiam/personenuebersicht/9ba7433b-6b00-4bdf-b92a-96a3fbe8bb57
    const { zuordnungen } = getPersonenUebersichtById(viewedPersonId);

    // https://localhost:8099/api/personenkontext-workflow/step?limit=25
    getPersonenkontextWorkflowStep(["limit=25"]);

    // https://localhost:8099/api/2fa-token/state?personId=9ba7433b-6b00-4bdf-b92a-96a3fbe8bb57
    getTwoFactorState([`personId=${viewedPersonId}`]);

    // https://localhost:8099/api/organisationen/parents-by-ids
    const organisationIds = zuordnungen.map(
      (z: DBiamPersonenzuordnungResponse) => z.sskId,
    );
    getParentOrganisationenByIds(organisationIds);
  });
}
