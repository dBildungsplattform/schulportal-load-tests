import {
  deleteRolleById,
  getAllProviders,
  getLoginInfo,
  getOrganisationById,
  getRolleById,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

export class EditRollePage implements PageObject {
  name = "UserList";
  url = `${getFrontendUrl()}admin/rollen/new`;

  constructor(public rolleId: string) {}

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  // fetch on initial load
  fetchData() {
    getLoginInfo();
    const rolle = getRolleById(this.rolleId);
    const organisation = getOrganisationById(
      rolle.administeredBySchulstrukturknoten,
    );

    const providers = getAllProviders();
    return {
      rolle,
      organisation,
      providers,
    };
  }

  deleteRolle() {
    deleteRolleById(this.rolleId);
    // TODO: go to rolle list
  }
}
