# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack
- Plain HTML, CSS, JavaScript - no framework, no build step, no package manager, no linter or tests
- Run it: `open -a Safari index.html` (from this folder) - just reload the page after edits
- Data is stored in the browser's `localStorage` (key `"habits"`), not in files. It's per-browser, so clearing Safari's website data deletes all habits.

## File structure
- `index.html` - markup only (form `#habit-form` / `#habit-input`, list `#habit-list`)
- `style.css` - all styles
- `app.js` - all logic

## How app.js works
- One in-memory array `habits`, each item `{ id, name, doneOn }`. `id` is `Date.now()` at creation; `doneOn` is a local `YYYY-MM-DD` string from `today()`, or `null`.
- "Done" means done *today*: a habit counts as done only while `doneOn === today()`, so every habit resets automatically the next day. No history is kept.
- Every change follows the same pattern: modify `habits` → `saveHabits()` → `render()`. `render()` rebuilds the whole list from scratch, so keep new features in that pattern rather than patching the DOM directly.
- Changing the shape of a habit object affects data already saved in users' browsers; `loadHabits()` must still cope with the old shape.

## Conventions
- Add a comment above each function explaining what it does
- Always confirm with me before adding a page or feature that wasn't in the original request
