import { vu } from "k6/execution";

export const NAME_PREFIX = "PLT";

export function pickRandomItem<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomPersNummer(): string {
  let s = Math.floor(Math.random() * 9999999).toString();
  if (s.length > 7) s = s.slice(0, 8);
  else s = s.padStart(7, "0");
  return s;
}

function mapNumberIntoAlphabet(n: number): string {
  n = Math.round(n);
  if (n == 0) return "a";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let s = "";
  while (n > 0) {
    s += alphabet.charAt(n % alphabet.length);
    n -= alphabet.length;
  }
  return s;
}

export function getRandomString(length: number) {
  let s = "";
  while (length--) {
    const n = Math.floor(Math.random() * 26);
    const char = mapNumberIntoAlphabet(n);
    s = s.concat(char);
  }
  return s;
}

export function getRandomName(): {
  familienname: string;
  vorname: string;
} {
  const vuId = mapNumberIntoAlphabet(vu.idInTest);
  const iteration = mapNumberIntoAlphabet(vu.iterationInScenario);
  const random = getRandomString(8);
  const s = [NAME_PREFIX, vuId, iteration, random].join("-");
  return {
    familienname: s,
    vorname: s,
  };
}

export function getFutureDate() {
  return new Date("2055-07-31T22:00:00.000Z");
}
