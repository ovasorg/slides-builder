---
name: tdd-implementation
description: Implement code, documentation, deck, or workflow changes with a test-first or criteria-first process. Use when an AI agent is asked to implement, fix, refactor, build, add a feature, create a deck, update docs, change CI/deploy behavior, or make any non-trivial repository change that should define quality criteria before editing and validate them after execution.
---

# TDD Implementation

## Principle

Use test-driven development broadly: define expected behavior and quality gates before changing the system, make the smallest useful change, then prove the criteria are satisfied. For visual/docs/deck work where automated tests may not exist, use criteria-first validation with builds, screenshots, lint checks, link checks, or manual inspection evidence. For slide decks, quality gates must include both defect prevention and visual ambition: composition variety, purposeful use of existing components, local image/media usage when the brief supports it, and restrained motion.

## Workflow

1. Understand the request and inspect the local context.
2. Write acceptance criteria before editing. Keep them concrete and verifiable.
   For deck work, include a visual composition criterion that names the
   component families, local images/media, diagrams, or motion patterns the
   deck should use so it does not become a sequence of static text slides.
3. Complete the question window before editing. Ask all known clarifying
   questions during triage/plan, then proceed from the criteria and documented
   assumptions without pausing for mid-execution preferences.
4. Identify the validation surface:
   - Unit/integration tests for code behavior.
   - Build/type/lint checks for compile and contract safety.
   - Screenshots/browser checks for visual work.
   - Link/render/export checks for docs and decks.
   - CI/workflow dry runs or syntax checks for automation.
5. Create or update a failing/targeted test first when the codebase has a suitable test harness. If no automated harness exists, record the command or inspection that will fail before the fix or directly validate the changed behavior after.
6. Implement the smallest scoped change that satisfies the criteria.
7. Refactor only inside the touched scope and only when it improves clarity or removes real duplication.
8. Run all selected validations. Add broader checks when the change touches shared behavior, public interfaces, deployment, or reusable components.
9. If validation fails, fix and rerun until the criteria pass or a genuine blocker remains.
10. Final response must include the criteria covered, commands/checks run, failures fixed, and any unverified criterion.

## Acceptance Criteria Shape

Use this compact form in working notes:

- Behavior: what must change for the user.
- Regression: what must remain unchanged.
- Quality: readability, maintainability, accessibility, performance, or visual expectations. For decks, include aesthetic/dynamic expectations such as varied layouts, catalog component reuse, purposeful local images or diagrams, and motion that clarifies the talk track.
- Validation: exact tests, commands, screenshots, or inspections that will prove it.

## Guardrails

- Do not invent heavyweight test infrastructure for tiny changes.
- Do not skip validation because the change is "only docs" or "only slides"; use an appropriate check.
- Do not mark work complete when acceptance criteria are untested unless you clearly report the gap.
- Do not treat "no clipping and build passes" as enough for a new or major
  deck. Check whether the deck underuses available modules/components, repeats
  the same layout too often, or lacks purposeful visual rhythm.
- Do not accept a new editorial, teaching, keynote, strategy, or storytelling
  deck with zero image-bearing slides unless the brief explicitly bans images.
  When images are used, they must be searched or user supplied, stored locally,
  source-noted, and inspected in screenshots.
- Do not interrupt execution with new preference questions that should have
  been asked during triage/plan. Use documented assumptions unless a newly
  discovered blocker could not reasonably have been known earlier.
- Prefer existing test patterns and repo commands over new tooling.
