import { check, fail } from "k6";

import {
  del,
  get,
  patch,
  put,
  RefinedParams,
  request,
  RequestBody,
  ResponseType,
  url,
} from "k6/http";
import {
  CreateOrganisationBodyParams,
  DbiamCreatePersonWithPersonenkontexteBodyParams,
  DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response,
  DBiamPersonenuebersichtResponse,
  DBiamPersonResponse,
  FindRollenResponse,
  LockUserBodyParams,
  OrganisationResponse,
  ParentOrganisationenResponse,
  PersonendatensatzResponse,
  PersonenkontextWorkflowResponse,
  PersonFrontendControllerFindPersons200Response,
  PersonInfoResponse,
  ServiceProviderResponse,
  TokenRequiredResponse,
  TokenStateResponse,
  UserinfoResponse,
} from "../api-client/generated/index.ts";
import {
  defaultHttpCheck,
  defaultTimingCheck,
  getStatusChecker,
} from "./checks.ts";
import { getBackendUrl } from "./config.ts";
import { getFutureDate, NAME_PREFIX } from "./data.ts";
import { prettyLog } from "./debug.ts";

const backendUrl = getBackendUrl();

export function makeQueryString(pairs: Array<string>): string {
  return "?".concat(pairs.map(encodeURI).join("&"));
}
/**
 * Removes querystring from url. Returns unchanged string, if no query is present
 * @param url url to remove qs from
 * @returns url without qs
 */
export function removeQueryString(url: string): string {
  return url.split("?")[0];
}

export function transformQueryToTag(pairs?: Array<string>): string {
  if (!pairs || pairs.length == 0) return "";
  return pairs.map((p) => p.slice(0, p.indexOf("="))).join();
}

export function makeHttpRequest(
  verb: "get" | "post" | "put" | "delete",
  resource: string,
  options?: Partial<{
    query: Array<string>;
    body: RequestBody;
    params: RefinedParams<ResponseType | undefined>;
  }>,
) {
  const queryString = options?.query ? makeQueryString(options.query) : "";
  const url = `${backendUrl}${resource}${queryString}`;
  const response = request(verb.toUpperCase(), url, options?.body, {
    ...options?.params,
    tags: {
      name: `${backendUrl}${resource}`,
      resource,
      query: transformQueryToTag(options?.query),
    },
  });
  if (response.error || response.error_code)
    console.error(
      {
        url: response.url,
        status: response.status,
        statusText: response.status_text,
        headers: response.headers,
        timings: response.timings,
        error: response.error,
        errorCode: response.error_code,
      },
      "HTTP ERROR",
    );
  return response;
}

export function getLogin(query: Array<string>) {
  const response = makeHttpRequest("get", "auth/login", { query });
  check(response, defaultHttpCheck);
  return response;
}

export function getLogout() {
  const response = makeHttpRequest("get", "auth/logout");
  check(response, defaultHttpCheck);
  return response;
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
      const logoResponse = get(url`${backendUrl}provider/${provider.id}/logo`, {
        tags: { resource: "provider/${id}/logo" },
      });
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
  const response = get(
    url`${backendUrl}organisationen/${id}/administriert${queryString}`,
    { tags: { resource: "organisationen/${id}/administriert" } },
  );
  check(response, defaultHttpCheck);
  return response.json() as unknown as Array<OrganisationResponse>;
}

export function getParentOrganisationenByIds(organisationIds: Array<string>) {
  const body = JSON.stringify({
    organisationIds,
  });
  const params = {
    headers: { "Content-Type": "application/json" },
  };
  const response = makeHttpRequest("post", "organisationen/parents-by-ids", {
    body,
    params,
  });
  check(response, {
    "got expected status": getStatusChecker([200, 201]),
    ...defaultTimingCheck,
  });
  return response.json() as unknown as ParentOrganisationenResponse;
}

export function postOrganisationen(bodyParams: CreateOrganisationBodyParams) {
  const body = JSON.stringify(bodyParams);
  const params = {
    headers: { "Content-Type": "application/json" },
  };
  const response = makeHttpRequest("post", "organisationen", {
    body,
    params,
  });
  return response;
}

export function deleteKlasse(id: string) {
  const response = del(url`${backendUrl}/organisationen/${id}/klasse`, null, {
    tags: { resource: "organisationen/${id}/klasse" },
  });
  return response;
}

export function getPersonenIds(
  personen?: PersonFrontendControllerFindPersons200Response,
): Set<string> {
  if (!personen) personen = getPersonen(["limit=30"]);
  return new Set(personen.items.map(({ person }) => person.id));
}

export function getPersonen(query?: Array<string>) {
  const response = makeHttpRequest("get", "personen-frontend", { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as PersonFrontendControllerFindPersons200Response;
}

export function getPersonById(id: string, query?: Array<string>) {
  const response = makeHttpRequest("get", `personen/${id}`, { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as PersonendatensatzResponse;
}

export function getPersonInfo(query?: Array<string>) {
  const response = makeHttpRequest("get", `person-info`, { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as PersonInfoResponse;
}

export function deletePersonById(id: string) {
  const response = makeHttpRequest("delete", `personen/${id}`);
  check(response, {
    "got expected status": getStatusChecker(204),
    ...defaultTimingCheck,
  });
  return response;
}

export function getPersonenUebersicht(personIds: Set<string>) {
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

export function getPersonenUebersichtById(personId: string) {
  const response = makeHttpRequest(
    "get",
    `dbiam/personenuebersicht/${personId}`,
  );
  check(response, defaultHttpCheck);
  return response.json() as unknown as DBiamPersonenuebersichtResponse;
}

export function getRollenAsAdmin(query?: Array<string>) {
  const response = makeHttpRequest("get", "person-administration/rollen", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json(
    "moeglicheRollen",
  ) as unknown as FindRollenResponse["moeglicheRollen"];
}

export function getRollen(query: Array<string>) {
  const response = makeHttpRequest("get", "person-administration/rollen", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json() as unknown as FindRollenResponse;
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

export function getTwoFactorRequired(query: Array<string>) {
  const response = makeHttpRequest("get", "2fa-token/required", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json() as unknown as TokenRequiredResponse;
}

export function getTwoFactorState(query: Array<string>) {
  const response = makeHttpRequest("get", "2fa-token/state", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json() as unknown as TokenStateResponse;
}

export function resetPassword(personId: string) {
  const response = patch(url`${backendUrl}personen/${personId}/password`);
  return response;
}

export function getResetPassword(query: Array<string>) {
  const response = makeHttpRequest("get", "auth/reset-password", { query });
  return response;
}

export function putPersonLock(personId: string, lock: boolean) {
  const lockUserBodyParams: LockUserBodyParams = {
    lock,
    //@ts-expect-error openapi generator converts this to camelcase
    locked_by: NAME_PREFIX,
    locked_until: getFutureDate(),
  };
  const params = {
    headers: { "Content-Type": "application/json" },
  };
  const body = JSON.stringify(lockUserBodyParams);
  const response = put(
    `${backendUrl}personen/${personId}/lock-user`,
    body,
    params,
  );
  return response;
}
