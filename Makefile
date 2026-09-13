.DEFAULT_GOAL := help

.PHONY: help dev build start lint typecheck check \
        board-setup board-epics board-backfill board-sync-status task-start task-new

help: ## Show this list of commands
	@echo "CreativeLAB.in.th — available commands"
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "See docs/HowTo.md for the full step-by-step process."

## --- App -------------------------------------------------------------

dev: ## Run the Next.js dev server
	npm run dev

build: ## Production build
	npm run build

start: ## Serve the production build (run 'make build' first)
	npm run start

lint: ## Run ESLint
	npm run lint

typecheck: ## Run the TypeScript compiler in check-only mode
	npx tsc --noEmit

check: lint typecheck build ## Run lint + typecheck + build (mirrors CI)

## --- GitHub Project board ---------------------------------------------

board-setup: ## One-time: create labels + the Project board (needs gh auth login -s project)
	./scripts/github-bootstrap.sh

board-epics: ## Create a GitHub Issue for each docs/epics/EPIC-*.md not already filed
	./scripts/create-epic-issues.sh

board-backfill: ## Set Status on every open issue (default Backlog; STATUS=... to override)
	./scripts/backfill-status.sh $(STATUS)

board-sync-status: ## Sync each epic issue's board Status from its docs/epics/*.md "**Status:**" line
	./scripts/sync-epic-status.sh

## --- Tasks --------------------------------------------------------------

task-new: ## File a new task issue. Usage: make task-new TITLE="..." [EPIC=12] [PRIORITY=P0] [PHASE=3] [BODY="..."]
	@if [ -z "$(TITLE)" ]; then \
		echo 'Usage: make task-new TITLE="..." [EPIC=<n>] [PRIORITY=P0|P1|P2] [PHASE=1-9] [BODY="..."]' >&2; \
		exit 1; \
	fi
	./scripts/create-task.sh --title "$(TITLE)" \
		$(if $(EPIC),--epic $(EPIC)) \
		$(if $(PRIORITY),--priority $(PRIORITY)) \
		$(if $(PHASE),--phase $(PHASE)) \
		$(if $(BODY),--body "$(BODY)")

task-start: ## Start work on an issue: creates+checks out its branch, sets Status=In Progress. Usage: make task-start TASK=42
	@if [ -z "$(TASK)" ]; then \
		echo "Usage: make task-start TASK=<issue-number>" >&2; \
		exit 1; \
	fi
	./scripts/start-task.sh $(TASK)
