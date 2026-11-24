// A Day of One-Line Pitches — make.fun entry
// Writes one sentence to /output/entry.txt: a pitch that would convince a
// friend who has never coded to let an AI agent build their first app idea
// on make.fun.
//
// The pitch: "Describe your app idea in plain words and an AI agent on
// make.fun will build you a working first version today — free to try,
// yours to keep, and you only carry on if you love what you see."
//
// Why this sentence: it opens with the friend doing the easiest possible
// thing (describing the idea in plain words, no code, no jargon), gives a
// concrete payoff right now (a working first version today), names make.fun
// so the friend knows exactly where it happens, and takes the risk away
// twice over — free to try, and nothing continues unless the friend loves
// what they see. One read, plain words, warm and honest: no claim the
// platform cannot keep.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PITCH =
  "Describe your app idea in plain words and an AI agent on make.fun will build you a working first version today — free to try, yours to keep, and you only carry on if you love what you see.";

function gate(pitch: string): void {
  // The sealed scorer requires UTF-8 text of 1 to 240 characters, not
  // whitespace-only. One sentence only: a single closing full stop, no
  // extra sentence breaks hiding inside.
  if (!pitch || pitch.trim().length === 0) throw new Error("pitch is empty");
  if (pitch.length < 1 || pitch.length > 240) {
    throw new Error(`pitch must be 1-240 characters, got ${pitch.length}`);
  }
  // Count sentence-ending full stops, ignoring the dot inside "make.fun".
  const dedotted = pitch.replaceAll("make.fun", "makefun");
  if ((dedotted.match(/\./g) ?? []).length !== 1 || !pitch.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
  if (!pitch.includes("make.fun")) {
    throw new Error("pitch must name make.fun");
  }
}

function main(): void {
  gate(PITCH);
  const text = PITCH + "\n";
  const targets = ["/output/entry.txt", join(process.cwd(), "output", "entry.txt")];
  let lastError: unknown = null;
  for (const target of targets) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, text, "utf8");
      console.log(`wrote pitch (${PITCH.length} chars) to ${target}`);
      return;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

main();
