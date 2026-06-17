# Tic-Tac-Toe (two players, same screen)

A classic two-player game — players take turns on the same laptop or phone. A great first build: the loop from "empty grid" to "working game with a scoreboard" is fast and satisfying. **Difficulty: medium.** Works from either template.

**How to use:** paste everything in *The prompt* box into Claude Code, accept the change, check the preview. Then use the *Iterate* prompts one at a time.

## The prompt

```
Build a two-player (pass-and-play) Tic-Tac-Toe game as the main page of my site.

Constraints:
- Put everything in app/page.tsx, and make it an interactive client component (add "use client" at the very top).
- Use React state (useState) only. No backend, no database, no new npm packages.
- Style it with Tailwind CSS classes (already set up in this project).

The game:
- A 3x3 grid of cells. Players alternate placing X and O by clicking an empty cell.
- Clearly show whose turn it is.
- Detect a win (three in a row, column, or diagonal) and a draw, and announce the result.
- When the game is over, ignore further clicks on the board.
- A "New game" button clears the board for another round.
- Keep a running scoreboard across rounds: X wins, O wins, and draws.

Design:
- Clean and centered, with large tappable cells, a clear title, and readable text.
- Looks good on a phone screen too.

When you're done, tell me in one sentence what you changed, and remind me to check the preview.
```

## Then iterate (one at a time)

- "Highlight the three winning cells when someone wins."
- "Add a short celebration — confetti or a fun message — when a player wins."
- "Let me type the two players' names and use them instead of X and O in the messages."
- "Use two nice emojis instead of the letters X and O."
- "Add a 'reset scoreboard' button next to the scores."
- "Make the colors match my favorite color, [say a color]."

## Notes

- This is **pass-and-play**: two people share one screen. Online play (two devices) would need a backend, which is outside the workshop.
