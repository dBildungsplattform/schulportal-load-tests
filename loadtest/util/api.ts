import { check, fail } from "k6";
import http, { RefinedParams, RequestBody, ResponseType } from "k6/http";
import {
  defaultHttpCheck,
  defaultTimingCheck,
  getStatusChecker,
} from "./checks.ts";
import { getBackendUrl } from "./config.ts";
import { prettyLog } from "./debug";

export type Paginated<T> = {
  total: number;
  offset: number;
  limit: number;
  items: Array<T>;
};

const backendUrl = getBackendUrl();

function makeHttpRequest(
  verb: string,
  resource: string,
  options?: Partial<{
    query: Array<string>;
    body: RequestBody;
    params: RefinedParams<ResponseType | undefined>;
  }>,
) {
  const queryString = options?.query
    ? "?".concat(options?.query?.join("&"))
    : "";
  const url = http.url`${backendUrl}${resource}${queryString}`;
  return http.request(verb.toUpperCase(), url, options?.body, options?.params);
}

export function getLoginInfo() {
  const response = makeHttpRequest("get", "auth/logininfo");
  check(response, defaultHttpCheck);
  return response.json();
}

export function getServiceProviders() {
  const providerResponse = makeHttpRequest("get", "provider");
  check(providerResponse, defaultHttpCheck);
  const providers = providerResponse.json() as unknown as Array<{
    id: string;
  }>;
  return providers;
}

export function getServiceProviderLogos(providers: Array<{ id: string }>) {
  try {
    for (const provider of providers) {
      const logoResponse = http.get(
        http.url`${backendUrl}provider/${provider.id}/logo`,
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

export function getOrganisationen(
  query?: Array<string>,
): Array<{ id: string; typ: string }> {
  const response = makeHttpRequest("get", "organisationen", { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as Array<{
    id: string;
    typ: string;
  }>;
}

export type PersonDatensatz = {
  person: { id: string };
};

export function getPersonen(query?: Array<string>): Paginated<PersonDatensatz> {
  const response = makeHttpRequest("get", "personen-frontend", { query });
  check(response, defaultHttpCheck);
  return response.json() as unknown as Paginated<PersonDatensatz>;
}

export type PersonenUebersicht = {
  id: string;
  vorname: string;
  nachname: string;
  benutzername: string;
};

export function getPersonenUebersicht(
  personIds: Set<string>,
): Array<PersonenUebersicht> {
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
    ...getStatusChecker(201),
    ...defaultTimingCheck,
  });
  return response.json("items") as unknown as Array<PersonenUebersicht>;
}

export function getRollen(query?: Array<string>): Array<{ id: string }> {
  const response = makeHttpRequest("get", "person-administration/rollen", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json("moeglicheRollen") as unknown as Array<{
    id: string;
  }>;
}
