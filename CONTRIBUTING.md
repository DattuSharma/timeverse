# Contributing to TIMEVERSE

## Branch policy
- `main`: stable, reviewed work.
- `develop`: integration branch.
- `feature/<short-name>`: one focused task per branch.
- `fix/<short-name>`: focused bug fixes.

Never have multiple AI tools edit the same branch or files concurrently.

## AI-assisted workflow
1. Assign one bounded task to one tool.
2. Require it to inspect existing code and docs before editing.
3. Require tests and a summary of changed files.
4. Review the diff and run tests locally.
5. Merge through a pull request only after review.

Suggested responsibilities:
- Codex: primary implementation and integration.
- Claude Code: independent review, debugging and complex refactors.
- Cursor: local edits and interactive debugging.
- v0: interface exploration; export/adapt approved components into the repo.
- Antigravity: isolated implementation or browser QA tasks.
- Replit Agent and Bolt: disposable prototypes, not parallel edits to the production branch.
- GitHub: source of truth for all accepted work.

## Required checks
- No secrets or API keys committed.
- No fabricated watch facts, prices or sources.
- No unlicensed assets.
- Tests and type checks pass.
- Errors, loading and empty states are handled.
- README/docs are updated when setup or behavior changes.

## Local development
Detailed commands will be added after the first app scaffold is selected and committed.
