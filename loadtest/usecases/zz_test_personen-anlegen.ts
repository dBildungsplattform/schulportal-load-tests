import { check } from "k6";
import { get, post } from "k6/http";
import { Counter } from "k6/metrics";
import { Options } from "k6/options";
import { makeHttpRequest } from "../util/api.ts";
import { getBackendUrl } from "../util/config.ts";
import { getRandomName } from "../util/data.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";

const usersPerIteration = Number.parseInt(__ENV["USERS_PER_ITERATION"]) || 10;
const vus = Math.min(10, usersPerIteration); // KC won't allow more than 10
const username = __ENV["USERNAME"];
const password = __ENV["PASSWORD"];

const personCounter = new Counter("created_personen");

const schuleId = "7deeceb7-2cca-4200-b87b-5f92122d16c2";
const klasseId = "73e61830-b269-4c7e-8000-dfb89767d000";
const rolleId = "1d277fda-2eed-49ee-8687-5686b6828a5a";

export const options: Options = {
  scenarios: {
    create_data: {
      executor: "shared-iterations",
      vus,
      iterations: 100,
      maxDuration: "60m"
    },
  },
};
const params = {
  headers: { "Content-Type": "application/json" },
};
const createPersonenkontexte = [
  {
    organisationId: schuleId,
    rolleId,
  },
  {
    organisationId: klasseId,
    rolleId,
  },
];

export default wrapTestFunction(main);

function main() {
  login({ username, password });
  for (let i = 0; i < usersPerIteration; i++) {
    const response = makeHttpRequest("post", "personenkontext-workflow", {
      body: JSON.stringify({
        ...getRandomName(),
        createPersonenkontexte,
      }),
      params,
    });
    check(response, {
      "response status is 201": (r) => r.status === 201,
    });
    if (response.status === 201) personCounter.add(1);
  }
}

// login function without test instrumentation
// runs a bit faster than the other one
function login(user: { username: string; password: string }) {
  let response = get(`${getBackendUrl()}auth/login?redirectUrl=/`);
  const doc = response.html();
  const actionUrl = doc.find("#kc-form-login").attr("action");
  const loginData = {
    ...user,
    credentialId: "",
  };
  response = post(actionUrl!, loginData, {
    redirects: 0,
  });
  const loginUrl = response.headers["Location"];
  get(loginUrl);
}
