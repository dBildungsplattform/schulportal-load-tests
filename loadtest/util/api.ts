import { check, fail } from "k6";
import http, { RefinedParams, RequestBody, ResponseType } from "k6/http";
import {
  defaultHttpCheck,
  defaultTimingCheck,
  getStatusChecker,
} from "./checks.ts";
import { getBackendUrl } from "./config.ts";
import { prettyLog } from "./debug.ts";

export type Paginated<T> = {
  total: number;
  offset: number;
  limit: number;
  items: Array<T>;
};

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
  return response.json();
}

export function getServiceProviders() {
  const providerResponse = makeHttpRequest("get", "provider");
  check(providerResponse, defaultHttpCheck);
  const providers = providerResponse.json() as unknown as Array<{
    id: string;
    name: string;
    url: string;
  }>;
  return providers;
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

export function getAdministeredOrganisationenById(
  id: string,
  query?: Array<string>,
): Array<{
  id: string;
  typ: string;
  name: string;
}> {
  const queryString = query ? makeQueryString(query) : "";
  const response = http.get(
    http.url`${backendUrl}organisationen/${id}/administriert${queryString}`,
    { tags: { resource: "organisationen/${id}/administriert" } },
  );
  check(response, defaultHttpCheck);
  return response.json() as unknown as Array<{
    id: string;
    typ: string;
    name: string;
  }>;
}

export type PersonDatensatz = {
  person: { id: string };
};

export function getPersonenIds(
  personen?: Paginated<PersonDatensatz>,
): Set<string> {
  if (!personen) personen = getPersonen();
  return new Set(personen.items.map(({ person }) => person.id));
}

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
    "got 201": getStatusChecker(201),
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

export function getPersonenkontextWorkflowStep(query?: Array<string>) {
  const response = makeHttpRequest("get", "personenkontext-workflow/step", {
    query,
  });
  check(response, defaultHttpCheck);
  return response.json() as unknown as {
    canCommit: boolean;
    organisations: Array<{ id: string; name: string }>;
    rollen: Array<{ id: string; name: string }>;
  };
}

export function postPersonenkontextWorkflow(body: {
  familienname: string;
  vorname: string;
  personalnummer: string;
  befristung: string;
  createPersonenkontexte: {
    organisationId: string;
    rolleId: string;
  }[];
}) {
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
  return response.json() as unknown as {
    canCommit: boolean;
    organisations: Array<{ id: string; name: string }>;
    rollen: Array<{ id: string; name: string }>;
  };
}
