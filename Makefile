DECK ?= github-enterprise-platform
PORT ?= 4100
VERSION ?= 0.1.0

.PHONY: help install list dev build build-all pdf pptx clean check release-check package

help:
	@echo "Slides repo commands"
	@echo ""
	@echo "  make install          Install dependencies"
	@echo "  make list             List available decks"
	@echo "  make dev              Run selected deck locally, correcting close typos and freeing PORT if needed"
	@echo "  make build            Build selected deck"
	@echo "  make build-all        Build all decks"
	@echo "  make pdf              Export selected deck to PDF"
	@echo "  make pptx             Export selected deck to PPTX"
	@echo "  make check            Validate agent assets, syntax-check scripts, and build selected deck"
	@echo "  make release-check    Validate release metadata for VERSION"
	@echo "  make package          Create source package for VERSION"
	@echo "  make clean            Remove generated outputs"
	@echo ""
	@echo "Variables:"
	@echo "  DECK=$(DECK)"
	@echo "  PORT=$(PORT)"
	@echo "  VERSION=$(VERSION)"

install:
	npm install

list:
	npm run list

dev:
	PORT=$(PORT) npm run dev -- $(DECK)

build:
	npm run build -- $(DECK)

build-all:
	npm run build:all

pdf:
	npm run export:pdf -- $(DECK)

pptx:
	npm run export:pptx -- $(DECK)

check:
	node --check scripts/deck.mjs
	node --check scripts/release.mjs
	node --check scripts/validate-agent-assets.mjs
	npm run check:agent
	npm run build -- $(DECK)

release-check:
	npm run release:check -- $(VERSION)

package:
	npm run package -- $(VERSION)

clean:
	rm -rf dist decks/*/.slidev-dist .slidev
