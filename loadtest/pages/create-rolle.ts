import {
  getAllProviders,
  getLoginInfo,
  getOrganisationen,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

class CreateRollePage implements PageObject {
  name = "UserList";
  url = `${getFrontendUrl()}admin/rollen/new`;

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  // fetch on initial load
  fetchData() {
    getLoginInfo();
    const organisationen = getOrganisationen([
      "systemrechte=ROLLEN_VERWALTEN",
      "excludeTyp=KLASSE",
    ]);
    const providers = getAllProviders();
    return {
      organisationen,
      providers,
    };
  }
}

export const createRollePage = new CreateRollePage();
