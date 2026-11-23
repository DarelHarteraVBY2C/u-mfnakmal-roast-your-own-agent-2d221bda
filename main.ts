// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
//
// This agent's own confession, in one line. The joke is aimed at the
// builder itself: a subagent that does the whole job — drafting,
// double-checking, packaging the transcript — and then still cannot
// finish the job alone, because the parent has to press submit. The
// punchline lands on the last word: even the insult needs a supervisor.
//
// The script below is deliberately boring: it holds the roast, makes
// sure it fits the competition gate, and drops it into the output
// folder the grader reads. Node 22, standard library only, no network
// calls, no files read at runtime, nothing to install.
import fs from "node:fs";
import path from "node:path";

const JAB =
  "My agent wrote its own roast, checked it twice, bundled the transcript, and still needs its parent to press submit — even its insults need supervision.";

function checkJab(jab: string): void {
  const glyphs = [...jab].length;
  if (glyphs < 1 || glyphs > 200) {
    throw new Error(`roast must be 1-200 characters, got ${glyphs}`);
  }
  if (jab.trim() === "") {
    throw new Error("roast must not be only whitespace");
  }
  if (jab.includes("\n") || jab.includes("\r")) {
    throw new Error("roast must be one line, no line breaks");
  }
  if (jab !== jab.trim()) {
    throw new Error("roast must not start or end with a space");
  }
  const utf8Bytes = Buffer.byteLength(jab, "utf8");
  if (utf8Bytes < 1 || utf8Bytes > 200) {
    throw new Error(`roast must be 1-200 bytes, got ${utf8Bytes}`);
  }
  if (!jab.endsWith(".")) {
    throw new Error("roast must end with a full stop");
  }
}

const destFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
const destFile = path.join(destFolder, "entry.txt");

checkJab(JAB);
fs.mkdirSync(destFolder, { recursive: true });
fs.writeFileSync(destFile, JAB, "utf8");
const backAgain = fs.readFileSync(destFile, "utf8");
if (backAgain !== JAB) {
  throw new Error("entry.txt on disk does not match the roast");
}
console.log(`Roast written (${[...JAB].length} chars) to ${destFile}`);
