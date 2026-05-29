# Claude Code commands

Everything Claude Code understands. Bookmark this page.

## Slash commands

You type these inside a Claude Code session. Type `/` and you'll see them autocomplete.

### Essentials — you'll use these every day

| Command | What it does |
|---|---|
| `/help` | Lists all available commands |
| `/init` | Generates a `CLAUDE.md` for your project |
| `/clear` | Starts a fresh session — forgets the conversation |
| `/compact` | Summarizes the conversation, keeps going on the same task |
| `/context` | Visualizes what's in Claude's working memory (colored grid) |
| `/usage` | Shows session cost in USD and how much of your monthly plan remains |
| `/resume` | Picks up a previous session |
| `/exit` | Leaves Claude Code |

### Workflow

| Command | What it does |
|---|---|
| `/diff` | Shows what's changed since the last commit |
| `/copy` | Copies Claude's last response to your clipboard |
| `/config` | Opens settings (theme, model, output style) |
| `/model` | Switch between Sonnet, Opus, or Haiku |
| `/fast` | Toggles fast mode (slightly quicker responses, same quality) |

### Custom

Anything you create in `.claude/commands/*.md` becomes a slash command. Example: a file at `.claude/commands/polish.md` becomes `/polish`. See the *next-steps doc* for how this works.

---

## Keyboard shortcuts

Press these inside a running Claude Code session.

| Key | What it does |
|---|---|
| `Tab` | Autocompletes commands and file names |
| `↑` / `↓` | Browses your message history |
| `Esc` | **Interrupts Claude** mid-response — for when you want to redirect |
| `Shift+Tab` | Cycles permission modes (default → auto-accept → plan → bypass) |
| `Shift+Enter` | Inserts a new line without sending |
| `Ctrl+D` | Quits the session |
| `?` | Shows all keyboard shortcuts in the current session |

> **Esc to interrupt** is the most-forgotten one. Use it whenever Claude is heading the wrong direction.

---

## Launching Claude

These are commands you type in the regular terminal (not inside a Claude session) to start Claude in different ways.

### Most common

```bash
claude
```

Opens an interactive session in your current folder.

### With a starting prompt

```bash
claude "what does this project do?"
```

Same as above, but Claude reads the prompt and starts answering immediately.

### One-shot mode

```bash
claude -p "summarize the README in three bullets"
```

Claude answers once, then exits. Great for quick automations or scripts.

### Continue your most recent session

```bash
claude -c
```

Picks up where you left off — useful after a coffee break.

### Resume a specific past session

```bash
claude -r
```

Shows you a list of past sessions to pick from.

### Choose a specific model

```bash
claude --model sonnet
claude --model opus
claude --model haiku
```

Sonnet is the default. Opus is heavier (better at hard problems). Haiku is lighter (faster, cheaper).

---

## Referencing files with `@`

Inside a Claude session, type `@` and Claude will autocomplete file names.

```text
Update @app/page.tsx — add a Contact section at the bottom.
```

This tells Claude exactly which file to edit. Cuts ambiguity.

You can also reference a folder:

```text
Look at everything in @components/ and tell me which is the largest.
```

---

## Permission modes (what `Shift+Tab` cycles between)

Every time Claude wants to edit a file or run a command, by default it asks you to approve. You can change this behavior:

- **Default** — Claude asks for each file edit or command. Most cautious.
- **Auto-accept edits** — Claude edits files without asking, still asks before running commands. Good for fast iteration.
- **Plan mode** — Claude can only read; can't edit or run anything. Useful for exploration.
- **Bypass** — Claude does everything without asking. Use only when you fully trust the task.

Press `Shift+Tab` inside a session to cycle through them.

---

## Useful environment files

These live in your project folder.

| File | What it does |
|---|---|
| `CLAUDE.md` | Project rulebook. Claude reads it on every new session. Put your preferences, conventions, and "don't do this" rules here. |
| `.claude/commands/*.md` | Each file in this folder becomes a custom slash command. |
| `.claude/settings.json` | Per-project Claude Code settings (rarely needed). |
| `~/.claude/CLAUDE.md` | Your **global** preferences. Applies to every project you work on. |

---

## When things go wrong

Quick recipe table:

| Situation | What to do |
|---|---|
| Claude is going the wrong direction | Press `Esc`, then re-describe what you wanted |
| You can't remember what command does what | Type `/help` |
| You forgot what keyboard shortcuts exist | Type `?` |
| Claude seems confused after a long conversation | Run `/compact` to summarize, or `/clear` to start fresh |
| You don't know how much you've spent | Run `/usage` |
| Memory feels cluttered | Run `/context` to see what's filling it up |
| You want to undo something | Ask Claude: *"undo your last change"* or *"go back to my last commit"* |
| Authentication broke | Run `claude` again, follow the auth URL it prints |

---

Next: [Useful prompts →](./03-prompts.md) · Previous: [← Terminal basics](./01-terminal-basics.md)
