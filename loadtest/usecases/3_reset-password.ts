import { check, fail, group } from "k6";
import { vu } from "k6/execution";
import { DBiamPersonenuebersichtResponse } from "../api-client/generated/index.ts";
import { logout } from "../pages/index.ts";
import { UserDetailsPage } from "../pages/user-details.ts";
import { userListPage } from "../pages/user-list.ts";
import { resetPassword } from "../util/api.ts";
import { defaultTimingCheck, getStatusChecker } from "../util/checks.ts";
import { getDefaultOptions } from "../util/config.ts";
import { login } from "../util/page.ts";
import {
  createTestUsers,
  deleteAllTestUsers,
} from "../util/resource-helper.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { UserMix } from "../util/users.ts";

const users = new UserMix({ SYSADMIN: 1000 });
type TestData = {
  testIds: Array<string>;
};

export const options = {
  ...getDefaultOptions(),
};

export function setup(): TestData {
  login(users.getLogin());
  deleteAllTestUsers();
  const testIds: Array<string> = createTestUsers(users.getTotalUserNumber());
  logout();
  return { testIds };
}

export default wrapTestFunction(main);

export function teardown() {
  login(users.getLogin());
  deleteAllTestUsers();
  logout();
}

function main({ testIds }: TestData) {
  let personenuebersichten: DBiamPersonenuebersichtResponse[] | null = null;
  const viewedPersonId = testIds[vu.idInTest % testIds.length];
  group("go to user list", () => {
    login(users.getLogin());
    personenuebersichten = userListPage.fetchData().personenuebersichten;
    if (!personenuebersichten) fail("did not find personenuebersichten");
  });

  group("go to user details", () => {
    new UserDetailsPage(viewedPersonId).fetchData();
  });

  group("reset password", () => {
    const response = resetPassword(viewedPersonId);
    check(response, {
      "got expected status": getStatusChecker(202),
      ...defaultTimingCheck,
    });
  });
}
