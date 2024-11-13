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
import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

export class UserDetailsPage implements PageObject {
  name = "UserDetails";
  url: string;

  constructor(public personId: string) {
    this.url = `${getFrontendUrl()}admin/personen/${personId}`;
  }

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  fetchData() {
    group("fetch details", () => {
      getLoginInfo();
      getPersonById(this.personId);
      const { zuordnungen } = getPersonenUebersichtById(this.personId);
      getPersonenkontextWorkflowStep(["limit=25"]);
      const organisationIds = zuordnungen.map(
        (z: DBiamPersonenzuordnungResponse) => z.sskId,
      );
      getParentOrganisationenByIds(organisationIds);
    });

    group("fetch 2fa info", () => {
      getTwoFactorRequired([`personId=${this.personId}`]);
      getTwoFactorState([`personId=${this.personId}`]);
    });
  }
}
