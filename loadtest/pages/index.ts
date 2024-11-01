import { get } from "k6/http";
import { getLogout, removeQueryString } from "../util/api.ts";
import { prettyLog } from "../util/debug.ts";

export interface PageObject {
  name: string;
  url: string;
  navigate: () => void;
}

export function logout() {
  const res = getLogout();
  // const location = res.headers["Location"];
  // get(location, {
  //   tags: { name: removeQueryString(location) },
  // });
  return res;
}
