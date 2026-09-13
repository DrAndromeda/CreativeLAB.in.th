# Tasks

Most tasks live entirely as a GitHub Issue (`type: task`, using the
[task template](../../.github/ISSUE_TEMPLATE/task.yml)) — no file needed
in this folder.

Add a `TASK-XXX-<slug>.md` file here only when a task needs more written
spec than comfortably fits in an issue body: detailed acceptance criteria,
content requirements, a design/architecture write-up, multiple sub-steps
that aren't worth splitting into separate issues.

When you do add one:

1. Name it `TASK-<issue-number>-<slug>.md` (the issue number, not a
   separate counter — keeps the doc and the issue trivially linkable).
2. Link to it from the issue body, and link back to the issue (`Issue:
   #<number>`) from the top of the doc.
3. Status still lives on the issue/board, not in this file — don't add a
   status field here that can drift out of sync.

See [../WORKFLOW.md](../WORKFLOW.md) for the full process.
