# Rock-Paper-Scissors (you vs. the computer)

The simplest game here — three buttons and a random computer opponent. A confidence-builder if you want an easy win before iterating. **Difficulty: easy.** Works from either template.

**How to use:** paste everything in *The prompt* box into Claude Code, accept the change, check the preview. Then use the *Iterate* prompts one at a time.

## The prompt

```
Build a Rock-Paper-Scissors game (the player versus the computer) as the main page of my site.

Constraints:
- Put everything in app/page.tsx, and make it an interactive client component (add "use client" at the very top).
- Use React state (useState) only. No backend, no database, no new npm packages.
- Style it with Tailwind CSS classes (already set up in this project).

The game:
- Three big buttons: Rock, Paper, Scissors (use emojis too).
- When the player clicks one, the computer picks one at random.
- Show both choices and who won the round (or a tie), with the standard rules.
- Keep a running score: player wins, computer wins, ties.
- A "Reset" button to set the scores back to zero.

Design:
- Clean and centered, large friendly buttons, clear result text. Looks good on a phone.

When you're done, tell me in one sentence what you changed, and remind me to check the preview.
```

## Then iterate (one at a time)

- "Add a short 'rock... paper... scissors... shoot!' countdown before revealing the computer's choice."
- "Play to 5 — announce an overall winner when someone reaches 5, then offer a rematch."
- "Add a little animation or shake on the choices when they're revealed."
- "Show a running history of the last few rounds."
- "Make it match my colors, [say a color]."

## Notes

- Single-player vs. a random computer — no backend needed.
