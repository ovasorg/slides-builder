# ADR 0001: Lightweight Spec Kit Flow For Deck Generation

Status: accepted
Date: 2026-06-08

## Context

This repository is a Slidev deck factory. A user should be able to give an
agent a prompt and receive a clean deck that follows the existing structure,
visual system, component catalog, local asset rules, validation commands, and
deployment conventions.

The previous documentation mentioned Spec Kit and OpenSpec together. That was
useful as inspiration, but it created unnecessary conceptual overlap for this
project.

## Decision

Adopt a lightweight Spec Kit-style flow as the single operating model for new
deck generation:

```text
Triage -> Questions -> Intake -> Brief -> Plan -> Tasks -> Implement -> Validate -> Learn -> Handoff
```

Use `decks/<slug>/deck.brief.md` as the deck-specific source of truth.

Use this ADR to record the architectural decision. Do not maintain a separate
OpenSpec-style change-spec tree for normal deck creation.

## Why This Fits

- Spec Kit maps directly to agent work: clarify intent, write a brief, plan,
  create tasks, implement, and validate.
- Deck creation is content and design work, not a product-change governance
  process that needs proposal/spec-delta artifacts.
- A single `deck.brief.md` keeps requirements, assumptions, asset plan and
  validation close to the deck.
- ADRs are enough for long-lived repository decisions.

## Consequences

- New decks must create `decks/<slug>/deck.brief.md` before implementation.
- Agents must ask all known clarification questions before scaffolding or
  implementation when critical intake information is missing.
- New decks must include title/cover, data-driven speaker profile, and final
  close/Q&A slides.
- The workflow documentation lives in `docs/deck-generation-workflow.md`.
- The reusable brief template lives in `docs/deck-brief-template.md`.
- Architectural decisions live in `docs/adr/`.
- OpenSpec can still be considered later if the repository grows into a larger
  multi-team change-management system, but it is not part of the current deck
  creation workflow.
