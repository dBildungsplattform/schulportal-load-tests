import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

export class ProfilePage implements PageObject {
  name = "UserList";
  url = `${getFrontendUrl()}admin/personen`;

  constructor(public personId: string) {}

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  fetchData() {
    // TODO: implement
    //stub
  }
}
