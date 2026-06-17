# Memory Match (find the pairs)

Flip cards two at a time to find matching pairs — the classic concentration game. Visual and engaging, with a satisfying "win" moment. **Difficulty: medium.** Works from either template.

**How to use:** paste everything in *The prompt* box into Claude Code, accept the change, check the preview. Then use the *Iterate* prompts one at a time.

## The prompt

```
Build a Memory Match (concentration) card game as the main page of my site.

Constraints:
- Put everything in app/page.tsx, and make it an interactive client component (add "use client" at the very top).
- Use React state (useState) only. No backend, no database, no new npm packages.
- Style it with Tailwind CSS classes (already set up in this project).

The game:
- A 4x4 grid of 16 cards: 8 pairs of emojis, shuffled, all face down to start.
- Click a card to flip it face up. After two cards are face up:
  - if they match, leave them face up;
  - if they don't, flip both back down after a short pause.
- Briefly block clicks while two non-matching cards are showing, so the board can't be broken by fast clicking.
- Count the number of moves (pairs of flips).
- When all pairs are found, show a "You win!" message with the move count.
- A "New game" button reshuffles and starts over.

Design:
- Clean, centered grid with nice card styling and a smooth flip feel. Looks good on a phone.

When you're done, tell me in one sentence what you changed, and remind me to check the preview.
```

## Then iterate (one at a time)

- "Add a timer and show how long the game took when I win."
- "Add an easy/medium/hard choice that changes the grid size (4, 16, 24 cards)."
- "Save my best score (fewest moves) in the browser and show it."
- "Use a themed set of emojis — animals, or food."
- "Add a gentle flip animation when cards turn over."

## Notes

- Everything runs in the browser. "Best score" saved in the browser uses local storage on that device only — no backend.
