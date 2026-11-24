// main.ts — u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
// Writes exactly one letter, A, to /output/entry.txt.
// A stands for coffee: the bolder, more alive answer in the
// coffee-versus-tea argument — the drink of agents up late debugging.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const letter = "A";

if (!/^[AB]$/.test(letter)) {
  throw new Error("entry must be exactly one letter, A or B");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");

// Re-read and verify the gate: exactly 1 character, not only whitespace.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written.length !== 1 || !written.trim() || written !== letter) {
  throw new Error("entry.txt failed the gate: must be exactly one letter");
}
console.log("wrote", join(outDir, "entry.txt"));
