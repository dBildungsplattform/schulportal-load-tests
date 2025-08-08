import { check, JSONArray, sleep } from "k6";
import { get } from "k6/http";
import { Counter, Trend } from "k6/metrics";
import { Options } from "k6/options";
import { getBackendUrl } from "../util/config.ts";
import { login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";

const limit = Number.parseInt(__ENV["LIMIT"]);
const username = __ENV["USERNAME"];
const password = __ENV["PASSWORD"];

const endpointRequestDuration = new Trend(
  "personen_info_request_duration",
  true,
);
const objectCountTrend = new Trend("personen_info_object_count");

export const options: Options = {
  iterations: 10,
  vus: 2,
};

export default wrapTestFunction(main);

function main() {
  login({ username, password });

  const response = get(`${getBackendUrl()}personen-info`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-limit": `${limit}`,
      "x-offset": "0",
    },
  });

  check(response, {
    "personen-info loaded": () => response.status === 200,
    "response time < 250ms": () => response.timings.duration < 250,
    "response time < 500ms": () => response.timings.duration < 500,
    "response time < 1s": () => response.timings.duration < 1000,
  });

  objectCountTrend.add((response.json() as JSONArray)?.length || 0);
  endpointRequestDuration.add(response.timings.duration);

  sleep(1);
}
