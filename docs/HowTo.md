# How To: Adding and Executing a Task

A practical, in-order walkthrough of the process — "what do I actually
type." For the *why* behind each rule (branch naming, why Status is
structured this way, etc.), see [WORKFLOW.md](./WORKFLOW.md). This doc is
the sequence; that one is the reference.

Every command below also has a `make` shortcut — run `make help` to see
the full list.

## Before any of this works: one-time setup

Only needed once per repo, by whoever sets it up first.

```bash
gh auth login                       # or: gh auth refresh -s project,read:project
make board-setup                    # creates labels + the Project board + its fields
```

Then, **by hand in the browser** (not scriptable — see `WORKFLOW.md` for
why): open the project, rename the built-in `Status` field's options so
they read `Backlog, Ready, In Progress, In Test, Done`, and set up the
board automations. `make board-setup` prints the exact steps at the end
of its output — follow those.

If any issues already existed before you did the rename:

```bash
make board-backfill                 # sets Status=Backlog on every open issue
```

This asks for confirmation and lists every issue it's about to touch
first — it's a blunt "set everyone to X" tool, not a "top up only what's
missing" one, so don't reach for it as routine maintenance later (it
would reset anything already `In Progress`/`In Test` back to `Backlog`).
It's a one-time fixup for right after setup.

## 1. Turning proposal work into epics

This is normally done once per proposal, not per task. **This step is
manual** — the script only turns already-written epic files into issues,
it doesn't read the proposal itself or decide the chunks for you.

1. Read the proposal, decide the logical chunks, and write one
   `docs/epics/EPIC-XXX-<slug>.md` file per chunk — the 9 that exist now
   came straight from `PROGRESS.md`'s phases. Exact required format (only
   3 lines actually matter, rest is free-form): [docs/epics/README.md](./epics/README.md).
2. Turn them into real GitHub Issues:
   ```bash
   make board-epics
   ```
   This reads every `docs/epics/EPIC-*.md`, creates an issue for any that
   doesn't already have one (matched by title, so it's safe to re-run
   after adding a new epic file later), adds it to the board, and sets
   its Priority/Phase/Status.

You now have epics on the board in the `Backlog` column.

## 2. Breaking an epic into tasks

For each concrete piece of work under an epic, two ways to create the
task issue — same result either way:

**A. From the GitHub UI** — Issues → New issue → **✅ Task** template.
Fill in the parent epic, description, acceptance criteria, priority,
phase. Link it to the epic either by pasting the epic's number in the
**Parent epic** field and creating the link yourself via the epic's
"Create sub-issue" button (in the epic's Sub-issues section), or by
adding a checklist line to the epic's body (`- [ ] #43`) as a lighter
fallback if you don't want to use sub-issues.

**B. From the CLI:**

```bash
make task-new TITLE="Add /ru/ routes" EPIC=12 PRIORITY=P0 PHASE=7 \
  BODY="Mirror the existing [hub]/[service] structure under /ru/."
```

This creates the issue, links it as a **native GitHub sub-issue** of
`EPIC=12` (shown as "Sub-issues progress" on the epic, better than the
checklist approach — it's a real parent/child relationship GitHub
tracks), adds it to the Project board, and sets Priority/Phase/Status.
Only `TITLE` is required — `EPIC`, `PRIORITY`, `PHASE`, `BODY` are all
optional.

Whichever way you create it, add it to the Project board if "Auto-add to
project" isn't already turned on.

Only write a `docs/tasks/TASK-XXX-*.md` file if the task genuinely needs
more spec than fits in the issue body (see `docs/tasks/README.md`) — most
tasks don't.

The task now sits in `Backlog`. Move it to `Ready` when it's actually
next in line to be picked up (a manual drag — there's no automation for
this step, it's a planning decision).

## 3. Starting work on a task

```bash
make task-start TASK=43
```

This one command:
- creates a branch named `task/43-<slug-from-the-issue-title>`
- checks it out locally
- links the branch to the issue (shows up in the issue's "Development"
  panel)
- moves the board item's Status to `In Progress`

Go write the code.

## 4. Opening the PR

```bash
git push -u origin task/43-<slug>
gh pr create --fill
```

**In the PR description, include:**

```
Closes #43
```

(The PR template already has a field for this — don't delete it.) This
is what:
- links the PR to the issue on GitHub (shows in both the PR and issue
  pages)
- automatically moves the board item to `In Test` (see WORKFLOW.md's
  "Automating the transitions" section for how this is wired up)
- will auto-close #43 and move it to `Done` when the PR merges

If the PR only partially completes the issue, use `Part of #43` instead
— it links without auto-closing.

## 5. Review and merge

- CI (`.github/workflows/ci.yml`) runs automatically: lint, typecheck,
  build. It must pass.
- Get the PR reviewed and approved as normal.
- Merge it.

That's it — the issue closes, the board moves the item to `Done`, and if
it was the last unchecked box on its parent epic, the epic's checklist
shows 100% complete (close the epic manually once all its tasks are
done).

## Quick reference: the whole loop

```bash
make board-epics                    # (once per new proposal) file epic issues
make task-new TITLE="..." EPIC=<n>  # file a task under an epic (or use the GitHub UI)
make task-start TASK=<n>            # branch + checkout + Status=In Progress
#  ... write code, commit ...
git push -u origin task/<n>-<slug>
gh pr create --fill                 # body must contain: Closes #<n>
#  ... review, CI passes, merge ...
#  -> board auto-moves to In Test on PR open, Done on merge
```

## Filing a bug (not planned work)

Anyone: Issues → New issue → **🐛 Bug report**. No epic/task ceremony
required — fix it via the same branch/PR flow (`fix/<n>-<slug>` instead
of `task/<n>-<slug>`) if it needs code changes, or just resolve and close
it directly if it doesn't.
