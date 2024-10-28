import { group } from "k6";
import { DBiamPersonenzuordnungResponse } from "../api-client/generated/index.ts";
import { userListPage } from "../pages/user-list.ts";
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
import { pickRandomItem } from "../util/data.ts";
import { login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultAdminMix } from "../util/users.ts";

const users = getDefaultAdminMix();

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main() {
  // go to user list
  login(users.getLogin());
  const { personenuebersichten } = userListPage.fetchData();

  const viewedPersonId = pickRandomItem(personenuebersichten).personId;

  group("fetch details", () => {
    getLoginInfo();

    getPersonById(viewedPersonId);

    const { zuordnungen } = getPersonenUebersichtById(viewedPersonId);

    getPersonenkontextWorkflowStep(["limit=25"]);

    const organisationIds = zuordnungen.map(
      (z: DBiamPersonenzuordnungResponse) => z.sskId,
    );
    getParentOrganisationenByIds(organisationIds);
  });

  group("fetch 2fa info", () => {
    getTwoFactorRequired([`personId=${viewedPersonId}`]);
    getTwoFactorState([`personId=${viewedPersonId}`]);
  });
}
