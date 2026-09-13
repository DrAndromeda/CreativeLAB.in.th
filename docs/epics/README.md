# Epics

This folder holds one file per epic. `scripts/create-epic-issues.sh`
(`make board-epics`) turns each of these files into a GitHub Issue — but
writing the file in the first place is a manual step, not scripted:
**turning a proposal into epics means reading the proposal and deciding
the chunks yourself.** The script only does the second half (file →
issue), and only for files that already exist here.

```
Proposal (proposal.md / docs/Proposals.md)
        │  you read it, decide the logical chunks  (manual)
        ▼
docs/epics/EPIC-XXX-<slug>.md   (you write this)
        │  ./scripts/create-epic-issues.sh  (make board-epics)
        ▼
GitHub Issue, type: epic, on the Project board
```

## Adding a new epic

1. Pick the next number (`EPIC-010`, `EPIC-011`, …) and a short slug.
2. Create `docs/epics/EPIC-XXX-<slug>.md` using the template below.
3. Run `make board-epics` — it creates an issue for this file (and skips
   every epic that already has one, matched by title, so it's always
   safe to re-run after adding a new file).

## Required format

Only three things matter to the script — everything else in the file is
just carried into the issue body verbatim, so write as much or as little
extra context as you want below them.

```markdown
# EPIC-XXX: Title Goes Here

- **Status:** Not started
- **Priority:** P0
- **Phase:** Phase N
- **Proposal:** [proposal.md](../../proposal.md) — §section reference
- **GitHub Issue:** _link once created_

## Summary

What this epic is and why it matters.

## Tasks

- [ ] High-level suggested tasks (optional — real tasks are filed as
      their own issues via `make task-new ... EPIC=<n>` once this epic
      has an issue number)

## Notes

Anything else worth knowing.
```

- **`# EPIC-XXX: Title`** — the first line starting with `# ` becomes
  the issue title, verbatim. This is also the duplicate check: if an
  issue with this exact title already exists, the script skips it. Don't
  reuse a title, and don't rename an epic file's title after its issue
  exists (the file and issue will just drift apart — edit the issue
  directly instead).
- **`**Priority:** P0`** (or P1/P2) — becomes a `priority: Pn` label and
  sets the board's Priority field. Optional; omit the line if you don't
  want it labeled yet.
- **`**Phase:** Phase N`** — the script pulls the first digit(s) it finds
  on this line, so `Phase 7`, `Phase 7 (see PROGRESS.md)`, etc. all work.
  Becomes a `phase: N` label and sets the board's Phase field. Optional.

## After the issue exists

Update the file's `**GitHub Issue:**` line with the real link — this is
manual, the script doesn't write back to the file. Everything else
(Status, labels) lives on the issue/board from that point on, not in this
file — see [WORKFLOW.md](../WORKFLOW.md) for why the issue is the source
of truth.
