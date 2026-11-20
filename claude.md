# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Nature of this folder

This is a starter workspace for the Turing College "Business AI" course (Sprint 1). It is a git repository (branch `main`, local only, no remote yet). It has no shared build system, linter, or test suite, so don't invent build/test commands.

The folder holds two independent projects. Each is plain HTML/CSS/JS with no build step, and each has its own `claude.md` with how it runs and the user's conventions. Read the project's `claude.md` before working on it. The conventions differ between the two.

## Layout

- `Habit app/` - a small habit tracker. Open `index.html` in Safari. Script file is `app.js`.
- `Personal Profile/` - a one-page personal portfolio site (header with photo, About, Experience, Projects, Contact). Script file is `profile.js`. `aboutMe.md` is the source text for the site content. `Photo KP.jpg` is the header photo.
- `.vscode/settings.json` - sets `claudeCode.useTerminal` to `true`, so Claude Code runs in the integrated terminal rather than the extension panel.

## Notes

- Folder paths contain spaces (the workspace lives under OneDrive), so always quote paths in shell commands. Linked file names need URL encoding in HTML (for example `Photo%20KP.jpg`).
- Don't commit or push unless the user asks.
- There is no `claude-danger` alias (`--dangerously-skip-permissions`) any more; it was removed from `~/.zshrc`, so expect permission prompts.
- Before every commit, scan the staged changes (`git diff --cached`) for anything that looks like an API key, password, or token. Flag anything that should not be committed, and don't commit until the user has seen the flags.
