import { fail } from "k6";
import { batch, BatchRequest } from "k6/http";
import {
  CreateOrganisationBodyParams,
  DbiamCreatePersonWithPersonenkontexteBodyParams,
  DBiamPersonResponse,
  OrganisationsTyp,
  RollenArt,
} from "../api-client/generated/index.ts";
import {
  getAdministeredOrganisationenById,
  getOrganisationen,
  getPersonen,
  getRollen,
  makeHttpRequest,
} from "./api.ts";
import { getBackendUrl } from "./config.ts";
import { getRandomName, NAME_PREFIX } from "./data.ts";

const orgParams: CreateOrganisationBodyParams = {
  name: `${NAME_PREFIX}-Test-Schule`,
  kennung: "1234567",
  typ: OrganisationsTyp.Schule,
};

export function createTestUsers(n: number): Array<string> {
  const creationStartTime = Date.now();
  console.log(`creating ${n} users`);
  const testOrg = createAndFindTestOrg();

  const rollen = getRollen(["rolleName="]);
  const rolle = rollen.moeglicheRollen.find(
    (r) => r.rollenart === RollenArt.Lern,
  );
  if (!rolle) fail("setup: no suitable rolle available for user creation");

  const requests: Array<BatchRequest> = [];
  const befristung = new Date(Date.now() + 1000 * 60 * 60 * 4);
  for (let index = 0; index < n; index++) {
    const creationParams: DbiamCreatePersonWithPersonenkontexteBodyParams = {
      ...getRandomName(),
      befristung: befristung,
      createPersonenkontexte: [
        {
          organisationId: testOrg.id,
          rolleId: rolle.id,
        },
      ],
    };
    const body = JSON.stringify(creationParams);
    requests.push({
      method: "POST",
      url: `${getBackendUrl()}personenkontext-workflow`,
      body,
      params: {
        headers: { "Content-Type": "application/json" },
      },
    });
  }
  const responses = batch(requests);
  console.log("done creating users");
  console.log(`took ${Date.now() - creationStartTime}ms`);
  try {
    const ids = responses
      .map((r) => r.json() as unknown as DBiamPersonResponse)
      .map((p) => p.person.id);
    return ids;
  } catch {
    fail("setup: creating persons failed");
  }
}

export function createAndFindTestOrg() {
  let organisation = findTestOrg();
  if (!organisation) createTestOrganisation();
  organisation = findTestOrg();
  if (!organisation)
    fail("setup: test organisation could not be created/found");
  return organisation;
}

function findTestOrg() {
  const organisationen = getOrganisationen([`name=${orgParams.name}`]);
  return organisationen.find(
    (o) => o.name === orgParams.name && o.typ === orgParams.typ,
  );
}

function createTestOrganisation() {
  const body = JSON.stringify(orgParams);
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = makeHttpRequest("post", "organisationen", {
    body,
    params,
  });
  return response;
}

export function deleteTestUsers(ids: Array<string>) {
  try {
    batch(
      ids.map((id) => ({
        method: "DELETE",
        url: `${getBackendUrl()}personen/${id}`,
      })),
    );
  } catch {
    fail("teardown: deleting persons failed");
  }
}

export function deleteAllTestUsers() {
  const query = ["offset=0", "limit=100", `suchFilter=${NAME_PREFIX}-`];
  let users = getPersonen(query);
  console.log(`deleting ${users.total} test users`);
  while (users.total) {
    deleteTestUsers(users.items.map((p) => p.person.id));
    users = getPersonen(query);
  }
}

export function deleteAllTestKlassen() {
  const org = createAndFindTestOrg();
  const query = ["offset=0", "limit=100"];
  let klassen = getAdministeredOrganisationenById(org.id, query);
  console.log(`deleting ${klassen.length} test klassen`);
  while (klassen.length) {
    deleteTestKlassen(klassen.map((p) => p.id));
    klassen = getAdministeredOrganisationenById(org.id, query);
  }
}

function deleteTestKlassen(ids: Array<string>) {
  try {
    batch(
      ids.map((id) => ({
        method: "DELETE",
        url: `${getBackendUrl()}organisationen/${id}/klasse`,
      })),
    );
  } catch {
    fail("teardown: deleting klassen failed");
  }
}