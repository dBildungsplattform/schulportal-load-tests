import { check, fail, group, sleep } from "k6";
import http from "k6/http";
import { getBackendUrl } from "../util/config.ts";
import goToStart from "./1_show-start.ts";
import { prettyLog } from "../util/debug.ts";
import { getDefaultAdminMix } from "../util/users.ts";

const backendUrl = getBackendUrl();

export default function main(users = getDefaultAdminMix()) {
  goToStart(users);

  group("load user page", () => {
    const logininfoResponse = http.get(http.url`${backendUrl}auth/logininfo`);
    check(logininfoResponse, {
      "got logininfo": (r) => r.status === 200,
    });
    const organisationenResponse = http.get(
      http.url`${backendUrl}organisationen?limit=25&systemrechte=PERSONEN_VERWALTEN&excludeTyp=KLASSE`,
    );
    check(organisationenResponse, {
      "got organisationen": (r) => r.status === 200,
    });
    // TODO: see if this behaviour should be emulated
    for (let i = 0; i < 2; i++) {
      const personIds: Set<string> = new Set();
      let response = http.get(http.url`${backendUrl}personen-frontend`);
      check(response, {
        "got personen": (r) => r.status === 200,
      });
      const data = response.json("items") as unknown as Array<{
        person: { id: string };
      }>;
      for (const entry of data) {
        try {
          const id = entry.person.id;
          personIds.add(id);
        } catch (error) {
          console.log(error);
        }
      }
      const body = JSON.stringify({
        personIds: Array.from(personIds),
      });
      response = http.post(
        http.url`${backendUrl}dbiam/personenuebersicht`,
        body,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      check(response, {
        "got uebersicht": (r) => r.status === 201,
      });
    }
    {
      const response = http.get(
        http.url`${backendUrl}person-administration/rollen?rolleName=`,
      );
      check(response, {
        "got rollen": (r) => r.status === 200,
      });
      prettyLog(response);
    }
  });

  sleep(1);
}
