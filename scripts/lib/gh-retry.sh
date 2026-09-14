#!/usr/bin/env bash
#
# Shared retry-with-backoff for `gh project item-add`/`item-edit` calls.
# GraphQL's secondary rate limit trips easily under rapid successive
# mutations — this repo has hit it repeatedly (see docs/WORKFLOW.md /
# git history), most recently after ~20 item-edit calls in one run with
# no pacing at all. Source this file, don't execute it directly.
#
# Usage: gh_retry "<description for log lines>" <gh args...>
#   e.g. gh_retry "epic #5 Status" project item-edit "$PROJECT_NUMBER" \
#          --owner "$OWNER" --url "$url" --field "Status" --value "Done"

gh_retry() {
  local desc="$1"; shift
  local attempt=1
  local err
  while :; do
    if err="$(gh "$@" 2>&1 >/dev/null)"; then
      return 0
    fi
    if echo "$err" | grep -qi "rate limit" && [ "$attempt" -lt 5 ]; then
      local wait_s=$((attempt * 5))
      echo "  ($desc rate-limited, retrying in ${wait_s}s...)" >&2
      sleep "$wait_s"
      attempt=$((attempt + 1))
      continue
    fi
    echo "$err" >&2
    return 1
  done
}
