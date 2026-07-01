# Shared Components

This folder contains Vue components that are reusable across decks.

Shared components must be:

- generic enough to work outside one talk,
- data-driven through props or slots,
- styled by `shared/styles/theme.css` and palette variables from
  `shared/styles/palettes.css`,
- documented in `README.md` and `docs/component-catalog.md`.

Current shared components:

- `SpeakerProfile.vue`
- `TypingTitle.vue`
- `PlatformMap.vue`
- `EnterpriseTopology.vue`
- `GovernanceGrid.vue`
- `SecurityRadar.vue`
- `MaturityCurve.vue`
- `EChart.vue`
- `GraphDiagram.vue`
- `SequenceDiagram.vue`
- `MermaidDiagram.vue`
- `MermaidSyntaxCatalog.vue`
- `MermaidJourney.vue`
- `MermaidRoadmap.vue`
- `MermaidQuadrant.vue`
- `MediaFrame.vue`
- `StylePalette.vue`
- `BrowserMockup.vue`
- `MetricStrip.vue`
- `ComparisonTable.vue`
- `DecisionMatrix.vue`
- `HierarchyTree.vue`
- `IconGrid.vue`
- `ShapeSystem.vue`
- `TimelineFlow.vue`
- `SwimlaneFlow.vue`
- `PyramidDiagram.vue`
- `VennDiagram.vue`
- `CalloutStack.vue`
- `QuoteFrame.vue`
- `ArchitectureLayers.vue`
- `Shape3DStage.vue`

Reference deck:

```bash
make dev DECK=component-showcase
```

`Shape3DStage.vue` uses `three`; validate it visually with Playwright because a
passing build does not prove the WebGL canvas rendered.

`MermaidDiagram.vue` and its presets use `mermaid`; validate them visually
because the diagrams render dynamically in the browser.

`EChart.vue` uses `echarts`; prefer it for animated charts, rich series,
Sankey/funnel/radar/heatmap/treemap/gauge analytical patterns, and visuals that
need responsive updates, custom `graphic` animations, or value transitions. Use
its `sequence` prop for state-to-state transitions inside a slide. The default
`sequenceTrigger` is `enter`, so the animation starts when the slide is visited
and then remains static; use click-based triggers only for deliberate in-slide
steps. Validate it visually because the chart renders dynamically in the
browser.

PPTX export captures ECharts as static slide images. Do not expect
`sequenceTrigger="click"` or any runtime chart animation to become a native
PowerPoint animation.

Decks should expose shared components through local wrappers so Slidev can
auto-import them from `decks/<slug>/components/`:

```vue
<template>
  <SharedPlatformMap v-bind="$attrs" />
</template>

<script setup>
import SharedPlatformMap from '../../../shared/components/PlatformMap.vue'
</script>
```

Keep domain-specific components inside `decks/<slug>/components/` until they are
generalized.
