# Big Five (OCEAN) personality test + free report

A complete personality test that scores the five OCEAN traits and generates a personalized report people can email to themselves — the kind of thing other sites charge for. This is **one big "specification" prompt**: a single message that describes the whole app, so Claude builds it in one go. **Difficulty: ambitious (but it's still one page, no backend).** Works from either template.

**How to use:** paste everything in *The prompt* box into Claude Code, accept the change, check the preview. It's a bigger build, so give it a moment. Then refine with the *Iterate* prompts one at a time.

## The prompt

```
Build a free Big Five (OCEAN) personality test with an instant, personalized report, as the main page of my site.

TECH CONSTRAINTS
- Put everything in app/page.tsx, and make it an interactive client component (add "use client" at the very top).
- Use React state (useState) only. No backend, no database, no login, and no new npm packages. Everything runs in the browser, and the person's answers never leave their device.
- Style it with Tailwind CSS classes (already set up in this project).

THE TEST
- Use the public-domain Mini-IPIP item set: 20 short statements, 4 for each of the five traits — Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Include the reverse-scored items the Mini-IPIP normally uses.
- Start with a friendly intro screen: what this is, that it takes about 3 minutes, and a one-line privacy note ("your answers stay in your browser").
- Then show the 20 statements. Rate each on a 1-5 scale: 1 = Strongly disagree, 3 = Neutral, 5 = Strongly agree (use clear buttons or radio options).
- Show progress (e.g., "12 of 20"). Don't allow "See my results" until every statement is answered.

SCORING (keep it transparent with code comments)
- For reverse-keyed items, invert the answer (6 minus the value).
- For each trait, average its 4 items, then convert to a 0-100 score.

THE REPORT (results screen)
- A warm headline summary.
- For each of the five traits: the trait name, its 0-100 score, a horizontal bar, a Low / Average / High label, and a 2-3 sentence description written for that level (different text for low vs. average vs. high).
- A short, friendly overall paragraph.
- A clear disclaimer: this is a simplified, for-fun assessment based on the public-domain Mini-IPIP, not a clinical or diagnostic tool.

SHARE / EMAIL
- An "Email my results" button that opens the person's own email app using a mailto: link, pre-filled with a subject line and a plain-text version of the full report in the body (URL-encode the body so line breaks survive). Note in a small caption that this opens their email app to send it themselves.
- A "Print / Save as PDF" button that calls window.print().
- A "Start over" button that resets the test.

DESIGN
- Calm, clean, trustworthy. Generous spacing, readable type, a distinct color for each trait's bar. Looks good on a phone.

When you're done, summarize what you changed in one sentence and remind me to check the preview.
```

## Then iterate (one at a time)

- "Show one question at a time with a big progress bar, instead of all 20 on one page."
- "Give each trait its own color and a small icon, and use them in the report."
- "Add a short 'What is the Big Five?' explainer the person can expand on the intro screen."
- "Rewrite all the trait descriptions in a warmer, more encouraging tone."
- "Put my name/brand and logo at the top, so it looks like my own product."
- "Add a shareable link that encodes the results in the URL, so someone can send their report to a friend." *(no backend — the scores ride along in the link)*

## Notes & honesty

- **"Email" is a `mailto:` link.** It opens the person's own email app with the report pre-filled — there's no server, so nothing is sent or stored automatically. Auto-sending email to people, or collecting their results, would require a backend (a good "after the workshop" project).
- **Science, honestly:** the Big Five and the Mini-IPIP are well-regarded and public domain, but a 20-item version is a quick, simplified measure — keep the "for fun, not clinical" disclaimer in the app.
- **Want the 16-type (MBTI-style) version instead?** After building this, say: *"Change this into a 16-type test with four scales (E/I, S/N, T/F, J/P) that shows a 4-letter type and a description."* Note that MBTI-style typing is popular but less scientifically supported than the Big Five — worth a line in the disclaimer.
