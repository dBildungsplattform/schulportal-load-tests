import { group, sleep } from "k6";
import {
  getLoginInfo,
  getOrganisationen,
  getPersonen,
  getPersonenIds,
  getPersonenUebersicht,
  getRollen,
  PersonenUebersicht,
} from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import { pickRandomItem } from "../util/data.ts";
import { getDefaultAdminMix } from "../util/users.ts";
import goToStart from "./1_show-start.ts";

export const options = {
  ...getDefaultOptions(),
};

export default function main(users = getDefaultAdminMix()) {
  goToStart(users);

  // these are used to test the filters
  let orgId = "";
  let rolleId = "";
  let personenuebersicht: PersonenUebersicht | undefined = undefined;

  group("load user page", () => {
    getLoginInfo();
    const organisationen = getOrganisationen([
      "limit=25",
      "systemrechte=PERSONEN_VERWALTEN",
      "excludeTyp=KLASSE",
    ]);
    orgId = pickRandomItem(organisationen).id;

    for (let i = 0; i < 2; i++) {
      const personIds = getPersonenIds();
      const personenuebersichten = getPersonenUebersicht(personIds);
      personenuebersicht = pickRandomItem(personenuebersichten);
    }

    const rollen = getRollen(["rolleName="]);
    rolleId = pickRandomItem(rollen).id;
  });

  group("hit pages", () => {
    for (let offset = 0; offset < 5; offset++) {
      getPersonen([`offset=${offset}`, "limit=30", "suchFilter="]);
    }
  });

  group("toggle filters", () => {
    group("schule", () => {
      getOrganisationen([
        "limit=25",
        "searchString=",
        "typ=KLASSE",
        `administriertVon=${orgId}`,
      ]);
      const personen = getPersonen([
        "offset=0",
        "limit=30",
        `organisationIDs=${orgId}`,
        "suchFilter=",
      ]);
      const personIds = getPersonenIds(personen);
      getPersonenUebersicht(personIds);

      emulateFilterReset();
    });

    group("rolle", () => {
      getOrganisationen([
        "limit=25",
        "searchString=",
        "typ=KLASSE",
        `administriertVon=${orgId}`,
      ]);
      const personen = getPersonen([
        "offset=0",
        "limit=30",
        `rolleIDs=${rolleId}`,
        "suchFilter=",
      ]);
      const personIds = getPersonenIds(personen);
      getPersonenUebersicht(personIds);

      emulateFilterReset();
    });

    group("filter list", () => {
      const filters = [
        personenuebersicht?.benutzername,
        personenuebersicht?.vorname,
        personenuebersicht?.nachname,
      ];
      for (const filter of filters) {
        const personen = getPersonen([
          "offset=0",
          "limit=30",
          `suchFilter=${filter}`,
        ]);
        const personIds = getPersonenIds(personen);
        getPersonenUebersicht(personIds);

        emulateFilterReset();
      }
    });
  });

  sleep(1);
}

function emulateFilterReset() {
  const personIds = getPersonenIds();
  getPersonenUebersicht(personIds);
  getOrganisationen([
    "limit=25",
    "systemrechte=PERSONEN_VERWALTEN",
    "excludeTyp=KLASSE",
  ]);
  getOrganisationen([
    "limit=25",
    "searchString=",
    "systemrechte=PERSONEN_VERWALTEN",
    "excludeTyp=KLASSE",
  ]);
}
