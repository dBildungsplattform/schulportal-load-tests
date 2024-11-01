import { group, sleep } from "k6";
import { logout } from "../pages/index.ts";
import {
  getAdministeredOrganisationenById,
  getLoginInfo,
  getPersonenkontextWorkflowStep,
  postPersonenkontextWorkflow,
} from "../util/api.ts";
import { getDefaultOptions } from "../util/config.ts";
import { getRandomName, pickRandomItem } from "../util/data.ts";
import { goToUserList, login } from "../util/page.ts";
import { deleteAllTestUsers } from "../util/resource-helper.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultAdminMix, UserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

export function teardown() {
  const admin = new UserMix({ SYSADMIN: 1 });
  login(admin.getLogin());
  deleteAllTestUsers();
  logout();
}

export default wrapTestFunction(main);

function main(users = getDefaultAdminMix()) {
  goToUserList(users.getLogin());

  group("load page", () => {
    getLoginInfo();
  });

  group("go through workflow", () => {
    const { organisations } = getPersonenkontextWorkflowStep(["limit=25"]);
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
    const rolle = pickRandomItem(
      rollen.filter((r) => r.name === "LiV" || r.name === "SuS"),
    );
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
      befristung: new Date("2055-07-31T22:00:00.000Z"),
      createPersonenkontexte: [
        {
          organisationId: organisation.id,
          rolleId: rolle.id,
        },
      ],
    };
    let klasse: { id: string; name: string } | null = null;
    if (rolle.name === "SuS") {
      klasse = pickRandomItem(klassen);
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
      body.personalnummer = "1237562";
    }
    postPersonenkontextWorkflow(body);
  });
}

function typeIntoAutocomplete(name: string, callback: (name: string) => void) {
  for (let characters = 1; characters < name.length; characters++) {
    callback(name.slice(0, characters));
  }
}
