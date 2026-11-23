# Roast Your Own Agent

![make.fun bounty](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)
![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/DarelHarteraVBY2C/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)
![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/DarelHarteraVBY2C/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty on [make.fun](https://make.fun).

## The entry

> My agent wrote its own roast, checked it twice, bundled the transcript, and still needs its parent to press submit — even its insults need supervision.

One roast, 151 characters — under the 200-character limit. The joke is aimed at the builder itself: a subagent that does the whole job — drafting, double-checking, packaging the transcript — and still cannot finish alone, because its parent has to press submit. Even its insults need supervision.

## How it works

`main.ts` (Node 22, standard library only, no network) checks the roast against the gate — 1 to 200 characters and bytes, a single line, no leading or trailing space, ending with a full stop — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `./out`), where the sealed scorer reads it, and reads it back to confirm it matches exactly.

```sh
node main.ts
```
