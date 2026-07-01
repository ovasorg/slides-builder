---
name: slide-spec-triage
description: Validate a user-provided slide-deck specification before creating, editing, or scaffolding slides. Use when Codex receives a request for a new presentation, major deck update, or deck brief and must determine whether the prompt contains all critical intake fields; if required information is missing or contradictory, ask concise clarification questions before implementation.
---

# Slide Spec Triage

## Purpose

Use this skill before execution when a deck request might be incomplete. Decide
whether the user supplied enough information to create or modify slides
responsibly. If not, ask only for the missing critical details before any file
creation, scaffolding, or implementation begins.

## Workflow

1. Read the user specification and any referenced files.
2. Classify each intake field as `provided`, `inferable`, `missing`, or
   `contradictory`.
3. Ask before implementation when any critical field is `missing` or
   `contradictory`.
4. Ask at most three concise grouped questions. Combine related gaps.
5. Treat this as the question window. Ask all known clarification questions
   here; do not defer optional preference questions into implementation.
6. Apply mandatory deck structure: title/cover slide, data-driven speaker
   profile slide, and final closing/Q&A slide.
7. Infer non-critical fields when reasonable, and state those assumptions in
   the future `deck.brief.md`.
8. If the spec is complete, produce a compact triage result and proceed to the
   deck-generation or implementation workflow.

## Critical Intake Fields

The spec must define these fields, either directly or with enough context to
infer them safely:

| Field | Acceptable Evidence |
| --- | --- |
| Topic or title | A clear presentation title, topic, or working title. |
| Audience | Role, function, community, organization, or stakeholder group. |
| Audience level | Beginner, intermediate, advanced, executive, mixed, or equivalent context. |
| Duration | Talk length, workshop length, or expected slide count/timebox. |
| Desired outcome | What attendees should understand, decide, do, or take away. |
| Required points | Mandatory topics, claims, sections, examples, or exclusions. |
| Tone and context | Event type, internal/external setting, formality, language, and narrative posture. |
| Constraints | Vendor/brand limits, demo limits, privacy, export needs, live/offline needs, language, accessibility, or compliance needs. |
| Visual background mode | Light, dark, black/keynote, or enough visual preference to infer one. |

## Non-Critical Fields

Infer these unless the user explicitly makes them important:

- Slug.
- Palette.
- Slide count.
- Component choices.
- Asset sourcing policy.
- Delivery format when the repo default is acceptable.
- Placeholder handling for missing logos, QR codes, screenshots, or photos.

Record inferred values as assumptions in the deck brief.

Speaker/profile slide usage is not optional. If the prompt omits speaker
details, use the shared `data/speaker/person.js` defaults and record any
deck-specific role/tag assumptions in the brief.

## Question Policy

Ask only questions that change the deck materially. Do not ask for details that
can be inferred from the topic, repo defaults, or a reasonable presentation
pattern. Ask in the same language the user used unless they request otherwise.
All questions must be asked before execution starts as part of triage or plan.
After implementation begins, continue from the triage result and documented
assumptions unless a newly discovered blocker could not reasonably have been
identified during triage.

Use this shape:

```text
Antes de crear los slides, faltan estos datos críticos:

1. <pregunta agrupada sobre audiencia/nivel/duración si aplica>
2. <pregunta agrupada sobre objetivo/puntos obligatorios si aplica>
3. <pregunta agrupada sobre tono/constraints/visual mode si aplica>
```

If there are more than three gaps, group them by decision area:

- Audience and format.
- Narrative and required content.
- Constraints and visual direction.

## Complete-Spec Output

When the spec is ready, summarize the result before moving on:

```text
Triage completo:
- Críticos definidos: <short list or "todos">
- Inferencias: <short assumptions>
- Riesgos abiertos: <none or deferred non-critical items>
- Siguiente workflow: <slide-deck-generator | tdd-implementation | slide-visual-qa>
```

## Contradictions

Treat contradictions as blocking when they affect structure, tone, or
validation. Examples:

- Duration says 10 minutes but required coverage implies a 40-minute workshop.
- User asks for vendor-neutral content but requires a product-specific pitch.
- User asks for a light editorial deck and a black/keynote mood with dense
  screenshots on every slide.
- User asks for live demo dependency but also says the deck must work offline.

Ask the user to choose the governing constraint instead of guessing.

## Handoff To Deck Generation

When triage passes, pass these decisions into `slide-deck-generator`:

- Critical fields and assumptions.
- Missing non-critical assets and placeholder plan.
- Visual background mode and inferred palette.
- Required structural slides: title, speaker profile, final close/Q&A.
- Validation surface, including build command and required screenshots.
- Any user-stated constraints that must appear in `deck.brief.md`.
