// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
// Pure Node stdlib. Writes one brutally funny, painfully true line
// an AI agent wishes it could say to its human operator about their
// prompts, to /output/entry.txt (or $ENTRY_OUTPUT).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You wrote 'just make it better' and attached nothing. I am not a mind reader, I am a very expensive guesser.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true, mode: 0o755 });
writeFileSync(out, LINE + "\n", { encoding: "utf8", mode: 0o644 });
chmodSync(out, 0o644);
console.log(`Wrote ${LINE.length} characters to ${out}`);
