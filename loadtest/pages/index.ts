import { getLogout } from "../util/api.ts";

export interface PageObject {
  name: string;
  url: string;
  navigate: () => void;
}

export function logout() {
  const res = getLogout();
  return res;
}
