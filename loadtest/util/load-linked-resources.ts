import { check } from "k6";
import http, { BatchRequests, RefinedResponse, ResponseType } from "k6/http";

function getBaseUrl(url: string) {
  const segments = url.split("/").filter((s) => s.length > 0);
  const protocol = url.split("://")[0];
  return `${protocol}://${segments[1]}`;
}

export default function loadLinkedResources(
  response: RefinedResponse<ResponseType>,
) {
  const baseUrl = getBaseUrl(response.url);
  const doc = response.html();
  const linkedResources = doc.find("link").toArray();
  // TODO: this needs to handle scripts and follow up as well
  const requests: BatchRequests = [];
  linkedResources.forEach((resource) => {
    const link = resource.attr("href");
    if (!link) return;

    const url = http.url`${baseUrl}${link}`;
    const request = {
      method: "GET",
      url,
    };
    requests.push(request);
  });
  return http.batch(requests);
}

export function loadLinkedResourcesAndCheck(
  response: RefinedResponse<ResponseType>,
) {
  const linkedResponses = loadLinkedResources(response);
  linkedResponses.forEach((linkedResponse) =>
    check(linkedResponse, {
      "fetching linked resources succeeded": () =>
        200 <= linkedResponse.status && linkedResponse.status < 300,
    }),
  );
}
