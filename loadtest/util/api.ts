import { check, fail } from "k6";
import http, { RefinedParams, RequestBody, ResponseType } from "k6/http";
import {
  DbiamCreatePersonWithPersonenkontexteBodyParams,
  DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response,
  DBiamPersonResponse,
  FindRollenResponse,
  OrganisationResponse,
  PersonenkontextWorkflowResponse,
  PersonFrontendControllerFindPersons200Response,
  ServiceProviderResponse,
  UserinfoResponse,
} from "../api-client/generated/index.ts";
import {
  defaultHttpCheck,
  defaultTimingCheck,
  getStatusChecker,
} from "./checks.ts";
import { getBackendUrl } from "./config.ts";
import { prettyLog } from "./debug.ts";

const backendUrl = getBackendUrl();

export function makeQueryString(pairs: Array<string>): string {
  return "?".concat(pairs.join("&"));
}

export function makeHttpRequest(
  verb: string,
  resource: string,
  options?: Partial<{
    query: Array<string>;
    body: RequestBody;
    params: RefinedParams<ResponseType | undefined>;
  }>,
) {
  const queryString = options?.query ? makeQueryString(options.query) : "";
  const url = `${backendUrl}${resource}${queryString}`;
  return http.request(verb.toUpperCase(), url, options?.body, {
    ...options?.params,
    tags: {
      resource,
    },
  });
}

export function getLoginInfo() {
  const response = makeHttpRequest("get", "auth/logininfo");
  check(response, defaultHttpCheck);
  return response.json() as unknown as UserinfoResponse;
}

export function getServiceProviders() {
  const providerResponse = makeHttpRequest("get", "provider");
  check(providerResponse, defaultHttpCheck);
  const providers = providerResponse.json() as unknown as Array<{
    id: string;
    name: string;
    url: string;
  }>;
  return providers as unknown as Array<ServiceProviderResponse>;
}

export function getServiceProviderLogos(providers: Array<{ id: string }>) {
  try {
    for (const provider of providers) {
      const logoResponse = http.get(
        http.url`${backendUrl}provider/${provider.id}/logo`,
        { tags: { resource: "provider/${id}/logo" } },
      );
      check(logoResponse, {
        "got provider logos": (r) => r.status === 200,
        ...defaultTimingCheck,
      });
    }
  } catch (error) {
    prettyLog(error);
    fail("did not get provider logo");
  }
}

export function getOrganisationen(query?: Array<string>) {
  const response = makeHttpRequest("get", "organisationen", { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as Array<OrganisationResponse>;
}

export function getAdministeredOrganisationenById(
  id: string,
  query?: Array<string>,
) {
  const queryString = query ? makeQueryString(query) : "";
  const response = http.get(
    http.url`${backendUrl}organisationen/${id}/administriert${queryString}`,
    { tags: { resource: "organisationen/${id}/administriert" } },
  );
  check(response, defaultHttpCheck);
  return response.json() as unknown as Array<OrganisationResponse>;
}

export function getPersonenIds(
  personen?: PersonFrontendControllerFindPersons200Response,
): Set<string> {
  if (!personen) personen = getPersonen();
  return new Set(personen.items.map(({ person }) => person.id));
}

export function getPersonen(
  query?: Array<string>,
) {
  const response = makeHttpRequest("get", "personen-frontend", { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as PersonFrontendControllerFindPersons200Response;
}

export function getPersonenUebersicht(
  personIds: Set<string>,
) {
  const body = JSON.stringify({
    personIds: Array.from(personIds),
  });
  const params = {
    headers: { "Content-Type": "application/json" },
  };
  const response = makeHttpRequest("post", "dbiam/personenuebersicht", {
    body,
    params,
  });
  check(response, {
    "got 201": getStatusChecker(201),
    ...defaultTimingCheck,
  });
  return response.json(
    "items",
  ) as unknown as DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response["items"];
}

export function getRollen(
  query?: Array<string>,
) {
  const response = makeHttpRequest("get", "person-administration/rollen", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json(
    "moeglicheRollen",
  ) as unknown as FindRollenResponse["moeglicheRollen"];
}

export function getPersonenkontextWorkflowStep(query?: Array<string>) {
  const response = makeHttpRequest("get", "personenkontext-workflow/step", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json() as unknown as PersonenkontextWorkflowResponse;
}

export function postPersonenkontextWorkflow(
  body: DbiamCreatePersonWithPersonenkontexteBodyParams,
) {
  const params = {
    headers: { "Content-Type": "application/json" },
  };
  const response = makeHttpRequest("post", "personenkontext-workflow", {
    body: JSON.stringify(body),
    params,
  });
  check(response, {
    "got 201": getStatusChecker(201),
    ...defaultTimingCheck,
  });
  return response.json() as unknown as DBiamPersonResponse;
}
