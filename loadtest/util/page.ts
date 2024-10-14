import { check } from "k6";
import http from "k6/http";
import login from "../usecases/1_login.ts";
import goToStart from "../usecases/1_show-start.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import {
  getLoginInfo,
  getOrganisationen,
  getPersonenIds,
  getPersonenUebersicht,
  getRollen,
  getServiceProviderLogos,
  getServiceProviders,
} from "./api.ts";
import { defaultTimingCheck } from "./checks.ts";
import { getDefaultAdminMix, UserMix } from "./users.ts";

const frontendUrl = getFrontendUrl();

export function goToStartPage() {
  loadPage(frontendUrl);
}

export function navigateToHomepage(users: UserMix) {
  login(users);
  goToStartPage();
  getLoginInfo();
  const providers = getServiceProviders();
  getServiceProviderLogos(providers);
  return providers;
}

export function navigateToUserList(users = getDefaultAdminMix()) {
  goToStart(users);
  getLoginInfo();
  getOrganisationen([
    "limit=25",
    "systemrechte=PERSONEN_VERWALTEN",
    "excludeTyp=KLASSE",
  ]);

  for (let i = 0; i < 2; i++) {
    const personIds = getPersonenIds();
    getPersonenUebersicht(personIds);
  }

  getRollen(["rolleName="]);
}

export function loadPage(url: string) {
  const response = http.get(url);
  check(response, {
    "page loaded": () => response.status === 200,
    ...defaultTimingCheck,
  });
  loadLinkedResourcesAndCheck(response);
}
