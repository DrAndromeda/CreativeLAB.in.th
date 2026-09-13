#!/usr/bin/env bash
#
# One-shot fixup: sets the Status field for every open issue currently on
# the board. Meant to be run once, right after you've renamed the
# built-in Status field's options (see docs/WORKFLOW.md /
# github-bootstrap.sh) — issues created before that point silently failed
# to get a Status, since the option they needed didn't exist yet.
#
# Usage: ./scripts/backfill-status.sh [status-value]
#   Defaults to "Backlog". Only pass a different value if you really mean
#   to bulk-set every open issue to it — this does NOT check current
#   status, it overwrites.

set -euo pipefail

STATUS_VALUE="${1:-Backlog}"
PROJECT_TITLE="${PROJECT_TITLE:-CreativeLAB Roadmap}"

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

echo "Setting Status = \"$STATUS_VALUE\" for every open issue in $REPO_NWO..."
echo

gh issue list --repo "$REPO_NWO" --state open --limit 200 --json number,title,url \
  --jq '.[] | [.number, .url] | @tsv' |
while IFS=$'\t' read -r number url; do
  attempt=1
  while :; do
    err="$(gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$url" \
      --field "Status" --value "$STATUS_VALUE" 2>&1 >/dev/null)" || true

    if [ -z "$err" ]; then
      echo "✓ #$number"
      break
    fi

    if echo "$err" | grep -qi "rate limit" && [ "$attempt" -lt 4 ]; then
      wait_s=$((attempt * 5))
      echo "  (#$number rate-limited, retrying in ${wait_s}s...)"
      sleep "$wait_s"
      attempt=$((attempt + 1))
      continue
    fi

    echo "! #$number: $err"
    break
  done
  # Small pacing delay so we don't trip a secondary rate limit in the
  # first place when there are many issues.
  sleep 1
done
