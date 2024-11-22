import { check, group } from "k6";
import { OrganisationResponse } from "../api-client/generated/models/OrganisationResponse.ts";
import { OrganisationsTyp } from "../api-client/generated/models/OrganisationsTyp.ts";
import { logout } from "../pages/index.ts";
import { userListPage } from "../pages/user-list.ts";
import {
  getPersonenkontextWorkflowStep,
  postOrganisationen,
} from "../util/api.ts";
import { defaultTimingCheck, getStatusChecker } from "../util/checks.ts";
import { getDefaultOptions } from "../util/config.ts";
import { getRandomString } from "../util/data.ts";
import { login } from "../util/page.ts";
import {
  createAndFindTestOrg,
  deleteAllTestKlassen,
} from "../util/resource-helper.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";

const users = new UserMix({ SYSADMIN: 1000 });
type TestData = {
  testOrg: OrganisationResponse;
};

export const options = {
  ...getDefaultOptions(),
};

export function setup(): TestData {
  login(users.getLogin());
  const testOrg = createAndFindTestOrg();
  logout();
  return { testOrg };
}

export default wrapTestFunction(main);

export function teardown() {
  login(users.getLogin());
  deleteAllTestKlassen();
  logout();
}

function main({ testOrg }: TestData) {
  group("go to user list", () => {
    login(users.getLogin());
    userListPage.fetchData();
  });

  group("create klasse", () => {
    getPersonenkontextWorkflowStep([`limit=25`]);
    const bodyParams = {
      administriertVon: testOrg.id,
      kennung: "",
      kuerzel: "",
      name: getRandomString(8),
      namensergaenzung: "",
      typ: OrganisationsTyp.Klasse,
      zugehoerigZu: testOrg.id,
    };
    const res = postOrganisationen(bodyParams);
    check(res, {
      "klasse created": getStatusChecker(201),
      ...defaultTimingCheck,
    });
  });
}
