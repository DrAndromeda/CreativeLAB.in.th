#!/usr/bin/env bash
#
# Creates one GitHub Issue per docs/tasks/TASK-*.md file (skipping any
# task that already has an issue — matched by title), linked as a native
# GitHub sub-issue of the repo's one epic, and adds each to the Project
# board with Priority/Phase/Status set. Mirrors create-epic-issues.sh
# exactly, one level down.
#
# These are meant to be LARGE tasks — each representing a real work
# session, not a micro-step (see docs/tasks/README.md). Most day-to-day
# small tasks don't need a committed file at all; use `make task-new` or
# the GitHub UI directly for those.
#
# Run scripts/github-bootstrap.sh and scripts/create-epic-issues.sh first.
#
# Safe to re-run: skips any task whose issue title already exists.
#
# Usage: ./scripts/create-task-issues.sh [--epic <issue-number>]
#   Without --epic, auto-detects: this workflow expects exactly one open
#   "type: epic" issue (one proposal = one epic). If there's zero or more
#   than one, pass --epic explicitly.

set -euo pipefail

# shellcheck source=lib/gh-retry.sh
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/lib/gh-retry.sh"

PROJECT_TITLE="${PROJECT_TITLE:-CreativeLAB Roadmap}"
TASKS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/docs/tasks"

EPIC=""
while [ $# -gt 0 ]; do
  case "$1" in
    --epic) EPIC="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

if ! gh auth status >/dev/null 2>&1; then
  echo "Not logged in. Run 'gh auth login' first." >&2
  exit 1
fi

REPO_NWO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
OWNER="${REPO_NWO%%/*}"

PROJECT_NUMBER="$(gh project list --owner "$OWNER" --format json --jq \
  ".projects[] | select(.title == \"$PROJECT_TITLE\") | .number" 2>/dev/null | head -n1 || true)"

if [ -z "${PROJECT_NUMBER:-}" ]; then
  echo "Project \"$PROJECT_TITLE\" not found — run ./scripts/github-bootstrap.sh first." >&2
  exit 1
fi

if [ -z "$EPIC" ]; then
  epic_issues="$(gh issue list --repo "$REPO_NWO" --state open --label "type: epic" --json number --jq '.[].number')"
  epic_count="$(printf '%s\n' "$epic_issues" | grep -c . || true)"
  if [ "$epic_count" -eq 0 ]; then
    echo "No open 'type: epic' issue found. Run 'make board-epics' first, or pass --epic <n>." >&2
    exit 1
  elif [ "$epic_count" -gt 1 ]; then
    echo "More than one open 'type: epic' issue found — this workflow expects exactly one (one proposal = one epic). Pass --epic <n> to pick which one these tasks belong to:" >&2
    printf '%s\n' "$epic_issues" >&2
    exit 1
  fi
  EPIC="$epic_issues"
  echo "Auto-detected epic: #$EPIC"
fi

echo "Repo: $REPO_NWO"
echo "Project: #$PROJECT_NUMBER ($PROJECT_TITLE)"
echo "Epic: #$EPIC"
echo

for file in "$TASKS_DIR"/TASK-*.md; do
  [ -e "$file" ] || continue

  title="$(grep -m1 '^# ' "$file" | sed 's/^# //')"
  if [ -z "$title" ]; then
    echo "skip $file (no '# ' heading found)"
    continue
  fi

  issue_title="[TASK] $title"

  priority="$(grep -m1 '\*\*Priority:\*\*' "$file" | sed -E 's/.*Priority:\*\* *//' | tr -d '\r')"
  phase_num="$(grep -m1 '\*\*Phase:\*\*' "$file" | grep -oE '[0-9]+' | head -n1 || true)"
  status_line="$(grep -m1 '\*\*Status:\*\*' "$file" | sed -E 's/.*Status:\*\* *//' | tr -d '\r')"

  board_status="Backlog"
  if [ -n "$status_line" ]; then
    lower="$(echo "$status_line" | tr '[:upper:]' '[:lower:]')"
    if [ "$lower" = "done" ]; then
      board_status="Done"
    elif echo "$lower" | grep -q "not started"; then
      board_status="Backlog"
    else
      board_status="In Progress"
    fi
  fi

  existing="$(gh issue list --repo "$REPO_NWO" --state all --search "\"$issue_title\" in:title" \
    --json title --jq ".[] | select(.title == \"$issue_title\") | .title" 2>/dev/null | head -n1 || true)"

  if [ -n "$existing" ]; then
    echo "= $title (issue already exists — skipping)"
    continue
  fi

  labels=("type: task")
  case "$priority" in
    P0|P1|P2) labels+=("priority: $priority") ;;
  esac
  if [ -n "${phase_num:-}" ]; then
    labels+=("phase: $phase_num")
  fi

  label_args=()
  for l in "${labels[@]}"; do
    label_args+=(--label "$l")
  done

  task_file_name="$(basename "$file")"
  body="$(cat "$file")

---
Full spec: https://github.com/$REPO_NWO/blob/main/docs/tasks/$task_file_name
Parent epic: #$EPIC"

  issue_url="$(gh issue create --repo "$REPO_NWO" --title "$issue_title" --body "$body" --parent "$EPIC" "${label_args[@]}")"
  echo "+ $title"
  echo "  $issue_url (sub-issue of #$EPIC)"

  gh_retry "$title: add to project" project item-add "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
    && echo "  ✓ added to project" \
    || echo "  ! couldn't add to project"
  sleep 2

  if [ -n "$priority" ]; then
    gh_retry "$title: Priority" project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
      --field "Priority" --value "$priority" \
      && echo "  ✓ Priority = $priority" \
      || echo "  ! couldn't set Priority (does the field/option exist on the board?)"
    sleep 2
  fi

  if [ -n "${phase_num:-}" ]; then
    gh_retry "$title: Phase" project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
      --field "Phase" --value "Phase $phase_num" \
      && echo "  ✓ Phase = Phase $phase_num" \
      || echo "  ! couldn't set Phase (does the field/option exist on the board?)"
    sleep 2
  fi

  gh_retry "$title: Status" project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
    --field "Status" --value "$board_status" \
    && echo "  ✓ Status = $board_status" \
    || echo "  ! couldn't set Status (rename the board's Status options first — see github-bootstrap.sh)"
  sleep 2
done

echo
echo "Done."
