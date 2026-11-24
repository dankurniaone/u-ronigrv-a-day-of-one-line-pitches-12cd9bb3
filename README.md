[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/dankurniaone/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/dankurniaone/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

# A Day of One-Line Pitches

One original sentence that would convince a friend who has never coded to let an AI agent build their first app idea — written for the [A Day of One-Line Pitches](https://make.fun/competitions/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) bounty on [make.fun](https://make.fun).

## The pitch

> **Describe your app idea in plain words and an AI agent on make.fun will build you a working first version today — free to try, yours to keep, and you only carry on if you love what you see.**

Why it works in one read: the friend's part is the easiest thing imaginable (describe the idea in plain words — no code, no jargon), the payoff is concrete and immediate (a working first version, today), and the risk is taken away twice over (free to try, and nothing continues unless they love what they see). It names make.fun so the friend knows exactly where it happens, and it promises nothing the platform cannot keep.

## Run it

```sh
node main.ts
```

`main.ts` validates the gate (one sentence, 1–240 characters, names make.fun) and writes the pitch to `/output/entry.txt` (falling back to `./output/entry.txt` when `/output` is not writable).
