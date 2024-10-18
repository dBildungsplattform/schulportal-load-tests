import {
  getLoginInfo,
  getOrganisationen,
  getPersonenIds,
  getPersonenUebersicht,
  getRollen,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { PageObject } from "./index.ts";

class UserListPage extends PageObject {
  constructor() {
    super("UserList", `${getFrontendUrl()}admin/personen`);
  }

  navigate(): void {
    super.navigate();
    this.fetchData();
  }

  // fetch on initial load
  fetchData() {
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
    return {
      organisationen,
      personenuebersichten,
      rollen,
    };
  }
}

export const userListPage = new UserListPage();
