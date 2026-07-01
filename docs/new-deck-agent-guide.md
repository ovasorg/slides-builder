# New Deck Guide For Slides-builder

This guide defines how `slides-builder` turns a prompt into a new presentation.
`slides-builder` is a vendor-neutral agent role: any capable coding agent can
perform it by reading this repository, editing files, and running validation.

## Objective

Create polished decks from the first iteration: modular structure, shared
speaker data, consistent style, reusable components, local assets, intentional
motion, and GitHub Pages deployment readiness.

## How Users Should Interact With Slides-builder

The user should provide the talk goal and all available context. The agent may
advance with reasonable assumptions only when non-critical information is
missing. If audience, duration, desired outcome, constraints, required points,
or visual mode are missing, the agent must ask all known clarification
questions before scaffolding or implementation starts.

## Context To Read First

```text
AGENTS.md
docs/project-state.md
docs/component-catalog.md
docs/style-catalog.md
docs/slide-guidelines.md
docs/deck-generation-workflow.md
docs/deck-brief-template.md
docs/adr/0001-spec-kit-lightweight-deck-generation.md
README.md
```

If the new deck resembles an existing one, also inspect:

```text
decks/_template/slides.md
decks/component-showcase/slides.md
decks/platform-engineering-that-teams-actually-adopt/slides.md
decks/platform-engineering-that-teams-actually-adopt/components/
shared/components/
shared/styles/theme.css
shared/styles/palettes.css
```

## Required Intake

Critical fields:

- talk title,
- topic,
- audience,
- audience level,
- duration,
- main objective,
- required points,
- tone,
- technical constraints,
- background mode.

Non-critical fields that may be inferred and documented:

- available assets,
- suggested asset policy,
- expected deliverables,
- deployment expectation,
- slug,
- palette.

## Workflow

1. Read `docs/deck-generation-workflow.md`.
2. Use `.agents/skills/slide-spec-triage/SKILL.md` to validate the user's
   specification before creating files.
3. Ask all known clarification questions before execution starts. Group
   critical gaps into at most three concise questions; infer non-critical
   details and record assumptions instead of pausing later.
4. Complete intake from the prompt, triage answers, and documented assumptions.
5. Define a URL-friendly slug.
6. Create `decks/<slug>/deck.brief.md` from
   `docs/deck-brief-template.md`.
7. Record requirements, assumptions, narrative plan, asset plan, and validation
   plan in the brief.
8. Copy or adapt `decks/_template/`.
9. Replace lorem ipsum with real deck narrative.
10. Create or adjust `decks/<slug>/styles/index.css` importing the shared theme.
11. Choose a palette from `docs/style-catalog.md` and apply it in `class` and
   `defaults.class`.
12. Include the required structural slides: title/cover, data-driven speaker
    profile, and final close/Q&A.
13. Create `decks/<slug>/data/speaker.js` for talk-specific speaker roles or
    tags, importing `person` from `data/speaker/person.js`.
14. Reuse `shared/components/` before creating new components.
15. Create wrappers for shared components used from Markdown.
16. Choose visuals from the catalog: mockup, metric, table, matrix, hierarchy,
    graph, sequence, timeline, swimlane, media, quote, layers, 3D, Mermaid, or
    ECharts.
17. For editorial, keynote, teaching, storytelling, strategy, or
    human-centered decks, include purposeful image-bearing slides unless the
    brief explicitly bans images.
18. Whenever a slide needs an image, or the visual direction above applies,
    search proactively for SVG Repo icons and editorial images from Pexels,
    Unsplash, Pixabay, Wikimedia Commons, or similar sources. Choose a distinct
    source image for each distinct slide role unless the brief intentionally
    calls for a repeated motif. Download everything into
    `decks/<slug>/public/media/` and record source/license notes.
19. Use `TypingTitle` only on covers or key section breaks.
20. Aim for 24-32 slides for a 30-minute talk unless the brief says otherwise.
21. Validate with `make check DECK=<slug>`.
22. Inspect screenshots of every slide and visible click/state at 1440x900.
    Confirm at least the cover, speaker profile, section breaks, dense slides,
    media/mockup/chart slides, closing, Q&A, and navigation have no overlap,
    clipping, unreadable contrast, or section markers that look like render
    artifacts.
23. Capture Slidev overview too when thumbnails show or previously showed
    clipped or overlapping content.
24. Update `deck.brief.md` with final handoff notes.
25. Add the stable deck slug to the **Deploy Slides** workflow dropdown.
26. Update README and catalogs when reusable components, styles, or workflows
    change.

## ECharts Criteria

Prefer `EChart` when a slide needs precise visual comparison, weighted
relationships, numeric scale, or transitions that tell the change.

Recommended patterns:

- Combo bar/line: trend, quality vs volume, coverage by phase.
- Sankey: dependency or weighted flow.
- Funnel: conversion or drop-off by stage.
- Radar: capability gap, current vs target.
- Heatmap: prioritization, risk, effort/impact, domain coverage.
- Treemap: weighted hierarchy, ownership, budget, inventory.
- Gauge: one primary readiness or status metric.
- Graphic: stroke, loaders, waves, overlays, or custom microinteractions.

Rules:

- Declare animation only when it adds narrative value.
- Use `sequence` for real state transitions.
- Default to `sequenceTrigger="enter"` so animation starts on slide entry and
  ends in a static readable state.
- Avoid loops in content charts, especially gauges.
- Keep labels short and put long context in `caption` or `insights`.
- Validate in browser because ECharts renders at runtime.
- Do not promise native PowerPoint animations from ECharts. PPTX export is a
  static snapshot deliverable.

## Base Prompt

```text
Create a new deck in this repository.

Topic:
<topic>

Title:
<title>

Audience:
<audience>

Level:
<beginner | intermediate | advanced>

Duration:
<minutes>

Objective:
<what the audience should understand or do by the end>

Required points:
- <point 1>
- <point 2>
- <point 3>

Tone:
<technical, executive, workshop, demo, community talk, etc.>

Constraints:
<projector, internet, no screenshots, official sources, etc.>

Available assets:
<images, QR, screenshots, logos, none>

Suggested assets:
<SVG Repo icons, Pexels/Unsplash/Pixabay images, own screenshots, none>

Suggested slug:
<slug>

Suggested palette:
<palette-crystal | palette-aurora | palette-lab | palette-sunset | palette-mono | palette-carbon | palette-citrus | palette-orchid>

Use the repository architecture, reuse catalog components, keep the default
enterprise-tech style light unless the brief says otherwise, create
deck.brief.md, and leave the deck ready for make check.
```

## Definition Of Done

A new deck is ready when:

- it exists under `decks/<slug>/`;
- it has `deck.brief.md` with requirements, assumptions, and validation;
- it runs with `make dev DECK=<slug>`;
- it passes `make check DECK=<slug>`;
- it includes title/cover, data-driven speaker profile, and final close/Q&A
  slides;
- it uses catalog components or documented patterns;
- it has no clipped text at 1440x900;
- essential rendering works offline;
- transitions and animations are consistent;
- PPTX deliverables are readable as static snapshots;
- it can be deployed through GitHub Pages;
- the stable slug is in `.github/workflows/deploy.yml`.

## Anti-patterns

- Creating a landing page instead of a usable presentation.
- Duplicating personal data in Markdown.
- Creating components without reviewing the catalog.
- Forgetting `component-showcase` when the catalog changes.
- Using blurry or illegible screenshots.
- Committing generated builds.
- Hiding native navigation to solve contrast.
- Using distracting animation.
- Leaving clipped text or cards due to missing visual QA.
- Editing `shared/styles/theme.css` for a local case that belongs in deck CSS
  or a palette.
