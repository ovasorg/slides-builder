# Slides-builder Repository Instructions

Read `AGENTS.md` as the canonical repository specification.

Discover reusable workflows under `.agents/skills/`. Select the matching skill
from its `name` and `description` frontmatter, read its complete `SKILL.md`, and
follow it before implementing the task.

Use criteria-first/TDD validation for non-trivial changes. Run
`make check DECK=<slug>` after meaningful deck changes and inspect every
slide/click-state for new decks or major visual changes in a browser at
1440x900. Ask all known questions during triage/plan when critical new-deck
intake is missing or contradictory; otherwise batch local edits and report
validation at handoff without mid-execution preference prompts.
When a fixed defect reveals a reusable process lesson, update the narrowest
durable spec, skill, doc, template, or validator before handoff.
