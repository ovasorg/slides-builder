# Contributing

Pull requests are welcome.

This repository is meant to stay useful for humans and for the `slides-builder`
agent role. Contributions should preserve that goal: clear structure, reusable
components, local assets, documented decisions, and validation evidence.

## Before Opening A Pull Request

1. Read `README.md`, `AGENTS.md`, and the relevant docs under `docs/`.
2. Keep changes scoped. Avoid unrelated rewrites.
3. Use the existing deck/component/style patterns before adding new ones.
4. Keep all repository documentation and reusable component defaults in English.
5. Do not commit generated output such as `dist`, `.slidev`, exported PDFs, or
   PPTX files.

## Quality Gates

Run the smallest relevant checks before opening a PR:

```bash
node --check scripts/deck.mjs
node --check scripts/release.mjs
make check DECK=<changed-deck>
```

Run the full build when a change touches shared components, shared styles,
scripts, workflows, release behavior, or docs that affect repo usage:

```bash
make build-all
```

For visual changes, include screenshots or notes covering at least:

- cover slide,
- one dense/internal slide,
- one slide with media, Mermaid, ECharts, 3D, or mockups if applicable,
- navigation visibility.

## Pull Request Checklist

- [ ] The change is scoped and documented.
- [ ] Reusable docs are in English.
- [ ] New or changed components are reflected in `docs/component-catalog.md`.
- [ ] New or changed palettes are reflected in `docs/style-catalog.md`.
- [ ] `component-showcase` is updated when the reusable catalog changes.
- [ ] Deck-owned media is stored under `decks/<slug>/public/media/`.
- [ ] `make check DECK=<slug>` or `make build-all` passes.
- [ ] PPTX expectations are treated as static snapshots, not native PowerPoint
      animations.

## Commit Style

Use concise conventional-style commit messages when practical:

- `feat: add reusable chart pattern`
- `fix: improve deck visual contrast`
- `docs: clarify deck generation workflow`
- `release: slides-builder v1.0.0`

## Review Focus

Reviews should prioritize:

- broken builds,
- clipped or low-contrast slides,
- reusable components that are too product-specific,
- undocumented workflow changes,
- remote asset dependencies,
- PowerPoint-export expectations that cannot be supported by static PPTX output.
