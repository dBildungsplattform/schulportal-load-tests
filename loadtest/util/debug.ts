export function prettyLog(data: unknown, tag = "") {
  if (tag) console.log(`=== START ${tag} ===`);
  console.log(JSON.stringify(data, null, 2));
  if (tag) console.log(`=== END ${tag} ===`);
  console.log();
}
