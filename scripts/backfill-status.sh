#!/usr/bin/env bash
#
# One-shot fixup: sets the Status field for every OPEN issue currently in
# the repo. Meant to be run once, right after you've renamed the built-in
# Status field's options (see docs/WORKFLOW.md / github-bootstrap.sh) —
# issues created before that point silently failed to get a Status, since
# the option they needed didn't exist yet.
#
# This is NOT a safe "top up only what's missing" operation: it doesn't
# check each issue's current Status, it unconditionally overwrites it.
# Re-running it later (once some tasks have moved to In Progress/In Test)
# would reset all of them back to Backlog. That's why it prompts for
# confirmation below — pass FORCE=1 to skip the prompt (e.g. from CI).
#
# Usage: ./scripts/backfill-status.sh [status-value]
#   Defaults to "Backlog".

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

ISSUES_TSV="$(gh issue list --repo "$REPO_NWO" --state open --limit 200 \
  --json number,title,url --jq '.[] | [.number, .title, .url] | @tsv')"

if [ -z "$ISSUES_TSV" ]; then
  echo "No open issues found."
  exit 0
fi

COUNT="$(printf '%s\n' "$ISSUES_TSV" | wc -l | tr -d ' ')"

echo "This will set Status = \"$STATUS_VALUE\" for ALL $COUNT open issue(s) below,"
echo "overwriting whatever Status they currently have (e.g. In Progress, In Test):"
echo
printf '%s\n' "$ISSUES_TSV" | awk -F'\t' '{printf "  #%-4s %s\n", $1, $2}'
echo

if [ "${FORCE:-}" != "1" ]; then
  read -r -p "Continue? [y/N] " reply
  case "$reply" in
    y|Y|yes|YES) ;;
    *) echo "Aborted."; exit 1 ;;
  esac
fi
echo

printf '%s\n' "$ISSUES_TSV" |
while IFS=$'\t' read -r number title url; do
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
