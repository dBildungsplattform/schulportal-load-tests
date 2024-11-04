import { group } from "k6";
import {
  getLoginInfo,
  getPersonenUebersichtById,
  getPersonInfo,
  getTwoFactorRequired,
  getTwoFactorState,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

export class ProfilePage implements PageObject {
  name = "UserDetails";
  url: string;

  constructor(public personId: string) {
    this.url = `${getFrontendUrl()}profile`;
  }

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  fetchData() {
    group("fetch profile", () => {
      getLoginInfo();
      getPersonInfo();
      getPersonenUebersichtById(this.personId);
    });

    group("fetch 2fa info", () => {
      getTwoFactorRequired([`personId=${this.personId}`]);
      getTwoFactorState([`personId=${this.personId}`]);
    });
  }
}
