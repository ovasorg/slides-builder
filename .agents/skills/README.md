# Reusable Agent Skills

This folder contains repo-shipped Agent Skills for the `slides-builder` role
and related implementation work. `.agents/skills/` is the canonical,
vendor-neutral project location; each workflow is defined by `SKILL.md` using
the open Agent Skills structure.

Each project skill must include:

- `SKILL.md` with `name` and `description` frontmatter.
- `agents/openai.yaml` with `interface.display_name`,
  `interface.short_description`, and a `default_prompt` that names the skill
  with `$skill-name`.

Run `npm run check:agent` after adding or changing skills; it validates this
minimum structure for every repo-shipped skill.

## Skills

- `slide-spec-triage`: validate a user deck specification before generation,
  identify missing critical intake, and ask concise clarification questions.
- `slide-continuous-learning`: turn defects found during deck work into durable
  repo rules in the right spec, skill, template, or validator.
- `slide-deck-generator`: create or substantially modify Slidev-style decks
  from prompts using briefs, reusable components, local assets, and validation.
- `slide-visual-qa`: validate slide decks visually with builds, screenshots,
  contrast checks, and dynamic renderer checks.
- `tdd-implementation`: apply criteria-first/TDD discipline to code, docs,
  decks, workflows, and visual changes.

## Install

Tools that support the Agent Skills standard can discover this directory at
project scope. GitHub Copilot supports `.agents/skills/` directly. For tools
that require another location, copy the individual skill folders into that
tool's configured skills directory.

Example local install:

```bash
export AGENT_SKILLS_DIR="/path/to/your/agent/skills"
mkdir -p "$AGENT_SKILLS_DIR"
cp -R .agents/skills/slide-deck-generator \
  .agents/skills/slide-spec-triage \
  .agents/skills/slide-continuous-learning \
  .agents/skills/slide-visual-qa \
  .agents/skills/tdd-implementation \
  "$AGENT_SKILLS_DIR/"
```

Restart or reload the agent session so the skills are discovered.

## Agent Entry Point

The repo uses one vendor-neutral instruction source:

- `AGENTS.md` contains the canonical rules and points agents to this workflow
  catalog.
- `.github/agents/slides-builder.agent.md` exposes the role to Copilot without
  duplicating the canonical instructions.

Keep `AGENTS.md` and `.agents/skills/` as the source of truth. Tool-specific
files should remain thin discovery adapters only.

## Use

Ask naturally. Examples:

- "Create a new deck from this prompt..."
- "Validate this deck specification before creating slides..."
- "Run visual QA on this deck..."
- "Implement this change with TDD..."

The skills complement `AGENTS.md`; they do not replace repository rules.
