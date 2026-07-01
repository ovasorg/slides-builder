---
name: slide-continuous-learning
description: Capture lessons from slide-deck defects and turn them into durable repository rules. Use when Codex fixes a visual, content, validation, workflow, approval, asset, or deck-structure problem and should update AGENTS.md, skills, docs, templates, or validators so future decks avoid the same failure.
---

# Slide Continuous Learning

## Purpose

Use this skill after a real defect is found or fixed. Convert the lesson into
the smallest durable rule that future deck work will actually follow.

## Workflow

1. Name the defect concretely.
   - Bad: "visual issue"
   - Good: "section watermark numbers overlapped long headlines and looked like broken content"
2. Decide whether the lesson generalizes.
   - Generalize when the issue could happen in future decks, templates, shared
     components, validation, asset handling, approvals, or handoff.
   - Keep local when it is truly one deck's content or art direction.
3. Choose the narrowest durable home.
   - `AGENTS.md`: mandatory operating rule for all agents.
   - `.agents/skills/<skill>/SKILL.md`: repeatable workflow step.
   - `docs/slide-guidelines.md`: reusable visual/content standard.
   - `docs/new-deck-agent-guide.md` or `docs/deck-generation-workflow.md`:
     deck-generation process.
   - `docs/deck-brief-template.md`: intake or acceptance criteria.
   - `scripts/validate-agent-assets.mjs`: structural validation for skills or
     agent assets.
4. Write the rule as an actionable guardrail.
   - Prefer "Inspect every slide at 1440x900 for new decks" over "be careful
     with visuals."
   - Include the failure mode the rule prevents when that improves compliance.
5. Validate the updated rule.
   - Run `npm run check:agent` after skill or agent-spec changes.
   - Run the deck-specific check/build when the lesson affects deck output.
   - Reinspect screenshots for the original defect when the lesson came from
     visual QA.
6. Report the learning in the handoff.
   - State the defect fixed.
   - State the durable rule added or changed.
   - State the validation command or screenshot set used.

## Anti-Patterns

- Do not add vague reminders such as "ensure quality" or "avoid issues."
- Do not document temporary experiments as standards.
- Do not broaden a one-off local design preference into a global rule.
- Do not skip updating specs when the user identifies a repeated process gap.
