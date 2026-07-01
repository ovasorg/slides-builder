# Deck Brief: <title>

This file is the source of truth for a deck created by `slides-builder`.
Complete it before scaffolding slides. If a critical field is missing or
contradictory, ask the user before creating files. Ask all known clarification
questions during triage/plan; after execution starts, use documented
assumptions unless a newly discovered blocker could not reasonably have been
identified earlier.

## Source Prompt

```text
<paste or summarize the user prompt>
```

## Intake

| Field | Value |
| --- | --- |
| Topic or title | <required> |
| Audience | <required> |
| Audience level | <required> |
| Duration | <required> |
| Desired outcome | <required> |
| Required points | <required> |
| Tone and context | <required> |
| Constraints | <required> |
| Available assets | <none or list> |
| Suggested assets policy | <SVG Repo, Pexels, Unsplash, no external sourcing, etc.> |
| Speaker profile | <use shared speaker data? yes/no/variant> |
| Deliverables | <HTML, PDF, PPTX, GitHub Pages, release package> |
| Desired slug | <optional> |
| Background mode | <light, dark, black/keynote> |
| Palette | <palette-* class> |

## Visual Direction

| Item | Decision |
| --- | --- |
| Background mode | <light, dark, black/keynote> |
| Palette | <palette-* class> |
| Palette rationale | <why it fits the audience, tone, and topic> |
| Motion level | <low, medium, high> |
| Media style | <screenshots, generated images, diagrams, ECharts, Mermaid, 3D> |
| Image-bearing slides | <which slides should use local images/media, or "none: explicitly banned"> |
| Visual rhythm | <mix of title, section, diagram, chart, mockup/media, comparison, text> |

If the user does not provide a visual direction and allows the agent to infer,
use `palette-crystal` and `light` mode. Use `black/keynote` only when the user
requests it or the presentation context clearly justifies it.

## Assumptions

- <assumption 1>
- <assumption 2>

## Questions Resolved Before Execution

- <question asked, answer received, or assumption used>
- <question asked, answer received, or assumption used>

## Acceptance Criteria

### Narrative

The deck shall present a clear narrative for <audience> in <duration>.

Acceptance:

- Given a target audience member
- When they finish the deck
- Then they understand <desired outcome>
- And the narrative plan has section depth and slide count appropriate for
  <duration>

### Required Content

The deck shall include all required points.

Acceptance:

- Given the required points list
- When the deck is reviewed
- Then every point is represented by at least one slide or visual block

### Required Structure

The deck shall include the required structural slides.

Acceptance:

- Given the rendered deck
- When it is reviewed
- Then it includes a title/cover slide, a data-driven speaker profile slide,
  and a final close/Q&A slide

### Visual Quality

The deck shall use the repository visual system, record palette/background mode,
remain readable at 1440x900, and use enough visual variety to support the talk.

Acceptance:

- Given screenshots of every slide and visible click/state for new decks or
  substantial visual changes
- When they are inspected at 1440x900
- Then there is no clipped text or unreadable essential content
- And the deck does not rely on long runs of same-looking text slides when
  catalog components, diagrams, media, or staged reveals would clarify the idea
- And image-bearing slides render local, source-noted assets when the visual
  direction calls for images and does not explicitly ban them

### Build

The deck shall pass repository validation.

Acceptance:

- `make check DECK=<slug>` exits with code 0

## Narrative Plan

| Section | Purpose | Slide Count |
| --- | --- | --- |
| Opening | <purpose> | <count> |
| Context | <purpose> | <count> |
| Core idea | <purpose> | <count> |
| Demo or examples | <purpose> | <count> |
| Close | <purpose> | <count> |

## Asset Plan

| Asset | Source | Local Path | License/Notes |
| --- | --- | --- | --- |
| <asset> | <search/source> | `decks/<slug>/public/media/...` | <license/notes> |

## Component Plan

| Need | Component or Pattern | Location |
| --- | --- | --- |
| <need> | <component> | <shared or local> |

The component plan should name existing catalog modules first. Create a local
component only when the catalog does not already support the slide's job.

## Validation Plan

- `make check DECK=<slug>`
- Full-deck screenshot review at 1440x900 for every slide and visible
  click/state on new decks or substantial visual changes
- Changed-slide plus adjacent/risky screenshot review at 1440x900 for small
  isolated visual edits
- Cover, speaker, section break, dense, media/mockup/chart, closing, Q&A, and
  navigation states explicitly checked
- Visual rhythm checked: repeated layouts, underused existing components,
  missing media/diagrams, and motion/reveal choices reviewed against the brief
- Image-bearing slides checked for local rendering, semantic fit, source notes,
  and contrast-preserving crops/overlays
- Navigation visible in play mode
- No remote dependency for essential rendering

## Handoff Notes

- Commands run:
- Files changed:
- Known limitations:
- Follow-up ideas:
