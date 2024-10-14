import { check } from "k6";
import { Selection } from "k6/html";
import http, { RefinedResponse, ResponseType } from "k6/http";
import { defaultTimingCheck } from "./checks.ts";

function getBaseUrl(url: string) {
  const segments = url.split("/").filter((s) => s.length > 0);
  const protocol = url.split("://")[0];
  return `${protocol}://${segments[1]}`;
}

/**
 * Fetch resources linked in a document
 * @param response response containing the document
 * @param recurseDepth how many layers of linked resources to load
 * @returns all responses, including all subsequent responses for nested linked resources
 */
export default function loadLinkedResources(
  response: RefinedResponse<ResponseType>,
  recurseDepth = 3,
) {
  const baseUrl = getBaseUrl(response.url);
  let docList = [response.html()];
  let totalResponses: Array<RefinedResponse<ResponseType>> = [];
  let responses: Array<RefinedResponse<ResponseType>> = [];
  while (recurseDepth-- && docList.length > 0) {
    responses = [];
    for (const doc of docList) {
      const links = getLinksForLinkedResources(doc);
      const urls = links.map((link: string) => `${baseUrl}${link}`);
      responses = responses.concat(urls.map((url) => http.get(url)));
    }
    docList = responses.map((response) => response.html());
    totalResponses = totalResponses.concat(responses);
  }
  return totalResponses;
}

function getLinksForLinkedResources(doc: Selection): Array<string> {
  return doc
    .find("link")
    .toArray()
    .map((selection) => selection.attr("href") ?? "")
    .concat(
      doc
        .find("script")
        .toArray()
        .map((selection) => selection.attr("src") ?? ""),
    )
    .filter((link) => link.startsWith("/"));
}

export function loadLinkedResourcesAndCheck(
  response: RefinedResponse<ResponseType>,
) {
  const linkedResponses = loadLinkedResources(response);
  linkedResponses.forEach((linkedResponse) =>
    check(linkedResponse, {
      "fetching linked resources succeeded": () =>
        200 <= linkedResponse.status && linkedResponse.status < 300,
      ...defaultTimingCheck,
    }),
  );
}
