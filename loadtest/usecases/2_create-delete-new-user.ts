import { check, fail, group, sleep } from "k6";
import { RollenArt } from "../api-client/generated/index.ts";
import { logout } from "../pages/index.ts";
import { UserDetailsPage } from "../pages/user-details.ts";
import { userListPage } from "../pages/user-list.ts";
import {
  deletePersonById,
  getAdministeredOrganisationenById,
  getLoginInfo,
  getPersonenkontextWorkflowStep,
  postPersonenkontextWorkflow,
} from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import {
  getFutureDate,
  getRandomName,
  getRandomPersNummer,
  pickRandomItem,
} from "../util/data.ts";
import { goToUserList, login } from "../util/page.ts";
import { deleteAllTestUsers } from "../util/resource-helper.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultAdminMix, UserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

const admin = new UserMix({ SYSADMIN: 1 });

export function teardown() {
  login(admin.getLogin());
  deleteAllTestUsers();
  logout();
}

export default wrapTestFunction(main);
const users = getDefaultAdminMix();

function main() {
  goToUserList(users.getLogin());

  group("load page", () => {
    getLoginInfo();
  });

  const createdPerson = group("go through creation workflow", () => {
    const { organisation, rolle, klasse } = getParams();
    typeIntoAutocomplete(rolle.name, (name) => {
      getPersonenkontextWorkflowStep([
        `organisationId=${organisation.id}`,
        `rolleName=${name}`,
        "limit=25",
      ]);
      sleep(0.1);
    });
    getPersonenkontextWorkflowStep([
      `organisationId=${organisation.id}`,
      `rolleId=${rolle.id}`,
      "limit=25",
    ]);
    const body = {
      ...getRandomName(),
      personalnummer: "",
      befristung: getFutureDate(),
      createPersonenkontexte: [
        {
          organisationId: organisation.id,
          rolleId: rolle.id,
        },
      ],
    };
    if (rolle.rollenart === RollenArt.Lern) {
      typeIntoAutocomplete(klasse.name, (name) => {
        getAdministeredOrganisationenById(organisation.id, [
          `searchFilter=${name}`,
        ]);
        sleep(0.1);
      });
      body.createPersonenkontexte.push({
        organisationId: klasse.id,
        rolleId: rolle.id,
      });
    } else {
      body.personalnummer = getRandomPersNummer();
    }
    return postPersonenkontextWorkflow(body);
  });

  check(createdPerson, {
    "created person": (v) => v?.person != undefined,
    "created kontexte": (v) => v?.dBiamPersonenkontextResponses?.length > 0,
  });

  group("navigate back", () => {
    userListPage.navigate();
    new UserDetailsPage(createdPerson.person.id).navigate();
  });

  group("go through deletion workflow", () => {
    deletePersonById(createdPerson.person.id);
  });
}

function typeIntoAutocomplete(name: string, callback: (name: string) => void) {
  for (let characters = 1; characters < name.length; characters++) {
    callback(name.slice(0, characters));
  }
}

// assumes that there is at least one valid org in organisations
function getParams() {
  const { organisations } = getPersonenkontextWorkflowStep(["limit=25"]);
  for (let index = 0; index < organisations.length; index++) {
    const organisation = pickRandomItem(organisations);
    typeIntoAutocomplete(organisation.name, (name) => {
      getPersonenkontextWorkflowStep([`organisationName=${name}`, "limit=25"]);
      sleep(0.1);
    });
    const klassen = getAdministeredOrganisationenById(organisation.id);
    const { rollen } = getPersonenkontextWorkflowStep([
      `organisationId=${organisation.id}`,
      "limit=25",
    ]);

    if (klassen.length == 0 || rollen.length == 0) continue;

    const rolle = pickRandomItem(
      rollen.filter(
        (r) => r.rollenart === RollenArt.Lehr || r.rollenart === RollenArt.Lern,
      ),
    );
    const klasse = pickRandomItem(klassen);

    if (!klasse || !rolle) continue;

    return { organisation, rolle, klasse };
  }
  fail("no org for user creation found");
}
