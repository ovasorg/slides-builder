# Slides Builder

[![Deploy Slides](https://github.com/ovasorg/slides-builder/actions/workflows/deploy.yml/badge.svg)](https://github.com/ovasorg/slides-builder/actions/workflows/deploy.yml)
[![Release Package](https://github.com/ovasorg/slides-builder/actions/workflows/release.yml/badge.svg)](https://github.com/ovasorg/slides-builder/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Slidev](https://img.shields.io/badge/Slidev-52.15.2-2B90B6.svg)](https://sli.dev)

Open-source Slidev workspace for building presentation decks as code with
reusable components, agent-friendly specs, local assets, and GitHub Pages
deployment.

Use this repository as the master template. Fork it for personal or team decks;
keep this upstream generic.

## What's Included

- `decks/_template`: starting point for new talks.
- `decks/component-showcase`: visual catalog and component reference.
- `decks/platform-engineering-that-teams-actually-adopt`: example talk.
- `shared/components`: reusable Vue/Slidev components.
- `.agents/skills`: reusable agent workflows for triage, generation, QA, and TDD.
- `.github/workflows`: deploy and release automation.

## Quick Start

```bash
npm install
make list
make dev DECK=platform-engineering-that-teams-actually-adopt
make check DECK=platform-engineering-that-teams-actually-adopt
make build-all
```

Common exports:

```bash
make pdf DECK=<slug>
make pptx DECK=<slug>
```

PPTX exports are static snapshots; use hosted Slidev for live motion.

## Create A Deck

1. Start from `decks/_template`.
2. Record the brief in `decks/<slug>/deck.brief.md`.
3. Store deck media in `decks/<slug>/public/media/`.
4. Reuse shared components before creating deck-local ones.
5. Run `make check DECK=<slug>` before handoff.

Required prompt inputs for agent-assisted decks:

- title/topic
- audience and level
- duration
- desired outcome
- required points
- tone/context
- constraints
- available assets
- visual mode: light, dark, or black/keynote

## Repository Map

```text
decks/                 Slidev decks
shared/components/     reusable visual components
shared/styles/         theme and palettes
data/speaker/          generic speaker data placeholder
docs/                  workflow, style, release, and component guidance
scripts/deck.mjs       multi-deck dev/build/export wrapper
AGENTS.md              canonical agent instructions
```

## Documentation

- [Agent specification](AGENTS.md)
- [New deck guide](docs/new-deck-agent-guide.md)
- [Deck workflow](docs/deck-generation-workflow.md)
- [Component catalog](docs/component-catalog.md)
- [Style catalog](docs/style-catalog.md)
- [Slide guidelines](docs/slide-guidelines.md)
- [Release workflow](docs/release-workflow.md)

## Template Rule

Keep this repository reusable. Personal talks, private assets, speaker CV
details, and organization-specific content belong in downstream forks.
