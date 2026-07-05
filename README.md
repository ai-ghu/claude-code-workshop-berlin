# Claude Code Workshop — Berlin

Welcome! In the next 2 hours you'll build and deploy your own website using Claude Code.

## What you'll build

A clean, content-driven **personal portfolio** (about, projects, contact), built with Next.js + Tailwind. By the end of the workshop, your site will be live on the internet at a Vercel URL you can share.

Content and layout are kept separate, so most edits happen in one file: `content.ts`.

```
content.ts              ← all editable text lives here
components/             ← one file per page section (Hero, About, Projects, …)
app/
  page.tsx              ← composes the sections in order
  layout.tsx            ← HTML wrapper, page title from content.ts
  globals.css           ← base styles
tailwind.config.ts      ← colors and fonts
```

## Before the workshop

You should have received a setup email with the account checklist (GitHub, Claude, Vercel). If you missed it, ping the organizer.

## Getting started (during the workshop)

1. **Fork this repo** to your own GitHub account (top-right "Fork" button).
2. **Open in Codespaces**: on your fork, click the green "Code" button → "Codespaces" tab → "Create codespace on main". Wait ~60 seconds for the environment to boot.
3. **Start the preview** in the Codespace terminal:
   ```bash
   npm install
   npm run dev
   ```
4. Click the "Open in Browser" popup that appears (port 3000) — that's your live preview.
5. **Open Claude Code** in a second terminal:
   ```bash
   claude
   ```
6. Start chatting. Try: *"Change the headline to say 'Hi, I'm [your name]'"*

## What to ask Claude

Common text edits — Claude will edit `content.ts`:

- *"Change my name to Sara Patel."*
- *"Update the headline to say I'm looking for senior roles."*
- *"Add a fourth project called 'Berlin Coffee Map'."*
- *"Remove the Skills section entirely."*
- *"Update my email to sara@example.com."*

Layout / design tweaks — Claude will edit `components/` or `tailwind.config.ts`:

- *"Make the headline bigger and use a serif font for it."*
- *"Switch the accent color from blue to a deep orange."*
- *"Use a dark background everywhere."*
- *"Show projects as a grid instead of a list."*

## Deploying to Vercel

From the Codespace terminal:

```bash
vercel login             # one-time
vercel --prod
```

Follow the prompts — accept the defaults. A URL like `your-portfolio.vercel.app` appears, and your site is live.

> **Prefer the Vercel dashboard?** Go to [vercel.com/new](https://vercel.com/new) and import your fork. Because the site now lives at the repo root, Vercel auto-detects Next.js — no extra settings needed. Just click Deploy.

## Reference docs

Whether during or after the workshop, these are the references to keep on hand:

- [docs/01-terminal-basics.md](./docs/01-terminal-basics.md) — the dozen commands you actually need (`pwd`, `cd`, `mkdir`, etc.)
- [docs/02-claude-commands.md](./docs/02-claude-commands.md) — every Claude Code slash command, keyboard shortcut, and launch mode
- [docs/03-prompts.md](./docs/03-prompts.md) — a library of useful prompts, organized by what you're trying to do
- [docs/04-next-steps.md](./docs/04-next-steps.md) — going further: custom slash commands, MCP servers, skills, extending your site
