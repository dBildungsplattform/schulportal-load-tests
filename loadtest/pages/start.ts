import {
  getLoginInfo,
  getServiceProviderLogos,
  getServiceProviders,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadPage } from "../util/page.ts";
import { PageObject } from "./index.ts";

// class StartPage extends PageObject {
class StartPage implements PageObject {
  name = "Start";
  url = getFrontendUrl();

  navigate(): void {
    loadPage(this.url, this.name);
    this.fetchData();
  }

  fetchData() {
    const loginInfo = getLoginInfo();
    const providers = getServiceProviders();
    getServiceProviderLogos(providers);
    return { loginInfo, providers };
  }
}

export const startPage = new StartPage();
