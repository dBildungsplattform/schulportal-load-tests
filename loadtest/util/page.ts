import { check } from "k6";
import http from "k6/http";
import { loginPage } from "../pages/login.ts";
import { startPage } from "../pages/start.ts";
import { userListPage } from "../pages/user-list.ts";
import { getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import { defaultTimingCheck } from "./checks.ts";
import { LoginData } from "./users.ts";

const frontendUrl = getFrontendUrl();

export function goToLandingPage() {
  loadPage(frontendUrl);
}

/**
 * Complete the initial page load, login and navigation to the start page with associated data loading..
 * @param user user to impersonate during login
 */
export function login(user: LoginData) {
  loginPage.login(user);
  return startPage.fetchData();
}

/**
 * Complete login flow and navigation to user list
 */
export function goToUserList(user: LoginData) {
  login(user);
  userListPage.navigate();
}

/**
 * Load page and linked resources from given url
 * @param url of the page to load
 * @param name optional name for easier filtering in metrics
 */
export function loadPage(url: string, name?: string) {
  const response = http.get(url, { tags: { name: name ?? "Load page" } });
  check(response, {
    "page loaded": () => response.status === 200,
    ...defaultTimingCheck,
  });
  loadLinkedResourcesAndCheck(response);
}
