import { check, fail } from "k6";
import http from "k6/http/index";
import { getFrontendUrl } from "../util/config.ts";
import { loadLinkedResourcesAndCheck } from "../util/load-linked-resources.ts";
import { defaultTimingCheck } from "./checks.ts";

const frontendUrl = getFrontendUrl();

export function goToStartPage() {
  loadPage(frontendUrl);
}

export function goToOIDCServiceProvider() {
  // TODO: add url
  const url = frontendUrl;
  fail("url needs to be added");
  loadPage(url);
}

function loadPage(url: string) {
  const response = http.get(url);
  check(response, {
    "page loaded": () => response.status === 200,
    ...defaultTimingCheck,
  });
  loadLinkedResourcesAndCheck(response);
}
