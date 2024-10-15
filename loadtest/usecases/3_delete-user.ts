import { getDefaultOptions } from "../util/config.ts";
import { getDefaultUserMix } from "../util/users.ts";

export const options = {
  ...getDefaultOptions(),
};

export default function main(users = getDefaultUserMix()) {}
