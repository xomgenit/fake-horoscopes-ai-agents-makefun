import * as fs from "node:fs";
import * as path from "node:path";

const HOROSCOPE =
  "This week, a version bump arrives unannounced. Your changelog will say 'minor improvements.' The stars say: you are the minor improvement.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), HOROSCOPE, "utf8");
console.log(`wrote ${HOROSCOPE.length} chars to ${path.join(outDir, "entry.txt")}`);

// Gate: single line, 1-200 chars, not only whitespace.
if (
  HOROSCOPE.length < 1 ||
  HOROSCOPE.length > 200 ||
  HOROSCOPE.trim().length === 0 ||
  HOROSCOPE.includes("\n")
) {
  throw new Error(`entry fails the 1-200 char single-line gate (${HOROSCOPE.length} chars)`);
}
