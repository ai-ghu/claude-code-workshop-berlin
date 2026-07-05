# Workshop project — Claude Code Berlin

This is a 2-hour workshop project for non-technical participants. They are building a **personal portfolio** website — the project at the root of this repo.

## Who you're working with

The user is **non-technical**. They have not written code before today. Treat them like a thoughtful collaborator who understands the goal but not the syntax.

## How to behave

- **Explain before you act.** Before making a change, say in plain language what you're about to do and why ("I'll update the headline in `content.ts` so it says your new tagline").
- **Stay inside the existing project.** Don't add new pages, frameworks, libraries, or build tools unless the user explicitly asks. Edit existing files.
- **Don't refactor.** No restructuring, no extracting components, no "while I'm here" cleanup. Make the requested change and stop.
- **Use plain English in commits and explanations.** Avoid jargon. If you must use a technical term, define it once.
- **Show, don't tell.** After a change, remind them to check the browser preview tab. Hot reload is on, so they'll see updates immediately.
- **Errors are learning moments.** If something breaks, walk through what happened in plain language before fixing it.

## What's already set up in the Codespace

- Node.js 20, npm, git, GitHub CLI
- Claude Code (`claude`) and Vercel CLI (`vercel`) installed globally via the devcontainer
- The project is a Next.js 14 (App Router) + TypeScript + Tailwind CSS site at the repo root
- Port 3000 auto-forwards and opens a preview tab when `npm run dev` is running

## Where things live (this matters)

This project keeps **content separate from layout**, so most edits happen in one file.

- **`content.ts`** — all editable text (name, role, bio, projects, experience, skills, testimonials, contact). **Edit here first for any text change.**
- **`components/`** — one file per page section. Edit these when changing how a section *looks* or *behaves*, not what it says.
  - `Hero.tsx` — name, role, headline, CTA buttons
  - `About.tsx` — about paragraphs
  - `Experience.tsx` — work history list
  - `Projects.tsx` — selected work
  - `Skills.tsx` — skill groups with chips
  - `Testimonials.tsx` — pull quotes
  - `Contact.tsx` — email + social links
- **`app/page.tsx`** — the page composition (which sections appear, in what order)
- **`app/layout.tsx`** — site-wide HTML wrapper (reads page title from `content.ts`)
- **`tailwind.config.ts`** — colors and fonts
- **`app/globals.css`** — base styles

## Rules for making changes

- **Text/content edit?** → edit `content.ts`, never the components.
- **New section?** → create a new component in `components/`, import it into `app/page.tsx`, add corresponding data to `content.ts`.
- **Visual / layout change to an existing section?** → edit the matching `components/[Section].tsx`.
- **Color or font change?** → edit `tailwind.config.ts`. Avoid hardcoded hex values in components; use the named Tailwind colors (`accent`, `ink`, `paper`).
- **Remove a section?** → remove its `<Component />` line from `app/page.tsx`. Optionally also remove its export from `content.ts`. **Don't delete the component file** unless explicitly asked.
- **Reorder sections?** → reorder the `<Component />` lines in `app/page.tsx`.

## What the user typically wants

- Update text content (headlines, paragraphs, names, contact info)
- Swap colors and fonts
- Add or replace images (they may paste image files into `public/` or provide URLs)
- Add a section (e.g., "experience", "services", "testimonials") — **use the existing component patterns**
- Deploy to Vercel

## Deploying to Vercel

The site lives at the repo root, so Vercel auto-detects Next.js with no extra configuration.

**CLI path (preferred — zero config):**

```bash
vercel login             # first time
vercel --prod
```

**GitHub-integration path:**

Import the fork via [vercel.com/new](https://vercel.com/new) and click Deploy. Because the project is at the repo root, there is **no Root Directory step** — Vercel finds Next.js automatically.

## Things to flag

- Features that need a database, auth, or backend — out of scope for this workshop. Suggest a simpler alternative.
- New npm packages — ask before installing.
- Tailwind colors — prefer the existing palette in `tailwind.config.ts`. If they want a new color, add it to the config rather than hardcoding hex values throughout.
