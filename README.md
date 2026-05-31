# Claude Code Workshop — Berlin

Welcome! In the next 2 hours you'll build and deploy your own website using Claude Code.

## What you'll build

Pick one of these starter templates:

- **`templates/portfolio/`** — personal portfolio (about, projects, contact)
- **`templates/landing/`** — small-business landing page (hero, services, contact)

By the end of the workshop, your site will be live on the internet at a Vercel URL you can share.

## Before the workshop

You should have received a setup email with the account checklist (GitHub, Claude, Vercel). If you missed it, ping the organizer.

## Getting started (during the workshop)

1. **Fork this repo** to your own GitHub account (top-right "Fork" button).
2. **Open in Codespaces**: on your fork, click the green "Code" button → "Codespaces" tab → "Create codespace on main". Wait ~60 seconds for the environment to boot.
3. **Pick your template** in the Codespace terminal:
   ```bash
   cd templates/portfolio   # or: cd templates/landing
   npm install
   npm run dev
   ```
4. Click the "Open in Browser" popup that appears (port 3000) — that's your live preview.
5. **Open Claude Code** in a second terminal:
   ```bash
   claude
   ```
6. Start chatting. Try: *"Change the headline to say 'Hi, I'm [your name]'"*

## Deploying to Vercel

Two ways, both quick:

### Via the Vercel CLI (recommended — no setup)

From inside your template directory:

```bash
cd templates/portfolio   # or templates/landing
vercel login             # one-time
vercel --prod
```

A URL appears. Your site is live.

### Via the Vercel dashboard (GitHub integration)

If you connect your GitHub fork to Vercel, you'll need one extra setting:

1. [vercel.com/new](https://vercel.com/new) → import your fork
2. **Root Directory** → click Edit → set to `templates/portfolio` (or `templates/landing`)
3. Framework Preset auto-detects as Next.js once the Root Directory is set
4. Click Deploy

> **Why the Root Directory step?** The website code lives inside `templates/portfolio/` (or `templates/landing/`), not at the repo root. Vercel needs to know where to look.

If you see a 404 or a "no Next.js version detected" error after deploy, the Root Directory probably wasn't set. Go to your project's **Settings → Build & Development Settings**, set it, save, then **Redeploy** from the Deployments tab.

## Reference docs

Whether during or after the workshop, these are the references to keep on hand:

- [docs/01-terminal-basics.md](./docs/01-terminal-basics.md) — the dozen commands you actually need (`pwd`, `cd`, `mkdir`, etc.)
- [docs/02-claude-commands.md](./docs/02-claude-commands.md) — every Claude Code slash command, keyboard shortcut, and launch mode
- [docs/03-prompts.md](./docs/03-prompts.md) — a library of useful prompts, organized by what you're trying to do
- [docs/04-next-steps.md](./docs/04-next-steps.md) — going further: custom slash commands, MCP servers, skills, extending your site
