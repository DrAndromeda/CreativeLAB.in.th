#!/usr/bin/env bash
#
# Creates a "type: task" issue from the command line — the scripted
# alternative to filing one through the GitHub UI (Issues -> New issue ->
# Task). Links it as a native GitHub sub-issue of its parent epic (shown
# as "Sub-issues progress" on the epic), adds it to the Project board,
# and sets Priority/Phase/Status.
#
# Usage:
#   ./scripts/create-task.sh --title "Add /ru/ routes" --epic 12 \
#       --priority P0 --phase 7 \
#       --body "Mirror the existing [hub]/[service] structure under /ru/."
#
# Required:  --title
# Optional:  --epic <issue-number>   (creates a native sub-issue link)
#            --priority P0|P1|P2     (default: none)
#            --phase 1-9             (default: none)
#            --body "..."            (default: empty)

set -euo pipefail

PROJECT_TITLE="${PROJECT_TITLE:-CreativeLAB Roadmap}"

TITLE=""
EPIC=""
PRIORITY=""
PHASE=""
BODY=""

while [ $# -gt 0 ]; do
  case "$1" in
    --title) TITLE="$2"; shift 2 ;;
    --epic) EPIC="$2"; shift 2 ;;
    --priority) PRIORITY="$2"; shift 2 ;;
    --phase) PHASE="$2"; shift 2 ;;
    --body) BODY="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

if [ -z "$TITLE" ]; then
  echo "Usage: ./scripts/create-task.sh --title \"...\" [--epic N] [--priority P0|P1|P2] [--phase 1-9] [--body \"...\"]" >&2
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Not logged in. Run 'gh auth login' first." >&2
  exit 1
fi

REPO_NWO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
OWNER="${REPO_NWO%%/*}"

labels=(--label "type: task")
case "$PRIORITY" in
  P0|P1|P2) labels+=(--label "priority: $PRIORITY") ;;
  "") ;;
  *) echo "Warning: --priority should be P0, P1 or P2 — got \"$PRIORITY\", skipping label." >&2 ;;
esac
if [ -n "$PHASE" ]; then
  labels+=(--label "phase: $PHASE")
fi

parent_args=()
if [ -n "$EPIC" ]; then
  parent_args=(--parent "$EPIC")
fi

echo "Creating task issue..."
ISSUE_URL="$(gh issue create --repo "$REPO_NWO" --title "[TASK] $TITLE" --body "$BODY" \
  "${labels[@]}" "${parent_args[@]}" --project "$PROJECT_TITLE")"
echo "+ $ISSUE_URL"

PROJECT_NUMBER="$(gh project list --owner "$OWNER" --format json --jq \
  ".projects[] | select(.title == \"$PROJECT_TITLE\") | .number" 2>/dev/null | head -n1 || true)"

if [ -n "${PROJECT_NUMBER:-}" ]; then
  if [ -n "$PRIORITY" ]; then
    gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$ISSUE_URL" \
      --field "Priority" --value "$PRIORITY" >/dev/null 2>&1 \
      && echo "  ✓ Priority = $PRIORITY" \
      || echo "  ! couldn't set Priority"
  fi
  if [ -n "$PHASE" ]; then
    gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$ISSUE_URL" \
      --field "Phase" --value "Phase $PHASE" >/dev/null 2>&1 \
      && echo "  ✓ Phase = Phase $PHASE" \
      || echo "  ! couldn't set Phase"
  fi
  gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$ISSUE_URL" \
    --field "Status" --value "Backlog" >/dev/null 2>&1 \
    && echo "  ✓ Status = Backlog" \
    || echo "  ! couldn't set Status (has the field been renamed yet? see docs/WORKFLOW.md)"
fi

if [ -n "$EPIC" ]; then
  echo "  ✓ linked as a sub-issue of #$EPIC"
fi
