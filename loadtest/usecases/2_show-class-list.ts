import { group } from "k6";
import {
  getAdministeredOrganisationenById,
  getLoginInfo,
  getOrganisationen,
} from "../util/api.ts";
import { pickRandomItem } from "../util/data.ts";
import { navigateToUserList } from "../util/page.ts";
import { getDefaultAdminMix } from "../util/users.ts";
import { getDefaultOptions } from "../util/config.ts";

export const options = {
  ...getDefaultOptions(),
};

/**
 * How often the filter will be used.
 */
const filterInteractionCount = 5;

export default function main(users = getDefaultAdminMix()) {
  navigateToUserList(users);

  group("load class list", () => {
    getLoginInfo();
    getOrganisationen([
      "offset=0",
      "limit=30",
      "typ=KLASSE",
      "systemrechte=KLASSEN_VERWALTEN",
    ]);
    getOrganisationen([
      "offset=0",
      "limit=30",
      "typ=SCHULE",
      "systemrechte=SCHULEN_VERWALTEN",
    ]);
    getOrganisationen([
      "limit=25",
      "typ=SCHULE",
      "systemrechte=KLASSEN_VERWALTEN",
    ]);
  });

  group("hit pages", () => {
    const limit = 30;
    const totalLimit = filterInteractionCount * limit;
    for (let offset = 0; offset < totalLimit; offset += limit) {
      getOrganisationen([
        `offset=${offset}`,
        `limit=${limit}`,
        "typ=KLASSE",
        "systemrechte=KLASSEN_VERWALTEN",
      ]);
    }
  });

  group("toggle filters", () => {
    getOrganisationen([
      "offset=0",
      "limit=30",
      "typ=KLASSE",
      "systemrechte=KLASSEN_VERWALTEN",
    ]);
    const schulen = getOrganisationen([
      "limit=25",
      "typ=SCHULE",
      "systemrechte=SCHULEN_VERWALTEN",
    ]);
    const schulenIds = schulen.map((s) => s.id);
    for (let index = 0; index < filterInteractionCount; index++) {
      const id = pickRandomItem(schulenIds);
      getAdministeredOrganisationenById(id, ["offset=0", "limit=30"]);
    }
  });
}
