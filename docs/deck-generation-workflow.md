# Deck Generation Workflow

This workflow adapts a lightweight Spec Kit-style model to the `slides-builder`
agent role. The goal is for a user to provide a prompt and receive a clean,
complete, validated deck without relying on chat memory.

## Principles

- Build from a specification, not loose intuition.
- Use `decks/<slug>/deck.brief.md` as the source of truth for every new deck.
- Ask when critical information is missing.
- Record assumptions in the brief.
- Store deck-owned media locally under `decks/<slug>/public/media/`.
- Use purposeful local images or media when the talk direction is editorial,
  teaching, keynote, strategy, storytelling, or human-centered, unless the
  brief explicitly bans images.
- Follow `AGENTS.md`, `docs/slide-guidelines.md`,
  `docs/component-catalog.md`, and `docs/style-catalog.md`.
- Use repo-shipped skills from `.agents/skills/` when available.

## Adopted Pattern

The decision is recorded in
`docs/adr/0001-spec-kit-lightweight-deck-generation.md`.

```text
Triage -> Questions -> Intake -> Brief -> Plan -> Tasks -> Implement -> Validate -> Learn -> Handoff
```

The repository does not maintain a separate OpenSpec-style change tree for
normal deck creation. A local `deck.brief.md` is enough for this use case.

## Flow

1. **Triage**
   Use `.agents/skills/slide-spec-triage/SKILL.md` to classify the prompt.
   Ask before creating files if critical information is missing or
   contradictory.

2. **Questions**
   Ask all known clarification questions here, before implementation starts.
   Group critical gaps into at most three concise questions. Do not defer
   preference or detail questions into execution; infer non-critical details
   and record assumptions.

3. **Intake**
   Complete the required fields from the prompt and triage answers. Record
   reasonable assumptions for non-critical fields.

4. **Brief**
   Create `decks/<slug>/deck.brief.md` from
   `docs/deck-brief-template.md`. Record prompt, requirements, acceptance
   criteria, constraints, required structural slides, assets, assumptions, and
   questions resolved before execution.

5. **Plan**
   Define narrative, approximate slide count, background mode, palette,
   components, visual rhythm, image/media plan, asset strategy, validation
   surface, and assumptions that will govern execution. Map the story to
   existing component catalog modules before deciding that custom layouts are
   needed.

6. **Tasks**
   Break the plan into concrete tasks: scaffold, content, components, media,
   metadata, styles, validation, and documentation.

7. **Implement**
   Copy or adapt `decks/_template`, reuse existing components, and create local
   components only when the catalog does not cover the need. Once this starts,
   continue from the plan without asking new preference questions unless a
   newly discovered blocker could not reasonably have been identified during
   triage/plan.

8. **Validate**
   Run `make check DECK=<slug>`. For new decks or substantial visual changes,
   inspect every slide and visible click/state at 1440x900. For small isolated
   visual edits, inspect every changed slide plus adjacent/risky slides.

9. **Learn**
   Use `slide-continuous-learning` when a fixed defect reveals a reusable rule
   that should update a spec, skill, doc, template, or validator.

10. **Handoff**
   Summarize changes, commands run, screenshot scope, assumptions, pending
   work, reusable lessons captured, and key paths.

## Required Intake

| Field | Critical | How To Resolve |
| --- | --- | --- |
| Topic or title | Yes | Ask if missing. |
| Audience | Yes | Ask if missing. |
| Audience level | Yes | Ask, or infer only if obvious. |
| Duration | Yes | Ask if missing. |
| Desired outcome | Yes | Ask what the audience should understand or do. |
| Required points | Yes | Ask for mandatory topics or permission to propose them. |
| Tone and context | Yes | Ask whether it is technical, executive, workshop, keynote, community, etc. |
| Constraints | Yes | Ask about internet, sources, brand, event, projector, language, and format. |
| Assets available | No | Infer `none` if not mentioned and record the assumption. |
| Suggested asset policy | No | Default to SVG Repo and Pexels/similar when useful. |
| Speaker/profile | No | Always include a data-driven speaker slide; default to `data/speaker/person.js` when no talk-specific speaker data is supplied. |
| Deliverables | No | Default to static HTML and local build. |
| Slug | No | Infer URL-friendly slug from title. |
| Background mode | Yes | Ask for light, dark, or black/keynote; infer light only if the user allows style decisions. |
| Palette | Yes | Choose from `docs/style-catalog.md` based on background mode. |

Ask at most three concise grouped questions when critical fields are missing.
All known questions must be asked during triage/questions/plan before
execution starts.

## Acceptance Criteria

A generated deck satisfies this workflow when:

- it has `deck.brief.md` with requirements and assumptions;
- it starts from `decks/_template`;
- deck media lives in `public/media/`;
- it reuses the catalog before creating new components;
- it uses varied slide compositions, suitable media/diagrams, and purposeful
  staging or motion instead of long static text runs;
- its narrative plan and slide count are credible for the requested duration;
- it includes purposeful local image-bearing slides when the visual direction
  calls for them and does not explicitly ban images;
- it includes enough frontmatter for the home page;
- it includes title/cover, speaker profile, and final close/Q&A slides;
- it passes `make check DECK=<slug>`;
- new decks have every slide and visible click/state inspected at 1440x900;
- essential rendering does not depend on the internet;
- it records background mode and palette;
- all required questions were asked before implementation, with non-critical
  gaps handled as documented assumptions;
- inferred information and open gaps are documented.
