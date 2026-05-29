# Useful prompts

A library of prompts organized by what you're trying to do. Copy them, adapt them, send them.

## Exploring an unfamiliar project

When you first open a project (yours or someone else's) and want to understand it:

```text
What's in this project? Give me a quick tour.
```

```text
Read the README and CLAUDE.md, then summarize what this project does in 3 bullets.
```

```text
What's the structure of this codebase? Which folders hold what?
```

```text
What's the entry point? Where does the app actually start?
```

---

## Text and content changes

Headlines, paragraphs, copy:

```text
Change the headline to "Hi, I'm [your name]".
```

```text
Update the about section to two short paragraphs about me — [your background].
```

```text
Rewrite the homepage copy in a warmer, more confident tone. Don't change the layout.
```

```text
Make the headline shorter and punchier — under 8 words.
```

```text
Translate the page to German, keep proper nouns as is.
```

---

## Layout and visual changes

Spacing, sizing, color:

```text
Make the headline 50% larger and add more space below it.
```

```text
Tighten the spacing between sections — feels too airy.
```

```text
Use a softer gray for the body text — make it less harsh.
```

```text
Change the accent color from blue to forest green (#16a34a).
```

```text
Use a serif font for the main headings, keep the body sans-serif.
```

```text
Make the layout darker — dark background, light text.
```

---

## Adding new sections

```text
Add a new section called "Experience" after the About section. Three bullet points, each with role + company + year.
```

```text
Add a testimonials section with two quotes I'll provide later. Use a card layout.
```

```text
Add a "Now" section at the top showing what I'm working on this month.
```

```text
Add a contact form below the contact section. For now, it can just be a placeholder — no backend.
```

---

## Working with files and code

Refactoring, organizing:

```text
Move the Projects section above the About section in @app/page.tsx.
```

```text
Refactor the Hero component to be smaller — pull the CTA buttons into their own component.
```

```text
Why is the build slow? Look at the dependencies and tell me what's heavy.
```

```text
Add TypeScript types for the contact form data.
```

---

## Git and saving your work

```text
Show me what I've changed since the last commit.
```

```text
Commit my changes with a clear message and push to GitHub.
```

```text
Stash my current changes, switch to the main branch, then come back.
```

```text
Show me the last 5 commits I made.
```

```text
Undo my last change.
```

```text
Go back to my last commit — throw away everything since then.
```

---

## CLAUDE.md and project rules

Teaching Claude your preferences:

```text
Add a rule to CLAUDE.md: always commit with a single-sentence message.
```

```text
Add a rule: use a warm, friendly tone in all copy on the site.
```

```text
Add a rule: don't add new packages without asking me first.
```

```text
Add a rule: when I ask for a design change, propose 2-3 options before picking one.
```

```text
Read my CLAUDE.md and suggest two more rules I should add based on patterns you're seeing in my prompts.
```

---

## Creating custom slash commands

```text
Create a slash command called /polish in .claude/commands/polish.md that improves the writing on the current page — clearer, more confident, no jargon.
```

```text
Create a slash command called /tighten that finds and removes redundant words.
```

```text
Create a slash command called /translate that asks for a language, then translates the visible page text to that language while keeping proper nouns.
```

```text
Create a slash command called /screenshot-feedback that lets me paste a screenshot and asks Claude to suggest 3 improvements.
```

---

## Debugging and "this didn't work"

When something breaks:

```text
This didn't work — here's the error message. [paste the error]
What broke and how do I fix it?
```

```text
The page is blank in the preview. What might be wrong?
```

```text
The change you just made broke the layout. Roll it back and try again.
```

```text
I keep getting [error]. Walk me through what it means.
```

---

## Asking Claude to explain

For learning:

```text
Explain what this file does, line by line, in plain English.
```

```text
Why did you make that change the way you did? What alternatives existed?
```

```text
What's the difference between a Component and a Page in Next.js?
```

```text
I don't understand this error. Translate it for a non-developer.
```

---

## Working with images

```text
I'm going to paste a screenshot of my favorite portfolio. Take inspiration from its layout, but use my content.
```

```text
Here's a screenshot of my logo. Add it to the top-left of the page, sized appropriately.
```

```text
Here's a photo of me. Add it as a circular avatar next to my name in the hero.
```

> Tip: just paste images directly into the terminal. Claude reads them.

---

## Deploying

```text
Walk me through deploying this site to Vercel.
```

```text
Set up a custom domain for my Vercel deployment.
```

```text
Add Vercel Analytics so I can see who's visiting my site.
```

---

## Inspecting Claude's behavior

When you want to see what Claude is doing:

```text
Before you make changes, tell me your plan in 3 bullets, then wait for my okay.
```

```text
What's in your context right now? What files have you read?
```

```text
Pretend you've just started a new session. What do you know about this project?
```

---

## Recovery and reset

When things are messy:

```text
Forget everything from the last 5 messages. We're starting that idea over.
```

```text
Undo all changes since I started this session.
```

```text
Go through the project and find anything that's broken or half-finished, then list it.
```

---

## A few prompt patterns worth learning

These are templates you'll find yourself reusing.

### *"Like X, but..."*

```text
Make the hero like the one on stripe.com, but with my colors and copy.
```

### *"Before and after"*

```text
Show me what this looked like before your change, and what it looks like now.
```

### *"3 options"*

```text
Suggest 3 different ways to style the contact section. Show me each, then I'll pick one.
```

### *"Explain your reasoning"*

```text
Why is this approach better than just doing X?
```

### *"Plan first, then code"*

```text
Don't write any code yet. First, give me a short plan: what files will you touch, what will change, and what could go wrong.
```

---

Previous: [← Claude commands](./02-claude-commands.md) · Next: [Going further →](./04-next-steps.md)
