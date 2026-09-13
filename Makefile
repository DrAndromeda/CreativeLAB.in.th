.DEFAULT_GOAL := help

.PHONY: help dev build start lint typecheck check \
        board-setup board-epics board-tasks board-backfill board-sync-status board-sync-tasks task-start task-new

help: ## Show this list of commands
	@echo "CreativeLAB.in.th — available commands"
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "See docs/HowTo.md for the full step-by-step process."

## --- App -------------------------------------------------------------

dev: ## Run the Next.js dev server — runs: npm run dev
	npm run dev

build: ## Production build — runs: npm run build
	npm run build

start: ## Serve the production build (run 'make build' first) — runs: npm run start
	npm run start

lint: ## Run ESLint — runs: npm run lint
	npm run lint

typecheck: ## Run the TypeScript compiler in check-only mode — runs: npx tsc --noEmit
	npx tsc --noEmit

check: lint typecheck build ## Mirrors CI — runs: make lint, typecheck, build in order

## --- GitHub Project board ---------------------------------------------

board-setup: ## One-time board setup (needs gh auth login -s project) — runs: scripts/github-bootstrap.sh
	./scripts/github-bootstrap.sh

board-epics: ## File an issue per docs/epics/EPIC-*.md not already created — runs: scripts/create-epic-issues.sh
	./scripts/create-epic-issues.sh

board-tasks: ## File an issue per docs/tasks/TASK-*.md, linked as sub-issues of the epic — runs: scripts/create-task-issues.sh
	./scripts/create-task-issues.sh

board-backfill: ## Set Status on every open issue (STATUS=... to override "Backlog") — runs: scripts/backfill-status.sh
	./scripts/backfill-status.sh $(STATUS)

board-sync-status: ## Push each epic .md file's Status line onto its board card — runs: scripts/sync-epic-status.sh
	./scripts/sync-epic-status.sh

board-sync-tasks: ## Push each task .md file's Status line onto its board card — runs: scripts/sync-task-status.sh
	./scripts/sync-task-status.sh

## --- Tasks --------------------------------------------------------------

task-new: ## File a task issue: TITLE="..." [EPIC=] [PRIORITY=] [PHASE=] [BODY=] — runs: scripts/create-task.sh
	@if [ -z "$(TITLE)" ]; then \
		echo 'Usage: make task-new TITLE="..." [EPIC=<n>] [PRIORITY=P0|P1|P2] [PHASE=1-9] [BODY="..."]' >&2; \
		exit 1; \
	fi
	./scripts/create-task.sh --title "$(TITLE)" \
		$(if $(EPIC),--epic $(EPIC)) \
		$(if $(PRIORITY),--priority $(PRIORITY)) \
		$(if $(PHASE),--phase $(PHASE)) \
		$(if $(BODY),--body "$(BODY)")

task-start: ## Branch+checkout+Status=In Progress for TASK=<issue-number> — runs: scripts/start-task.sh
	@if [ -z "$(TASK)" ]; then \
		echo "Usage: make task-start TASK=<issue-number>" >&2; \
		exit 1; \
	fi
	./scripts/start-task.sh $(TASK)
