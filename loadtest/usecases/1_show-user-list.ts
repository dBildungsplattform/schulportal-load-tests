import { group } from "k6";
import { DBiamPersonenuebersichtResponse } from "../api-client/generated/models/DBiamPersonenuebersichtResponse.ts";
import { userListPage } from "../pages/user-list.ts";
import {
  getLoginInfo,
  getOrganisationen,
  getPersonen,
  getPersonenIds,
  getPersonenUebersicht,
} from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import { pickRandomItem } from "../util/data.ts";
import { login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};
const admin = new UserMix({ SYSADMIN: 1 });
const user = admin.getLogin();

export default wrapTestFunction(main);

function main() {
  login(user);
  // these are used to test the filters
  let orgId = "";
  let rolleId = "";
  let personenuebersicht: DBiamPersonenuebersichtResponse | undefined =
    undefined;

  group("load user page", () => {
    const { organisationen, personenuebersichten, rollen } =
      userListPage.fetchData();
    getLoginInfo();
    orgId = pickRandomItem(organisationen).id;
    personenuebersicht = pickRandomItem(personenuebersichten);
    rolleId = pickRandomItem(rollen.moeglicheRollen).id;
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
