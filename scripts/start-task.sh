#!/usr/bin/env bash
#
# Starts work on an issue: creates a linked branch (GitHub's native
# issue<->branch link, shown in the issue's "Development" panel), checks
# it out locally, and moves the board item's Status to "In Progress".
#
# GitHub doesn't support the reverse direction (dragging a card to
# "In Progress" automatically creating a branch) — Project automations
# only react to issue/PR events, they can't trigger git operations. This
# script is the practical equivalent: one command does both sides.
#
# Usage: ./scripts/start-task.sh <issue-number>

set -euo pipefail

ISSUE_NUMBER="${1:?Usage: ./scripts/start-task.sh <issue-number>}"
PROJECT_TITLE="${PROJECT_TITLE:-CreativeLAB Roadmap}"

if ! gh auth status >/dev/null 2>&1; then
  echo "Not logged in. Run 'gh auth login' first." >&2
  exit 1
fi

REPO_NWO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
OWNER="${REPO_NWO%%/*}"
ISSUE_URL="https://github.com/$REPO_NWO/issues/$ISSUE_NUMBER"

TITLE="$(gh issue view "$ISSUE_NUMBER" --repo "$REPO_NWO" --json title -q .title)"
SLUG="$(echo "$TITLE" \
  | sed -E 's/^\[(TASK|EPIC|BUG)\] *//i' \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//' \
  | cut -c1-40)"
BRANCH="task/${ISSUE_NUMBER}-${SLUG}"

echo "Issue #$ISSUE_NUMBER: $TITLE"
echo "Creating linked branch: $BRANCH"
gh issue develop "$ISSUE_NUMBER" --repo "$REPO_NWO" --name "$BRANCH" --checkout

PROJECT_NUMBER="$(gh project list --owner "$OWNER" --format json --jq \
  ".projects[] | select(.title == \"$PROJECT_TITLE\") | .number" 2>/dev/null | head -n1 || true)"

if [ -n "${PROJECT_NUMBER:-}" ]; then
  gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$ISSUE_URL" \
    --field "Status" --value "In Progress" >/dev/null 2>&1 \
    && echo "✓ Board status = In Progress" \
    || echo "! couldn't set Status (has the field's options been renamed yet? see docs/WORKFLOW.md)"
else
  echo "! project \"$PROJECT_TITLE\" not found — skipped board update"
fi

echo
echo "Ready. When you open the PR, put this in its description:"
echo "  Closes #$ISSUE_NUMBER"
