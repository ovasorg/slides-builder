# Deck Brief: Platform Engineering That Teams Actually Adopt

This file is the source of truth for this deck.

## Source Prompt

```text
Create a 30-minute, vendor-neutral internal conference presentation for
engineering managers, platform engineers, and senior developers evaluating an
investment in a platform organization. The audience should leave with a
practical operating model for building, adopting, and measuring an internal
developer platform. Core message: a platform succeeds when teams choose to use
it, not merely when the organization deploys more tools.
```

## Intake

| Field | Value |
| --- | --- |
| Topic or title | Platform Engineering That Teams Actually Adopt |
| Audience | Engineering managers, platform engineers, and senior developers |
| Audience level | Intermediate |
| Duration | 30 minutes, including 5 minutes for questions |
| Desired outcome | A practical operating model for building, adopting, and measuring an internal developer platform |
| Required points | Platform vs. tools; product thinking and developer experience; golden paths and self-service; low-friction governance and security; adoption/outcome metrics; phased roadmap |
| Tone and context | Practical, candid, executive-friendly internal engineering conference |
| Constraints | No live demo; vendor-neutral; concrete trade-offs; concise close and next steps |
| Available assets | No supplied media; event logo may arrive later |
| Suggested assets policy | Two locally stored Pexels editorial photos plus native diagrams and ECharts |
| Speaker profile | Included; uses shared `data/speaker/person.js` with talk-specific roles and tags |
| Deliverables | Slidev HTML deck, build-ready for PDF/PPTX static export |
| Desired slug | `platform-engineering-that-teams-actually-adopt` |
| Background mode | light |
| Palette | `palette-crystal` |

## Visual Direction

| Item | Decision |
| --- | --- |
| Background mode | light |
| Palette | `palette-crystal` |
| Palette rationale | Editorial clarity for an executive/technical audience, with semantic blue/green/amber accents |
| Motion level | Low; short entry transitions and restrained progressive disclosure |
| Media style | Two editorial photos, CSS/Vue diagrams, one ECharts adoption funnel |

## Assumptions

- The speaking portion runs for 25 minutes, followed by a dedicated 5-minute Q&A slide.
- A 28-slide structure is appropriate because section breaks, profile, and visual slides are intentionally fast.
- The deck is delivered in English to match the supplied title and content.
- The event logo is optional and can be added later without changing the narrative.
- Illustrative metrics are clearly labeled as examples rather than benchmarks.

## Open Questions

- Event logo can be incorporated in a later visual pass.

## Acceptance Criteria

### Narrative

- The deck frames the investment decision before presenting implementation mechanics.
- The operating model connects product management, experience, platform capabilities, guardrails, and operations.
- The deck includes the required structural slides: title, speaker profile, and final close/Q&A.
- The final five minutes are explicitly reserved for questions.

### Required Content

- Platform vs. tool collection is contrasted by user journey, ownership, and outcomes.
- Product thinking, golden paths, self-service, governance/security, metrics, and a phased roadmap each receive a dedicated visual or slide sequence.
- Trade-offs include build/buy/integrate, standardization vs. escape hatches, and control strength vs. workflow friction.
- The close includes one concise takeaway and three recommended next steps.

### Visual Quality

- `palette-crystal` remains readable at 1440x900 with no clipping or overlap.
- The cover, one dense slide, one workflow slide, the ECharts slide, and native navigation are browser-validated.
- Essential images and components render locally without runtime network access.
- Motion finishes in a stable, readable state and does not affect static exports.

### Regression And Maintainability

- Shared theme and shared components are consumed through local wrappers and are not modified.
- Deck-specific CSS and content remain contained under the deck directory.
- No new rendering dependency is introduced.

### Build

- `make check DECK=platform-engineering-that-teams-actually-adopt` exits with code 0.

## Narrative Plan

| Section | Purpose | Slide Count |
| --- | --- | --- |
| Opening and decision | Establish adoption as the success criterion and frame the investment | 5 |
| Product and experience | Define the operating model, customers, team, and delivery trade-offs | 6 |
| Golden paths and guardrails | Show the self-service journey and low-friction governance model | 9 |
| Adoption and outcomes | Measure voluntary use, behavior, outcomes, and trust | 3 |
| Roadmap and close | Sequence the investment, define next steps, close, and reserve Q&A | 4 |

## Asset Plan

| Asset | Source | Local Path | License/Notes |
| --- | --- | --- | --- |
| Engineering collaboration, wide crop | Pexels photo 4623345, Ketut Subiyanto | `public/media/team-collaboration.jpg` | Pexels License; reused from the repository media library; source: https://www.pexels.com/photo/two-people-using-a-laptop-4623345/ |
| Developer workflow, code surface | Pexels photo 3861951, ThisIsEngineering | `public/media/developer-workflow.jpg` | Pexels License; distinct source selected for developer workflow context; source: https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg |

## Component Plan

| Need | Component or Pattern | Location |
| --- | --- | --- |
| Cover title | Static editorial headline | deck-local markup |
| Speaker profile | `SpeakerProfile` | shared wrapper with deck-local speaker data |
| Platform operating model | `ArchitectureLayers` | shared wrapper |
| Tool collection comparison | `ComparisonTable` | shared wrapper |
| Roles and governance | `GovernanceGrid` | shared wrapper |
| Self-service journey | `SwimlaneFlow` | shared wrapper |
| Roadmap | `TimelineFlow` | shared wrapper |
| Adoption visualization | `EChart` | shared wrapper |
| Editorial imagery | `MediaFrame` | shared wrapper |
| Deck-specific diagrams | HTML/CSS composition | deck-local styles |

## Validation Plan

- `make check DECK=platform-engineering-that-teams-actually-adopt`
- Full-deck screenshot review at 1440x900 for every slide and visible state
- Cover, speaker profile, section breaks, dense operating-model, golden-path,
  governance, photo, ECharts, closing, and Q&A slides explicitly checked
- ECharts screenshot at 1440x900 after entry animation settles
- Navigation visible in play mode
- No remote dependency for essential rendering

## Handoff Notes

- Commands run: `make check DECK=platform-engineering-that-teams-actually-adopt`, local Slidev server on port 4100, and full-deck Playwright screenshots at 1440x900.
- Files changed: deck brief, 28-slide narrative, deck-local CSS, shared-component wrappers, deck-local speaker data, distinct local editorial photos, and the manual deploy workflow selector.
- Visual evidence: every slide inspected at 1440x900, including cover, speaker profile, section breaks, discovery loop, photo section, ECharts adoption funnel, closing, and Q&A. Native Slidev navigation remains unmodified.
- Known limitations: event logo is intentionally deferred. The build emits the repository-known non-blocking Rolldown `#__PURE__` warning from `@vueuse/core`.
- Follow-up ideas: add event branding, then export PDF/PPTX if requested.
