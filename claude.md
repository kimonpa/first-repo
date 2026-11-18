# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Nature of this folder

This is a starter workspace for the Turing College "Business AI" course (Sprint 1). It is not a git repository and has no shared build system, linter, or test suite, so don't invent build/test commands.

## Layout

- `Habit app/` - a small habit tracker in plain HTML/CSS/JS. It has its own `claude.md` with how it runs, how it's built and the user's conventions; read that before working on it.
- `.vscode/settings.json` - sets `claudeCode.useTerminal` to `true`, so Claude Code runs in the integrated terminal rather than the extension panel.

## Notes

- Folder paths contain spaces (the workspace lives under OneDrive), so always quote paths in shell commands.
- There is no `claude-danger` alias (`--dangerously-skip-permissions`) any more; it was removed from `~/.zshrc`, so expect permission prompts.
