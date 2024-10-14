import { vu } from "k6/execution";
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
  if (n == 0) return "a";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let s = "";
  while (n > 0) {
    s += alphabet.charAt(n % alphabet.length);
    n -= alphabet.length;
  }
  return s;
}

export function getRandomName(): {
  familienname: string;
  vorname: string;
} {
  const s = `PLT-${mapNumberIntoAlphabet(vu.idInTest)}-${mapNumberIntoAlphabet(vu.iterationInScenario)}`;
  return {
    familienname: s,
    vorname: s,
  };
}
