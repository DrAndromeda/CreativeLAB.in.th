#!/usr/bin/env bash
#
# Syncs each epic issue's board Status from its docs/epics/EPIC-*.md
# "**Status:**" line. Run this whenever you update that line (e.g. an
# epic goes from "Not started" to "Partial") instead of also having to
# remember to drag the card on the board by hand.
#
# Mapping (simple heuristic on the Status line's text):
#   "Done"                                  -> Done
#   contains "not started"                  -> Backlog
#   anything else (Partial, Mostly done,
#     Initial check done, In progress, ...) -> In Progress
#
# Matches epic files to issues by exact title, same as
# create-epic-issues.sh — so an epic needs to have been filed as an
# issue already (run that first if this reports "no matching issue").
#
# Usage: ./scripts/sync-epic-status.sh

set -euo pipefail

PROJECT_TITLE="${PROJECT_TITLE:-CreativeLAB Roadmap}"
EPICS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/docs/epics"

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

for file in "$EPICS_DIR"/EPIC-*.md; do
  [ -e "$file" ] || continue

  title="$(grep -m1 '^# ' "$file" | sed 's/^# //')"
  [ -n "$title" ] || continue

  status_line="$(grep -m1 '\*\*Status:\*\*' "$file" | sed -E 's/.*Status:\*\* *//' | tr -d '\r')"
  if [ -z "$status_line" ]; then
    echo "skip: $title (no **Status:** line found)"
    continue
  fi

  lower="$(echo "$status_line" | tr '[:upper:]' '[:lower:]')"
  if [ "$lower" = "done" ]; then
    board_status="Done"
  elif echo "$lower" | grep -q "not started"; then
    board_status="Backlog"
  else
    board_status="In Progress"
  fi

  url="$(gh issue list --repo "$REPO_NWO" --state all --search "\"$title\" in:title" \
    --json title,url --jq ".[] | select(.title == \"$title\") | .url" 2>/dev/null | head -n1 || true)"

  if [ -z "$url" ]; then
    echo "! $title: no matching issue found (run 'make board-epics' first?)"
    continue
  fi

  err="$(gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$url" \
    --field "Status" --value "$board_status" 2>&1 >/dev/null)" || true

  if [ -z "$err" ]; then
    echo "✓ $title -> $board_status  (file says: \"$status_line\")"
  else
    echo "! $title: $err"
  fi
  sleep 1
done
