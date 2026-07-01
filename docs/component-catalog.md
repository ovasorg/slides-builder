# Visual Component Catalog

This catalog describes the reusable components and visual patterns available to
`slides-builder`.

## Layers

```text
shared/components/                           # reusable global components
decks/<slug>/components/                     # deck-owned components and wrappers
decks/component-showcase/components/         # showcase wrappers and examples
```

Slidev auto-imports components from `decks/<slug>/components/`. To use a shared
component from Markdown, create a thin local wrapper:

```vue
<template>
  <SharedPlatformMap v-bind="$attrs" />
</template>

<script setup>
import SharedPlatformMap from '../../../shared/components/PlatformMap.vue'
</script>
```

The `component-showcase` deck must demonstrate reusable, brand-neutral
components and patterns. Product-specific components should stay inside their
own deck.

## Reuse Rules

- Reuse existing components before creating new ones.
- Use `shared/components/` for generic, data-driven, brand-neutral visuals.
- Use `decks/<slug>/components/` for talk-specific mockups, CTAs, and visuals.
- Keep props simple and data arrays readable.
- Do not rely on remote assets, scripts, or fonts for core rendering.
- Update this catalog, the README, and the showcase when a reusable component
  changes.

## Shared Components

| Component | Source | Use |
| --- | --- | --- |
| `SpeakerProfile` | `shared/components/SpeakerProfile.vue` | Data-driven speaker intro with QR, public profiles, roles, and tags. |
| `TypingTitle` | `shared/components/TypingTitle.vue` | Clean title reveal for covers or section breaks. |
| `PlatformMap` | `shared/components/PlatformMap.vue` | Four-stage maps, domains, or transformations. |
| `EnterpriseTopology` | `shared/components/EnterpriseTopology.vue` | Compact topology with center and surrounding nodes. |
| `GovernanceGrid` | `shared/components/GovernanceGrid.vue` | 2x2 governance or operating model grid. |
| `SecurityRadar` | `shared/components/SecurityRadar.vue` | Capability, risk, or posture radar. |
| `MaturityCurve` | `shared/components/MaturityCurve.vue` | Maturity stages and decision points. |
| `GraphDiagram` | `shared/components/GraphDiagram.vue` | SVG graph of concepts, systems, or decisions. |
| `SequenceDiagram` | `shared/components/SequenceDiagram.vue` | Actor and message sequence view. |
| `MermaidDiagram` | `shared/components/MermaidDiagram.vue` | Styled Mermaid wrapper for curated syntax. |
| `MermaidSyntaxCatalog` | `shared/components/MermaidSyntaxCatalog.vue` | Decision map for Mermaid syntax choices. |
| `MermaidJourney` | `shared/components/MermaidJourney.vue` | Mermaid user journey preset. |
| `MermaidRoadmap` | `shared/components/MermaidRoadmap.vue` | Mermaid timeline preset. |
| `MermaidQuadrant` | `shared/components/MermaidQuadrant.vue` | Mermaid quadrant chart preset. |
| `EChart` | `shared/components/EChart.vue` | Animated ECharts wrapper for charts and dynamic diagrams. |
| `MediaFrame` | `shared/components/MediaFrame.vue` | Image, video, GIF, or media placeholder frame. |
| `StylePalette` | `shared/components/StylePalette.vue` | Visual reference for available palettes. |
| `BrowserMockup` | `shared/components/BrowserMockup.vue` | Generic product, dashboard, or web-app mockup. |
| `MetricStrip` | `shared/components/MetricStrip.vue` | Large KPI row. |
| `ComparisonTable` | `shared/components/ComparisonTable.vue` | Visual comparison table. |
| `DecisionMatrix` | `shared/components/DecisionMatrix.vue` | 2x2 decision matrix. |
| `HierarchyTree` | `shared/components/HierarchyTree.vue` | Root and branch hierarchy. |
| `IconGrid` | `shared/components/IconGrid.vue` | Compact icon and concept grid. |
| `ShapeSystem` | `shared/components/ShapeSystem.vue` | Reusable 2D shape language. |
| `TimelineFlow` | `shared/components/TimelineFlow.vue` | Horizontal milestone timeline. |
| `SwimlaneFlow` | `shared/components/SwimlaneFlow.vue` | Role, team, or system swimlanes. |
| `PyramidDiagram` | `shared/components/PyramidDiagram.vue` | Layered pyramid for maturity or architecture. |
| `VennDiagram` | `shared/components/VennDiagram.vue` | Three-domain intersection. |
| `CalloutStack` | `shared/components/CalloutStack.vue` | Stack of insights, risks, decisions, or principles. |
| `QuoteFrame` | `shared/components/QuoteFrame.vue` | Editorial quote or section insight. |
| `ArchitectureLayers` | `shared/components/ArchitectureLayers.vue` | Horizontal architecture or operating-model layers. |
| `Shape3DStage` | `shared/components/Shape3DStage.vue` | Three.js stage for high-impact slides. |

## ECharts Guidance

Use `EChart` when a slide needs precise charts, weighted relationships, or
state transitions that improve the narrative. Mermaid is better for simple,
declarative structures; ECharts is better for scale, magnitude, comparison,
animation, and weighted flows.

Recommended patterns:

- Combo bar/line: trend, coverage, quality vs volume.
- Sankey: weighted flow between stages or capabilities.
- Funnel: conversion, drop-off, selection by stage.
- Radar: current vs target capability gaps.
- Heatmap: prioritization by two dimensions.
- Treemap: weighted hierarchy, ownership, budget, inventory.
- Gauge: one primary readiness or status metric.
- Graphic: custom stroke, loading, wave, mark, or overlay animations.

Presentation rules:

- Default to `sequenceTrigger="enter"` so the animation starts on slide entry,
  ends, and remains static for reading.
- Use `sequenceTrigger="click"` or `both` only when the talk track needs an
  internal reveal before moving to the next slide.
- Avoid `sequenceLoop` for readable charts, especially gauges, bars, radars,
  and series.
- Keep chart labels short. Put longer explanation in `caption` or `insights`.
- Prefer 4-8 visible categories.
- Use `renderer="svg"` by default for projector sharpness; use canvas only when
  the chart needs it.
- Validate in the browser. Build success does not prove chart readability.
- PPTX export captures charts as static images. ECharts click/sequence behavior
  is for the Slidev web runtime, not native PowerPoint animation.

## Mermaid Guidance

Use Mermaid only when the syntax renders cleanly in 16:9 and the text remains
readable. Keep node labels short and move long context into side insights.

Curated syntax for this project:

- Sequence Diagram
- User Journey
- Gantt
- Pie Chart
- Quadrant Chart
- GitGraph Diagram
- Mindmap
- Timeline
- Packet

Avoid Mermaid syntaxes that previously produced clipped text, fragile layout, or
oversized nodes in the showcase: complex flowcharts, class diagrams, state
diagrams, ER diagrams, C4 diagrams, block-beta, sankey-beta, and xychart-beta.
Use Vue components or ECharts instead.

## Deck-specific Components

Deck-specific components can stay local when they depend on a talk narrative,
specific data model, or non-reusable visual metaphor. Move a component to
`shared/components/` only after it becomes brand-neutral and useful across
multiple decks.

Do not move product-specific components into the showcase unless they are first
generalized into reusable components.

## Showcase-specific Components

`decks/component-showcase/components/AssetSourcingShowcase.vue` demonstrates
how to combine locally downloaded SVG icons and editorial imagery. It is a
showcase example, not a production component for every deck.

## Shared Visual Classes

Reusable classes live in `shared/styles/theme.css`:

- `.kicker`
- `.lead`
- `.big-contrast`
- `.agenda-grid`
- `.policy-grid`
- `.ownership-board`
- `.ops-board`
- `.lesson-stack`
- `.final-frame`
- `.media-showcase-grid`
- `.browser-mockup`
- `.metric-strip`
- `.comparison-table`
- `.decision-matrix`
- `.hierarchy-tree`
- `.icon-grid`
- `.shape-system`
- `.timeline-flow`
- `.swimlane-flow`
- `.pyramid-diagram`
- `.venn-diagram`
- `.callout-stack`
- `.quote-frame`
- `.architecture-layers`
- `.shape-3d-stage`

## Creating A New Component

1. Review this catalog first.
2. Reuse an existing visual structure when possible.
3. Put generic, brand-neutral, configurable components in `shared/components/`.
4. Put talk-specific components in `decks/<slug>/components/`.
5. Use simple props, slots, or data arrays.
6. Add motion only when it clarifies order, hierarchy, or change.
7. Validate at 1440x900 and 1600x900.
8. Update this catalog, the README, and `component-showcase` in the same commit.

## Promotion Criteria

A component belongs in `shared/components/` when:

- it does not depend on one brand, talk, CTA, or product;
- it accepts content through props or slots;
- it follows `shared/styles/theme.css`;
- it can be used by `slides-builder` in a new deck without copying code.

If a component still depends on a specific product, event, or talk, keep it in
the deck folder.
