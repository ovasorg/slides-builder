# PPTX Export Limits

Slidev is a web-based presentation system. The web deck is the source of truth
for live motion, clicks, Vue components, ECharts, Mermaid, and other runtime
interactions.

PPTX export is useful for sharing, archiving, and handoff, but it is not a
native PowerPoint animation pipeline.

## What Works

- Exporting a deck to `.pptx`.
- Capturing each slide as an image.
- Carrying presenter notes on a per-slide basis.
- Exporting click steps as separate states/pages when `--with-clicks` is used
  or enabled by the exporter.

## What Does Not Work

- Native PowerPoint animations generated from Vue, CSS, ECharts, Mermaid, or
  Slidev runtime motion.
- A chart animation that waits for the next PowerPoint click inside the same
  exported slide.
- Editable text or editable chart objects inside the exported PPTX.

Slidev's official exporting documentation states that exported files may not
preserve interactive features, and that PPTX slides are exported as images.
That means PowerPoint receives snapshots, not native animation timelines.

Reference: <https://sli.dev/guide/exporting.html>

## Recommended Strategy

- Use the hosted Slidev web deck for live presentations that need motion.
- Use PDF or PPTX for static handoff.
- If a PPTX needs progressive disclosure, model each step as a separate Slidev
  click state or separate slide before export.
- Do not rely on ECharts `sequenceTrigger="click"` for exported PPTX. It is a
  web-runtime behavior.
- Keep ECharts animations one-shot and readable for web delivery; for PPTX,
  make sure the final visual state is clear as a static image.

## Guidance For Slides-builder

When a user asks for PowerPoint-like animation:

1. Build the effect for Slidev web delivery when live motion matters.
2. Explain that PPTX export will be static snapshots.
3. Offer a PPTX-friendly alternative: duplicate slides, `v-click` states, or
   explicit before/after slides.
4. Validate both the web deck and exported snapshot readability when PPTX is a
   deliverable.
