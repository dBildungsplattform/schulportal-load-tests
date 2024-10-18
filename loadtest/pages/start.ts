import {
  getLoginInfo,
  getServiceProviderLogos,
  getServiceProviders,
} from "../util/api.ts";
import { getFrontendUrl } from "../util/config.ts";
import { PageObject } from "./index.ts";

class StartPage extends PageObject {
  constructor() {
    super("Start", getFrontendUrl());
  }

  navigate(): void {
    super.navigate();
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
