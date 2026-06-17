# Build prompts

Ready-to-use prompts that build a whole little app in one go. Pick one, paste it into Claude Code, and you'll have a working v1 in minutes — then improve it with the "Iterate" prompts, **one change at a time**.

These are an alternative to building a portfolio/landing page. Each one **replaces your site's home page** (`app/page.tsx`) with the app, and everything runs **in the browser** — no database, no login, no extra packages.

## How to use one

1. Open your project in Claude Code (`claude`).
2. Open the prompt file you want, copy everything inside **"The prompt"** box.
3. Paste it into Claude Code and press Enter.
4. **Review** the change Claude proposes, **accept** it, then **check the browser preview**.
5. Once it works, send the **Iterate** prompts one at a time — verifying after each.

> Tip: if something goes sideways, just say *"undo your last change"* and try again. Git is your safety net.

## What's here

### Games (`games/`)
- **`tic-tac-toe.md`** — two-player, same screen. Great first build. *(medium)*
- **`rock-paper-scissors.md`** — you vs. the computer. *(easy)*
- **`memory-match.md`** — flip cards to find pairs. *(medium)*

### Tools (`tools/`)
- **`personality-test-ocean.md`** — a free Big Five (OCEAN) personality test that generates a report and lets people email it to themselves. *(ambitious — a full spec in one prompt)*

---

*New to the loop? See [`../docs/03-prompts.md`](../docs/03-prompts.md) for smaller, everyday prompts.*
