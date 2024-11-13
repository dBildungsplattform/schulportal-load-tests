import { getDefaultOptions } from "../util/config.ts";
import { wrapTestFunction } from "../util/usecase-wrapper.ts";
import { getDefaultUserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

export default wrapTestFunction(main);

function main(users = getDefaultUserMix()) {}
