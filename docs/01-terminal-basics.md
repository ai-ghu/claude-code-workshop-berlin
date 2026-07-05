# Terminal basics

If you've never used a terminal before, this is the page to read first. It explains the dozen or so commands you actually need.

## What the terminal is

The terminal is a window where you **type instructions** to your computer instead of clicking buttons. Every button you've ever clicked is, underneath, just running a command. The terminal lets you skip the buttons and say what you want directly.

You'll see two main characters:

- **The prompt** — usually a `$` or `>` symbol. This means *"I'm ready for your command."*
- **The cursor** — where what you type appears.

You type a command. You press Enter. The computer either does the thing silently or prints something back. Then you go again.

---

## Commands you'll use today

### `pwd` — "where am I?"

Prints your current folder. Useful when you're not sure where you are.

```bash
pwd
```

Output looks like:

```
/workspaces/claude-code-workshop-berlin
```

> Think of it as *"print working directory"*.

### `ls` — "what's here?"

Lists the files and folders in your current location.

```bash
ls
```

To see more detail (sizes, dates, hidden files):

```bash
ls -la
```

### `cd` — "go into a folder"

Changes your current folder. The name stands for *"change directory"*.

Go into a sub-folder:

```bash
cd components
```

Go back up one level:

```bash
cd ..
```

Go back to your home / starting folder:

```bash
cd
```

### `mkdir` — "make a folder"

Creates a new folder.

```bash
mkdir my-notes
```

### `touch` — "make an empty file"

Creates a new empty file. (Also updates the timestamp on an existing file, but you won't care about that today.)

```bash
touch hello.txt
```

### `cat` — "show me what's in this file"

Prints a file's contents to the terminal.

```bash
cat README.md
```

> Short for *"concatenate"*. Annoying name. Useful command.

### `rm` — "delete a file"

Deletes a file. **There's no trash bin — it's gone.** Use carefully.

```bash
rm hello.txt
```

To delete a folder and everything in it:

```bash
rm -rf my-notes
```

> The `-rf` means "recursive" (go into sub-folders) and "force" (don't ask me to confirm). Powerful and dangerous. Triple-check before pressing Enter.

### `mv` — "move or rename"

Moves a file to a new location, or renames it.

Rename:

```bash
mv old-name.txt new-name.txt
```

Move to another folder:

```bash
mv hello.txt my-notes/
```

### `cp` — "copy"

Copies a file.

```bash
cp original.txt backup.txt
```

Copy a whole folder:

```bash
cp -r my-notes my-notes-backup
```

### `clear` — "clean the screen"

Wipes the terminal output and gives you a fresh view. Doesn't delete anything — just visual cleanup.

```bash
clear
```

> Keyboard shortcut: `Ctrl+L` does the same thing.

---

## Commands specific to this workshop

### `npm install` — "install the project's dependencies"

Run this once when you first open a project. It downloads the libraries the project needs.

```bash
npm install
```

Takes ~30 seconds the first time. After that, it's cached.

### `npm run dev` — "start the website preview"

Runs the local development server. Your browser preview at `localhost:3000` becomes live.

```bash
npm run dev
```

Press `Ctrl+C` to stop the server when you're done.

### `npm run build` — "make a production version"

Builds the optimized version of the website. You'll only need this if Vercel CLI asks for it, or if you're troubleshooting.

```bash
npm run build
```

### `claude` — "open Claude Code"

Starts an interactive Claude Code session in your current folder.

```bash
claude
```

First time, it'll ask you to authenticate. Follow the URL.

### `vercel login` and `vercel --prod` — "deploy your site"

After the workshop, deploy your work:

```bash
vercel login
vercel --prod
```

You'll get a URL like `your-site.vercel.app`.

---

## Useful tricks

### Tab completion

Start typing a file or folder name, press **`Tab`**, and the terminal fills in the rest. Save yourself typos.

```bash
cd comp[Tab]
```

→ becomes `cd components/`

### Up arrow / down arrow

Browse your history of recent commands. Way faster than retyping.

### Copy-paste

Highlight text in the terminal, right-click to copy. To paste, right-click again or press **`Cmd+V`** (Mac) / **`Ctrl+Shift+V`** (Linux).

### Stop a running command

Press **`Ctrl+C`** to interrupt anything currently running.

### Open the current folder in your file explorer

In Codespaces, the file explorer on the left already shows what's in your folder. Outside Codespaces:

- Mac: `open .`
- Linux: `xdg-open .`

---

## A few habits that prevent pain

- **Run `pwd` before doing anything destructive.** Confirm you're in the right folder before `rm`-ing anything.
- **Use `Tab` to autocomplete file paths.** It catches typos before they become bugs.
- **`Ctrl+C` is your friend.** Anything stuck or wrong, hit it.
- **Type slowly.** Sounds silly, but most command-line mistakes are typos made in a hurry.

---

## What you don't need to learn

- Bash scripting
- Pipes (`|`), redirects (`>`), backgrounding (`&`)
- Environment variables
- Permissions (`chmod`, `chown`)
- SSH, sudo, sudo apt

These are all useful eventually. None of them matter for this workshop.

---

## Cheat sheet

| What you want | Command |
|---|---|
| Where am I? | `pwd` |
| What's here? | `ls` |
| Go into a folder | `cd folder` |
| Go up one level | `cd ..` |
| Make a folder | `mkdir name` |
| Make a file | `touch name.txt` |
| Show a file | `cat name.txt` |
| Rename / move | `mv old new` |
| Copy | `cp source dest` |
| Delete (careful) | `rm name` |
| Clear screen | `clear` or `Ctrl+L` |
| Stop a running command | `Ctrl+C` |
| Browse history | `↑` `↓` |
| Autocomplete | `Tab` |

---

Next: [Claude Code commands →](./02-claude-commands.md)
