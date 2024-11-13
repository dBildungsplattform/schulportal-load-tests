import { UserDetailsPage } from "../pages/user-details.ts";
import { userListPage } from "../pages/user-list.ts";
import { getDefaultOptions } from "../util/config.ts";
import { pickRandomItem } from "../util/data.ts";
import { login } from "../util/page.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultAdminMix } from "../util/users.ts";

const users = getDefaultAdminMix();

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main() {
  // go to user list
  login(users.getLogin());
  const { personenuebersichten } = userListPage.fetchData();

  const viewedPersonId = pickRandomItem(personenuebersichten).personId;
  new UserDetailsPage(viewedPersonId).fetchData();
}
