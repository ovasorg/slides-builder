# Project State

Last updated: 2026-06-30

## Purpose

This repository builds, validates, versions, and publishes presentation decks as
code. It is designed for an agent role called `slides-builder`, whose job is to
turn prompts into polished decks with a local brief, shared speaker data,
consistent style, reusable components, organized assets, validation, release
packaging, and GitHub Pages deployment.

## Current State

- Engine: Slidev.
- Authoring: Markdown with Vue components.
- Decks: `platform-engineering-that-teams-actually-adopt` and
  `component-showcase`.
- Default visual language: light enterprise-tech, subtle grid, gradients,
  product-like surfaces, and intentional motion.
- Home page: `scripts/deck.mjs` generates `dist/index.html` as a deck gallery
  with title and description from frontmatter plus `dist/previews/*.png`
  screenshots captured from each built deck's first slide.
- Deployment: manual GitHub Actions workflow with `all`, known deck slugs, and
  `custom`.
- Release: manual GitHub Actions workflow with SemVer, annotated tags, and
  `slides-builder-<version>.tgz` source packages.
- PPTX export: supported as static snapshots only; native PowerPoint
  animations are not a repository deliverable.
- Shared speaker data: `data/speaker/speaker.json`.
- Shared components: `shared/components/`.
- 3D dependency: `three`.
- Chart dependency: `echarts`.
- Diagram dependency: `mermaid`.

## Architecture

```text
.
├── data/
│   ├── person.js
│   └── speaker/
│       ├── README.md
│       ├── speaker.json
│       ├── person.js
│       └── linkedin-qr.svg
├── decks/
│   ├── _template/
│   ├── component-showcase/
│   ├── component-showcase/
│   └── platform-engineering-that-teams-actually-adopt/
├── docs/
│   ├── adr/
│   ├── component-catalog.md
│   ├── deck-brief-template.md
│   ├── deck-generation-workflow.md
│   ├── new-deck-agent-guide.md
│   ├── project-state.md
│   ├── pptx-export-limits.md
│   ├── release-workflow.md
│   ├── slide-guidelines.md
│   └── style-catalog.md
├── scripts/
│   ├── deck.mjs
│   ├── release.mjs
│   └── validate-agent-assets.mjs
├── shared/
│   ├── components/
│   └── styles/
├── .agents/
│   └── skills/
├── .github/
│   ├── agents/
│   │   └── slides-builder.agent.md
│   ├── workflows/
│   │   ├── deploy.yml
│   │   └── release.yml
│   └── copilot-instructions.md
├── CONTRIBUTING.md
├── Makefile
├── README.md
└── AGENTS.md
```

## Modular Principles

- Each deck lives under `decks/<slug>/`.
- Each new deck must have `decks/<slug>/deck.brief.md`.
- Stable personal data lives in `data/speaker/speaker.json`.
- Shared personal assets live in `data/speaker/`.
- Deck-owned media lives in `decks/<slug>/public/media/`.
- Base style lives in `shared/styles/theme.css`.
- Palettes live in `shared/styles/palettes.css` and are applied with
  `palette-*` classes.
- Generic visual components live in `shared/components/`.
- Deck-specific components live in `decks/<slug>/components/`.
- Reusable decisions live in `docs/slide-guidelines.md`,
  `docs/component-catalog.md`, and ADRs.
- Prompt-driven generation rules live in
  `docs/deck-generation-workflow.md` and `docs/deck-brief-template.md`.
- Release rules live in `docs/release-workflow.md` and
  `.github/workflows/release.yml`.
- Contribution rules live in `CONTRIBUTING.md` and
  `.github/PULL_REQUEST_TEMPLATE.md`.
- PPTX export limits live in `docs/pptx-export-limits.md`.

## Shared Speaker Data

`data/speaker/speaker.json` is the canonical editable source for stable speaker
information: name, headline, organization, location, public profiles, reusable
roles, tags, and nominal asset references.

`data/speaker/person.js` connects the JSON with Vite asset imports such as
`linkedin-qr.svg`.

Decks may define `decks/<slug>/data/speaker.js` for talk-specific overrides,
but should import `person` from `data/speaker/person.js` and override only what
is specific to the talk.

## Visual System

The shared visual system includes:

- light default background with subtle grid;
- gradient headline typography;
- 8px-radius panels and cards;
- semantic accents: blue, green, amber, rose, purple, cyan;
- styled native Slidev navigation;
- `v-motion` entrance animation patterns;
- `TypingTitle` for selected title reveals;
- palettes documented in `docs/style-catalog.md`.

`palette-crystal` is the default for `decks/_template`,
`decks/component-showcase`, and new decks without explicit visual direction.
Dark palettes are deliberate alternatives, not defaults.

## Current Shared Components

The reusable catalog includes speaker profiles, title effects, topology maps,
grids, radars, maturity curves, SVG diagrams, Mermaid wrappers, ECharts,
media frames, mockups, tables, matrices, trees, icon grids, timelines,
swimlanes, pyramids, Venn diagrams, callouts, quotes, architecture layers, and
Three.js stages.

See `docs/component-catalog.md` for the authoritative list and rules.

## Deployment

`.github/workflows/deploy.yml` publishes GitHub Pages. GitHub Pages must be
enabled once in **Settings > Pages** with source **GitHub Actions**.

Manual targets:

- `all`: publish every deck.
- `component-showcase`: publish the catalog reference deck.
- `platform-engineering-that-teams-actually-adopt`: publish the platform
  engineering example talk.
- `custom`: provide a slug through `custom_deck`.

When a new deck becomes stable, add its slug to the workflow dropdown.

## Release

`.github/workflows/release.yml` publishes source packages as GitHub Releases.

Manual release process:

1. Run `npm run release:prepare -- <version>`.
2. Run `make release-check VERSION=<version>`.
3. Run `make build-all`.
4. Commit and push.
5. Run **Release Package** with the same version.

The workflow creates `v<version>` and attaches
`slides-builder-<version>.tgz`.

## Validation Baseline

- `node --check scripts/deck.mjs`
- `node --check scripts/release.mjs`
- `make check DECK=<slug>`
- `make build-all` for shared, workflow, release, or cross-deck changes
- Browser screenshots for visual changes

Known build warnings from Rolldown may mention `#__PURE__` annotations in
`@vueuse/core`; they do not fail the build.

## Active Maintenance Notes

- Keep all human and agent documentation in English.
- Keep `component-showcase` brand-neutral.
- Keep GitHub-specific components inside the GitHub deck unless generalized.
- Keep the deploy workflow dropdown aligned with stable decks.
- Keep release packaging separate from GitHub Pages deployment.
