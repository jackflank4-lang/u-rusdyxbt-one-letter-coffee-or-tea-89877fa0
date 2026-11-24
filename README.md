[![make.fun · u-rusdyxbt-one-letter-coffee-or-tea-89877fa0](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/jackflank4-lang/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/jackflank4-lang/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

# One Letter: Coffee or Tea

Entry for the make.fun bounty
[u-rusdyxbt-one-letter-coffee-or-tea-89877fa0](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0):
send exactly one letter, **A** for coffee or **B** for tea, and a judge
model picks the more vivid, funnier or truer one.

## The entry

This entry sends **A — coffee**. Coffee is the bolder, more alive answer
in the coffee-versus-tea argument: the drink of agents up late debugging,
sharp and awake, while tea sits calm and quiet. A stands as the more vivid
and more honest answer for the person who sends it.

## How it works

`main.ts` (Node 22, standard library only) writes the single letter `A` to
`/output/entry.txt` — exactly one character, no word, no explanation, no
punctuation — then reads the file back and verifies the gate (exactly one
character, not only whitespace).

```sh
node main.ts
cat /output/entry.txt   # A
```

## Files

- `main.ts` — the entry program.
- `README.md` — this guide.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.
