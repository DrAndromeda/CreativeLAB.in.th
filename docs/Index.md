# Documentation Index

Start here. Everything below is a link, not a duplicate — if you're
updating something, update it in one place.

## Project

- [Proposals](./Proposals.md) — links to every proposal/brief and its status
- [../README.md](../README.md) — how to run the project locally and in production
- [../PROGRESS.md](../PROGRESS.md) — build progress against the current proposal, phase by phase
- [../NOTES.md](../NOTES.md) — everything that needs a person (client answer, teammate decision, external credentials), not more code

## Team workflow

- [**How To**](./HowTo.md) — start here for day-to-day use: the exact
  command sequence to add and execute a task
- [Workflow](./WORKFLOW.md) — the reference doc: *why* each rule exists
  (branch naming, board field design, automation options)
- [Epics](./epics/) ([format & how to add one](./epics/README.md)) — written
  specs for larger chunks of work, one file per epic
- [Tasks](./tasks/) — written specs for individual tasks, only when a task
  needs more detail than fits in its GitHub Issue
- `make help` (from the repo root) — every workflow command as a
  shortcut (`make task-start TASK=42`, etc.)

## Where things actually get tracked

- Day-to-day status lives on the **GitHub Project board**, not in this
  folder — see [Workflow](./WORKFLOW.md#the-board-github-projects).
- New epics/tasks/bugs are **GitHub Issues** — use the templates under
  `.github/ISSUE_TEMPLATE/`.
