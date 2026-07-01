# Slide Guidelines

These guidelines are the shared design and content baseline for future
`slides-builder` work.

## Core Principles

- Build real presentation decks, not landing pages.
- Default to a light enterprise-tech visual language with strong contrast,
  subtle grid, polished surfaces, and restrained color accents.
- Use dark or black/keynote palettes only when the talk explicitly needs that
  mood.
- Keep one main idea per slide and support it with a purposeful visual.
- Scale deck depth to the requested duration. As a baseline, use about 24-32
  slides for 30 minutes and 36-45 slides for 60 minutes, unless the brief
  explicitly defines a workshop, demo-heavy session, or sparse keynote.
- Vary composition based on content load. Dense diagrams may use a large left
  title; sections may use title plus subtitle; full-bleed visuals may use
  minimal copy.
- Plan visual rhythm across the deck. A strong deck should mix title/section
  slides, data visuals, diagrams, mockups/media, comparison or decision
  surfaces, and short text slides when the topic supports them.
- For editorial, teaching, keynote, strategy, storytelling, or human-centered
  decks, include purposeful local image-bearing slides unless the brief
  explicitly bans images.
- Avoid one-note palettes. Combine accents semantically.
- Do not use decorative overlays that reduce text contrast.
- Keep cards at 8px radius unless a component has a specific reason.
- Avoid card-inside-card layouts unless the nested element is a real product
  surface, modal, or repeated item.

## Deck Structure

- Each deck must have `decks/<slug>/slides.md`.
- Each new deck must have `decks/<slug>/deck.brief.md`.
- Every deck must include a title/cover slide, a data-driven speaker profile
  slide, and a final close/Q&A slide.
- Deck CSS lives in `decks/<slug>/styles/index.css` and imports the shared
  theme.
- Deck media lives in `decks/<slug>/public/media/`.
- Stable speaker data lives in `data/speaker/`.
- Reusable components belong in `shared/components/`.
- Deck-specific components belong in `decks/<slug>/components/`.
- Before creating a new slide pattern, check `docs/component-catalog.md` and
  reuse an existing module when it can carry the idea cleanly.

## Typography

- Use large type only for true headlines and section breaks.
- Use smaller, stable type inside panels, mockups, cards, and dashboards.
- Do not use negative letter spacing.
- Do not scale font size directly with viewport width.
- Confirm long headings fit at 1440x900.
- Rewrite or split long headings instead of clipping them.
- Treat section numbers as navigation, not hero artwork. They must not overlap,
  sit behind, or visually compete with headline text; prefer small badges or
  clearly separated labels over translucent giant numerals.
- On dark slides, body copy should be white or near-white. Gray is only for
  secondary metadata that can safely be low emphasis.
- On dark chips, code pills, badges, and product surfaces, use light text
  rather than dark accent colors. Palette hue consistency does not matter if
  projector contrast is weak.

## Motion

- Motion should clarify order, hierarchy, or transformation.
- Prefer `fade`, `slide-left`, and `slide-up` transitions.
- Avoid flash-like transitions in projector decks.
- Use `v-click` for progressive disclosure.
- Use `v-motion` for components that enter, move, or stage information.
- Keep most durations between 420ms and 680ms.
- Use typewriter effects only on selected high-impact titles.
- Typewriter effects must not leave a persistent caret, border, cursor line, or
  fake terminal prompt.
- Do not animate every object on a slide.
- Use restrained staging to add life to dense or strategic slides: progressive
  reveals, component entry, ECharts transitions, or separate click states are
  preferable to static walls of text.

## PPTX Export

- Treat PPTX as a static snapshot format.
- Do not promise native PowerPoint animations from Slidev, Vue, CSS, Mermaid,
  or ECharts.
- For click-driven presentation effects, use the hosted Slidev web deck.
- For PPTX handoff, model steps as separate slides or exported click states.
- See `docs/pptx-export-limits.md`.

## ECharts

- Use ECharts for magnitude, comparison, weighted flows, and state transitions.
- Prefer entry animations that run once, finish, and leave a static readable
  state.
- Use `sequence` for real before/after or current/target transitions.
- Avoid loops in readable charts, especially gauges.
- Use `sequenceTrigger="enter"` when the chart should animate on slide entry.
- Use `sequenceTrigger="click"` or `both` only when the talk track needs an
  internal reveal before moving to the next slide.
- Do not rely on `sequenceTrigger="click"` for exported PPTX; it only applies
  to the web runtime.
- Keep chart labels short and move explanation to `caption` or `insights`.
- Validate ECharts visually in the browser.

## Mermaid

- Use Mermaid when its DSL makes a simple diagram faster and cleaner.
- Keep Mermaid labels short.
- Move long explanations to side insights or captions.
- Remove Mermaid examples from the showcase if they clip text, oversize nodes,
  or fail to fit in 16:9.
- For fragile Mermaid layouts, use ECharts or a Vue component instead.

## Mockups, Media, And Assets

- Prefer HTML/CSS/Vue mockups over static screenshots when real access is not
  available.
- Mockups should feel like product surfaces without copying private UI.
- Use `BrowserMockup` for brand-neutral product surfaces.
- Keep `GitHubMockup` inside GitHub-specific decks.
- Use local media for essential rendering.
- Download SVG icons and editorial images into the deck media folder.
- Record source and license notes for external assets.
- Resolve deck-owned `public/media` assets through `import.meta.env.BASE_URL`
  inside wrappers or components when the deck will be built under a non-root
  base path.
- Before handoff, verify every referenced local media path through the running
  dev server or built artifact; an existing file on disk is not enough.
- The deck gallery preview must be generated from the built deck's real first
  slide at 1440x900. A synthetic card or placeholder is not an acceptable
  substitute because it can drift from the actual slide design.
- Gallery preview images are above-the-fold primary content and must load
  eagerly so the published home page does not first paint as empty preview
  boxes.
- Treat image search as part of creating any image-bearing slide: choose the
  asset for the slide's semantic role, not as generic decoration.
- Do not ship a new image-friendly deck with zero image-bearing slides unless
  the brief explicitly says images are forbidden.
- Select each editorial image for a specific slide purpose. Do not duplicate
  one source image across multiple roles merely by cropping or renaming it
  unless the deck intentionally uses it as a repeated motif.
- Avoid blurry or decorative images that do not add information.
- Use `Shape3DStage` or Three.js only when the canvas is validated as nonblank
  and correctly framed.

## Palettes

- Choose a palette from `docs/style-catalog.md` before designing slides.
- Apply palettes through `class` and `defaults.class`.
- If a slide declares a custom class, keep the palette class too.
- Use custom slide backgrounds when they clarify tone, context, or structure.
- Prefer reusable background patterns such as waves, image wash, mesh gradient,
  and blueprint grid before inventing a one-off treatment.
- Background images must be local files with opacity or overlay controls that
  preserve foreground contrast.
- Update `shared/styles/palettes.css`, `StylePalette`, README, style catalog,
  and showcase when palettes change.

## Navigation

- Prefer Slidev native navigation.
- Keep native navigation visible in play mode and presenter mode.
- Do not hide native controls to solve contrast; fix the styling.
- The grid action should open a visual overview with slide thumbnails.
- Keep the cursor visible over controls.

## Speaker Slides

- Speaker and closing slides are required in every deck; speaker slides must be
  data-driven.
- Stable speaker data lives in `data/speaker/speaker.json`.
- Decks should override only talk-specific fields.
- Shared speaker assets live in `data/speaker/`.
- Ambiguous handles should be set with clear typography so audiences can copy
  them correctly from a projected slide.
- Do not duplicate QR codes, handles, roles, or titles unless repetition adds
  real clarity.

## Visual QA

- Run `make check DECK=<slug>` after meaningful deck changes.
- For new decks or substantial visual changes, inspect every slide and visible
  click/state at 1440x900 before handoff.
- If Slidev overview thumbnails reveal overlap or clipped content, capture and
  inspect the overview in addition to full-size slide screenshots.
- For small isolated visual edits, inspect every changed slide plus adjacent or
  risky slides at 1440x900.
- For reusable components, inspect light and dark contexts when relevant.
- Check dark chips/code pills specifically; dark blue or muted text on navy or
  black panels is a contrast failure.
- Check visual rhythm on new or major decks: repeated layouts, missed component
  opportunities, missing diagrams/media, and lifeless text-heavy sequences are
  quality defects even when there is no clipping.
- Verify essential components do not depend on the internet.
- Move the mouse away before screenshots to avoid accidental hover states.

## GitHub-specific Claims

When a slide mentions current GitHub capabilities, plans, trials, or limits,
verify the claim with official sources if the information may have changed.
