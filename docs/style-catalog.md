# Style Catalog

This repository uses one shared theme plus interchangeable CSS palettes. A deck
should be able to change visual tone without copying CSS or breaking reusable
components.

## Apply A Palette

Add a `palette-*` class to both `class` and `defaults.class`:

```md
---
class: my-deck palette-crystal
defaults:
  class: my-deck palette-crystal
---
```

If a slide defines its own class, keep the palette class:

```md
---
class: my-deck palette-crystal section-break
---
```

## Background Mode

Every new deck must record its background mode in
`decks/<slug>/deck.brief.md`. Palette and background mode are related but not
the same decision.

| Mode | Use When | Candidate Palettes |
| --- | --- | --- |
| `light` | Workshops, dashboards, screenshots, documentation, long sessions, and close reading. | `palette-crystal`, `palette-citrus`, `palette-lab` |
| `dark` | Technical talks, infrastructure, security, operations, demos, or moderate high contrast. | `palette-aurora`, `palette-carbon`, `palette-orchid` |
| `black/keynote` | Keynotes, dramatic opening/closing slides, dark stages, or very sparse slides. Use sparingly. | `palette-carbon` or a justified deck-local class |

Dark does not mean black. `dark` uses controlled depth, panels, and contrast.
`black/keynote` uses near-black surfaces and requires larger type, fewer
objects, and stricter visual QA.

## Background Patterns

Individual slides may customize their background when the visual treatment
supports the slide's purpose. The component showcase includes examples for:

| Pattern | Use When | Guardrail |
| --- | --- | --- |
| `CSS waves` | Section openings or conceptual transitions need a soft visual cue. | Use slow ambient motion, keep content stable, and honor reduced-motion preferences. |
| `Image wash` | A slide benefits from contextual media without becoming a photo slide. | Use local media, opacity overlays, and high-contrast foreground copy. |
| `Mesh gradient` | Sparse narrative slides need depth without a literal image. | Combine restrained color fields with a structured visual anchor. |
| `Blueprint grid` | Architecture, systems, roadmaps, or flows need a precise technical frame. | Dark technical treatments must keep copy and diagram labels high contrast. |

When a slide declares a custom background class, keep the deck and palette
classes in the same `class` value.

## Available Palettes

| Class | Name | Recommended Use |
| --- | --- | --- |
| `palette-aurora` | Enterprise Aurora | Platforms, DevSecOps, infrastructure, technical talks. |
| `palette-lab` | Research Lab | Research, teaching, notebooks, data science, technical demos. |
| `palette-sunset` | Product Sunset | Product, strategy, adoption, storytelling, change management. |
| `palette-mono` | Executive Mono | Executive reports, decisions, governance, restrained narratives. |
| `palette-carbon` | Carbon Focus | Technical keynotes, operations, incidents, high contrast. |
| `palette-citrus` | Citrus Grid | Workshops, labs, enablement, energetic demos. |
| `palette-orchid` | Orchid Pulse | AI, innovation, product, visual narratives. |
| `palette-crystal` | Crystal Day | Default for new decks, dashboards, screenshots, and close reading. |

## Rules

- Do not create a new palette for a minor color change.
- Create a new palette only when the overall visual tone changes.
- Keep variables compatible with `shared/styles/theme.css`.
- Update `StylePalette`, `README.md`, and this document when palettes change.
- Validate a cover, dense slide, chart slide, and media slide after changing a
  palette.

## Expected Variables

Each palette should define:

```css
--deck-bg
--deck-panel
--deck-panel-2
--deck-ink
--deck-muted
--deck-soft
--deck-line
--deck-blue
--deck-green
--deck-amber
--deck-rose
--deck-purple
--deck-cyan
--accent-gradient
--border-gradient
```

Shared components should use these variables instead of hardcoded colors when
reasonable.
