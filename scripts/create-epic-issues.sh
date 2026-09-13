#!/usr/bin/env bash
#
# Creates one GitHub Issue per docs/epics/EPIC-*.md file (skipping any
# epic that already has an issue — matched by title) and adds each to the
# Project board from scripts/github-bootstrap.sh, with Priority/Phase set.
#
# Run scripts/github-bootstrap.sh first (needs the labels + board fields
# it creates). Prerequisite: gh auth login with the 'project' scope.
#
# Safe to re-run: skips any epic whose issue title already exists (open
# or closed) instead of creating a duplicate.

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
  echo "Project \"$PROJECT_TITLE\" not found — run ./scripts/github-bootstrap.sh first." >&2
  exit 1
fi

echo "Repo: $REPO_NWO"
echo "Project: #$PROJECT_NUMBER ($PROJECT_TITLE)"
echo

for file in "$EPICS_DIR"/EPIC-*.md; do
  [ -e "$file" ] || continue

  # First markdown heading becomes the issue title, e.g.
  # "# EPIC-001: Brand Shell + Design System" -> "EPIC-001: Brand Shell + Design System"
  title="$(grep -m1 '^# ' "$file" | sed 's/^# //')"
  if [ -z "$title" ]; then
    echo "skip $file (no '# ' heading found)"
    continue
  fi

  priority="$(grep -m1 '\*\*Priority:\*\*' "$file" | sed -E 's/.*Priority:\*\* *//' | tr -d '\r')"
  phase_num="$(grep -m1 '\*\*Phase:\*\*' "$file" | grep -oE '[0-9]+' | head -n1)"

  existing="$(gh issue list --repo "$REPO_NWO" --state all --search "\"$title\" in:title" \
    --json title --jq ".[] | select(.title == \"$title\") | .title" 2>/dev/null | head -n1 || true)"

  if [ -n "$existing" ]; then
    echo "= $title (issue already exists — skipping)"
    continue
  fi

  labels=("type: epic")
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

  epic_file_name="$(basename "$file")"
  body="$(cat "$file")

---
Full spec: https://github.com/$REPO_NWO/blob/main/docs/epics/$epic_file_name"

  issue_url="$(gh issue create --repo "$REPO_NWO" --title "$title" --body "$body" "${label_args[@]}")"
  echo "+ $title"
  echo "  $issue_url"

  gh project item-add "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" >/dev/null
  echo "  ✓ added to project"

  if [ -n "$priority" ]; then
    gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
      --field "Priority" --value "$priority" >/dev/null 2>&1 \
      && echo "  ✓ Priority = $priority" \
      || echo "  ! couldn't set Priority (does the field/option exist on the board?)"
  fi

  if [ -n "${phase_num:-}" ]; then
    gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
      --field "Phase" --value "Phase $phase_num" >/dev/null 2>&1 \
      && echo "  ✓ Phase = Phase $phase_num" \
      || echo "  ! couldn't set Phase (does the field/option exist on the board?)"
  fi

  # Only attempt this if you've already done the manual Status-field
  # rename step in scripts/github-bootstrap.sh's printed instructions —
  # otherwise "Backlog" won't exist as an option yet, and this no-ops.
  gh project item-edit "$PROJECT_NUMBER" --owner "$OWNER" --url "$issue_url" \
    --field "Status" --value "Backlog" >/dev/null 2>&1 \
    && echo "  ✓ Status = Backlog" \
    || echo "  ! couldn't set Status to Backlog (rename the board's Status options first — see github-bootstrap.sh)"
done

echo
echo "Done."
