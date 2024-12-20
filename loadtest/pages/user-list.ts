import { DBiamPersonenuebersichtResponse } from "../api-client/generated/models/DBiamPersonenuebersichtResponse.ts";
import { FindRollenResponse } from "../api-client/generated/models/FindRollenResponse.ts";
import { OrganisationResponse } from "../api-client/generated/models/OrganisationResponse.ts";
import {
  getLoginInfo,
  getOrganisationen,
  getPersonenIds,
  getPersonenUebersicht,
  getRollen,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

type FetchedData = {
  organisationen: OrganisationResponse[];
  personenuebersichten: DBiamPersonenuebersichtResponse[];
  rollen: FindRollenResponse;
};
class UserListPage implements PageObject {
  name = "UserList";
  url = `${getFrontendUrl()}admin/personen`;

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  // fetch on initial load
  fetchData(): FetchedData {
    getLoginInfo();
    const organisationen = getOrganisationen([
      "limit=25",
      "systemrechte=PERSONEN_VERWALTEN",
      "excludeTyp=KLASSE",
    ]);
    let personIds = getPersonenIds();
    let personenuebersichten = getPersonenUebersicht(personIds);
    // this emulates faulty behavior of the frontend; does not make sense
    for (let i = 0; i < 1; i++) {
      personIds = getPersonenIds();
      personenuebersichten = getPersonenUebersicht(personIds);
    }

    const rollen = getRollen(["rolleName="]);
    return { organisationen, personenuebersichten, rollen };
  }
}

export const userListPage = new UserListPage();
