#!/usr/bin/env bash
#
# Syncs each task issue's board Status from its docs/tasks/TASK-*.md
# "**Status:**" line. Mirrors sync-epic-status.sh exactly, one level down.
# Run this whenever you update that line, instead of also hand-editing the
# board.
#
# Mapping (simple heuristic on the Status line's text):
#   "Done"                                  -> Done
#   contains "not started"                  -> Backlog
#   anything else (Partial, Mostly done,
#     Initial check done, In progress, ...) -> In Progress
#
# Matches task files to issues by exact title ("[TASK] <file's title>"),
# same as create-task-issues.sh — so a task needs to have been filed as an
# issue already (run 'make board-tasks' first if this reports "no matching
# issue").
#
# Usage: ./scripts/sync-task-status.sh

set -euo pipefail

# shellcheck source=lib/gh-retry.sh
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/lib/gh-retry.sh"

PROJECT_TITLE="${PROJECT_TITLE:-CreativeLAB Roadmap}"
TASKS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/docs/tasks"

if ! gh auth status >/dev/null 2>&1; then
  echo "Not logged in. Run 'gh auth login' first." >&2
  exit 1
fi

REPO_NWO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
OWNER="${REPO_NWO%%/*}"

PROJECT_NUMBER="$(gh project list --owner "$OWNER" --format json --jq \
  ".projects[] | select(.title == \"$PROJECT_TITLE\") | .number" 2>/dev/null | head -n1 || true)"

if [ -z "${PROJECT_NUMBER:-}" ]; then
  echo "Project \"$PROJECT_TITLE\" not found." >&2
  exit 1
fi

for file in "$TASKS_DIR"/TASK-*.md; do
  [ -e "$file" ] || continue

  title="$(grep -m1 '^# ' "$file" | sed 's/^# //')"
  [ -n "$title" ] || continue
  issue_title="[TASK] $title"

  status_line="$(grep -m1 '\*\*Status:\*\*' "$file" | sed -E 's/.*Status:\*\* *//' | tr -d '\r')"
  if [ -z "$status_line" ]; then
    echo "skip: $title (no **Status:** line found)"
    continue
  fi

  lower="$(echo "$status_line" | tr '[:upper:]' '[:lower:]')"
  if [ "$lower" = "done" ]; then
    board_status="Done"
  elif echo "$lower" | grep -qE "^not started"; then
    board_status="Backlog"
  else
    board_status="In Progress"
  fi

  url="$(gh issue list --repo "$REPO_NWO" --state all --search "\"$issue_title\" in:title" \
    --json title,url --jq ".[] | select(.title == \"$issue_title\") | .url" 2>/dev/null | head -n1 || true)"

  if [ -z "$url" ]; then
    echo "! $title: no matching issue found (run 'make board-tasks' first?)"
    continue
  fi

  if gh_retry "$title: Status" project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$url" \
    --field "Status" --value "$board_status"; then
    echo "✓ $title -> $board_status  (file says: \"$status_line\")"
  else
    echo "! $title: couldn't set Status"
  fi
  sleep 2
done
