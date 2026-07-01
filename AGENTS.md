# Slides-builder Agent Specification

This repository is a multi-deck Slidev workspace for an AI-assisted agent role
called `slides-builder`. `AGENTS.md` is the canonical spec for agents creating,
editing, validating, documenting, versioning, and releasing presentations in
this repo.

## Mission

- Build presentations as code, using Slidev, Markdown, Vue, HTML, and CSS.
- Act as `slides-builder`: turn a user prompt into a clean, validated deck by
  asking for missing critical context, writing a brief, choosing components,
  organizing local assets, and proving the result.
- Prioritize usable decks over landing pages or generic documentation.
- Make each deck publishable as static HTML and exportable through the standard
  repo commands.
- Preserve a consistent visual and operational standard across future decks.

## Reusable Skills

- Use `.agents/skills/slide-spec-triage/SKILL.md` before creating or
  substantially changing a deck when the user specification may be incomplete.
- Use `.agents/skills/slide-continuous-learning/SKILL.md` whenever a deck,
  visual, workflow, approval, asset, or validation defect reveals a reusable
  process lesson that should update repository specs.
- Use `.agents/skills/tdd-implementation/SKILL.md` for non-trivial
  implementation work.
- Use `.agents/skills/slide-deck-generator/SKILL.md` for new decks or
  substantial deck changes.
- Use `.agents/skills/slide-visual-qa/SKILL.md` for visual validation and
  presentation readiness.

## Required Workflow

1. Inspect the existing deck and shared theme before editing.
2. Define acceptance criteria before implementation. Treat TDD broadly:
   tests first for code behavior, criteria/checks first for decks, docs,
   visuals, workflows, and deployment changes. For decks, include visual
   ambition as a quality gate: composition variety, meaningful use of existing
   components, suitable assets/diagrams, and restrained motion.
3. Complete the question window during triage/plan. Ask every known
   clarification question before execution starts, grouped into at most three
   concise questions when user input is required. Once implementation begins,
   do not interrupt with new preference or detail questions; proceed from the
   plan and documented assumptions unless a newly discovered blocker could not
   reasonably have been identified during triage.
4. Identify the validation surface before editing: unit/integration tests,
   build checks, screenshots, link checks, workflow syntax checks, or manual
   inspection evidence.
5. Use the existing structure and components when possible. For new or major
   deck work, inspect the component catalog during planning and intentionally
   map the story to reusable modules before creating custom layouts.
6. Make scoped changes only; avoid unrelated refactors.
7. After meaningful changes, run `make check DECK=<slug>`.
8. For new decks or substantial visual changes, inspect every slide and visible
   click/state at 1440x900 when a local server is available. For small isolated
   visual edits, inspect every changed slide plus adjacent/risky slides.
   Capture Slidev overview too when thumbnail overlap or clipping is reported.
9. Validate the acceptance criteria before handoff and report any criterion
   that could not be verified.
10. Use `slide-continuous-learning` to update the narrowest durable spec, skill,
   doc, template, or validator whenever a fixed issue should prevent future
   decks from repeating the same failure.
11. Document new reusable decisions in `docs/slide-guidelines.md`.

For routine local edits, validation, screenshots, and asset organization, ask
needed questions up front during triage/plan, then keep working and report the
final diff and validation evidence at handoff. Avoid interrupting the user for
file-by-file approvals or mid-execution preferences; only stop after execution
starts when a critical blocker is newly discovered, a destructive action is
needed, or an external policy/tool boundary genuinely requires approval.

## TDD And Quality Criteria

- Every implementation should start with a compact quality checklist: behavior,
  regression safety, maintainability, visual/readability expectations when
  relevant, and exact validation commands or inspections.
- For deck work, the checklist must cover aesthetics and dynamism, not only
  absence of defects: varied slide compositions, purposeful component reuse,
  effective media/diagrams, and motion that supports the talk track.
- Prefer existing tests and repo commands over new tooling. Add a new test only
  when it protects meaningful behavior or a reusable contract.
- For slide and documentation work, use criteria-first validation when a classic
  failing test is not practical: `make check`, browser screenshots, overview
  screenshots when useful, Mermaid render checks, link/path checks, and focused
  visual inspection are acceptable test surfaces.
- Do not mark work complete merely because files changed. Completion requires
  passing the selected checks or explicitly reporting the unverified gap.
- Do not treat a deck as ready when it merely builds and avoids overlap. New or
  substantially changed decks should feel intentionally composed and should not
  leave obvious catalog modules unused where they would improve comprehension.

## Commands

- `make install`: install dependencies.
- `make list`: list available decks.
- `make dev DECK=<slug> PORT=4100`: run a deck locally.
- `make build DECK=<slug>`: build one deck.
- `make build-all`: build every deck.
- `make pdf DECK=<slug>`: export PDF.
- `make pptx DECK=<slug>`: export PPTX.
- `make check DECK=<slug>`: syntax-check scripts and build the selected deck.
- `npm run check:agent`: validate project agent and skill discovery assets.
- `make release-check VERSION=<semver>`: validate release metadata.
- `make package VERSION=<semver>`: create the source release package.

Default deck:

```bash
make dev DECK=platform-engineering-that-teams-actually-adopt
make check DECK=platform-engineering-that-teams-actually-adopt
```

`make dev` resolves the requested deck first, accepts an unambiguous close deck
name typo, and then frees the requested `PORT` before starting Slidev. Do not
kill a running dev server when the requested deck cannot be resolved.

## Repo Structure

- `decks/<slug>/slides.md`: deck content and per-slide frontmatter.
- `decks/<slug>/components/`: Vue components owned by a deck.
- `decks/<slug>/styles/index.css`: per-deck CSS entrypoint.
- `decks/<slug>/slide-bottom.vue`: custom global bottom layer/navigation.
- `shared/components/`: reusable Vue components shared across decks.
- `shared/styles/theme.css`: shared visual system.
- `scripts/deck.mjs`: multi-deck dev/build/export wrapper.
- `docs/project-state.md`: current architecture and operating state.
- `docs/component-catalog.md`: reusable visual component catalog.
- `docs/style-catalog.md`: available palette and style catalog.
- `docs/new-deck-agent-guide.md`: prompt and workflow for new decks.
- `docs/deck-generation-workflow.md`: lightweight Spec Kit-style deck creation
  flow.
- `docs/deck-brief-template.md`: required brief template for new decks.
- `docs/release-workflow.md`: SemVer, tag, package, and GitHub Release process.
- `docs/adr/`: architecture decisions for repository workflows.
- `docs/slide-guidelines.md`: design and content guidelines.
- `.agents/skills/`: reusable, vendor-neutral Agent Skills workflows that users
  and agents can discover directly to reproduce this repository's
  deck-generation, visual-QA, and TDD workflows.
- `.github/agents/slides-builder.agent.md`: thin Copilot adapter that points to
  this canonical spec and the open-standard skills.
- `AGENTS.md`: canonical, vendor-neutral repository instructions for humans and
  coding agents.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.
- `.github/workflows/release.yml`: release package workflow.
- `decks/component-showcase/`: example deck that exercises the current visual
  component catalog.

## Deck Architecture

- A deck slug must be URL and folder friendly, for example
  `platform-engineering-that-teams-actually-adopt`.
- Each new deck should keep `decks/<slug>/deck.brief.md` with its prompt,
  requirements, assumptions, asset plan, validation plan, and handoff notes.
- New decks should start from `decks/_template`.
- Shared behavior belongs in `shared/`; deck-specific visuals belong in the
  deck folder.
- Deck-specific images, videos, GIFs, screenshots, community graphics, event
  art, and mascots belong in `decks/<slug>/public/media/`. Reference them as
  `media/<file>` in Markdown/props, or with `import.meta.env.BASE_URL` from
  Vue components.
- For any slide that uses an image, make asset search part of implementation:
  proactively search for relevant SVG icons from SVG Repo and editorial images
  from Pexels or similar reputable free-media sites when they improve
  comprehension, mood, or visual hierarchy. Download selected assets into the
  deck `public/media/` tree, keep source/license notes, and render them
  locally. Do not reuse one editorial image as multiple different assets merely
  by cropping or renaming it unless the brief intentionally defines that image
  as a repeated motif.
- For editorial, teaching, keynote, strategy, storytelling, or human-centered
  decks, include purposeful local image-bearing slides unless the brief
  explicitly bans images.
- Before creating a component, inspect `docs/component-catalog.md`.
- Put generic, data-driven components in `shared/components/` when they can be
  reused across decks through props or slots.
- Expose shared components to Slidev Markdown through local wrappers in
  `decks/<slug>/components/`, because Slidev auto-imports deck-local
  components.
- Deck-local components may be copied and generalized into a new deck when they
  are still too domain-specific for `shared/components/`.
- Do not add external rendering dependencies unless the deck cannot meet its
  goal without them.
- Do not rely on remote images, scripts, or fonts for core rendering.

## New Deck Agent Flow

- `slides-builder` is a vendor-neutral agent role, not a tool-specific brand.
  Any capable coding agent can perform the role by reading `AGENTS.md`,
  `.agents/skills/`, and the docs listed in this section.
- Prefer repo-shipped skills when available: `slide-spec-triage` before
  scaffolding when a deck prompt may be incomplete, `slide-deck-generator` for
  new decks, `slide-visual-qa` for visual review, `slide-continuous-learning`
  after fixing reusable defects, and `tdd-implementation` for criteria-first
  implementation. They live under `.agents/skills/` using the open Agent Skills
  structure for reuse by future projects and users.
- Read `docs/new-deck-agent-guide.md` before scaffolding a new presentation.
- Follow `docs/deck-generation-workflow.md`: Triage -> Questions -> Intake ->
  Brief -> Plan -> Tasks -> Implement -> Validate -> Learn -> Handoff.
- Before scaffolding, create or update `decks/<slug>/deck.brief.md` from
  `docs/deck-brief-template.md`. Treat it as the source of truth for the deck.
- Intake fields that must be recorded are: topic/title, audience, audience
  level, duration, desired outcome, required points, tone/context,
  constraints, asset policy, speaker/profile use, and deliverables.
- Critical intake fields are: topic/title, audience, audience level, duration,
  desired outcome, required points, tone/context, constraints, and visual
  background mode.
- If any critical field is missing or contradictory, ask all known
  clarification questions before scaffolding or implementation starts. Ask at
  most three concise grouped questions. Infer only non-critical fields such as
  slug, palette, slide count, and component choices, then document those
  assumptions in the brief.
- Start from `decks/_template`.
- Choose a palette from `docs/style-catalog.md` and apply it with a
  `palette-*` class in both `class` and `defaults.class`.
- Record whether the deck is `light`, `dark`, or `black/keynote` in
  `deck.brief.md`. Use `palette-crystal` for inferred light decks; use dark or
  near-black modes only when requested or clearly justified.
- Reuse `data/speaker/person.js` and create a deck-level `data/speaker.js` only
  for talk-specific overrides.
- Include title/cover, data-driven speaker profile, and final close/Q&A slides
  in every deck.
- Store deck-specific images, videos, GIFs, screenshots, and event graphics
  under `decks/<slug>/public/media/`.
- Use the component catalog before inventing new visuals.
- If a new component becomes reusable, document it in
  `docs/component-catalog.md`.
- When the component catalog changes, update `decks/component-showcase/`.
- `decks/component-showcase/` must demonstrate agnostic shared components and
  reusable sourcing/style patterns. Do not include product-specific local
  components such as GitHub-only mockups, flows, or CTAs in the showcase.
- When the style catalog changes, update `shared/styles/palettes.css`,
  `shared/components/StylePalette.vue`, `README.md`, `docs/style-catalog.md`,
  and `decks/component-showcase/`.
- If the deck becomes stable, add its slug to the `Deploy Slides` workflow
  dropdown.

## Deployment Standard

- GitHub Pages deployments are handled by the `Deploy Slides` workflow.
- The workflow must support manual `workflow_dispatch` deployment with a deck
  selector.
- GitHub Pages must be enabled manually once with source `GitHub Actions`.
  Do not rely on `actions/configure-pages` to create the Pages site; repository
  or organization policy can block that call for `GITHUB_TOKEN` with
  `Resource not accessible by integration`.
- Keep `all`, current stable deck slugs, and `custom` as deploy targets.
- When a new deck becomes stable, add its slug to the workflow dropdown so the
  owner can deploy it without remembering exact folder names.
- Selected-deck deploys replace the published Pages artifact with that deck and
  an index pointing to it. Use `all` when the public site should list every deck.

## Release Standard

- Use SemVer for workspace releases.
- Run `npm run release:prepare -- <version>` to update package metadata.
- Run `make release-check VERSION=<version>` and `make build-all` before
  publishing a release.
- Do not create normal release tags manually. Use the `Release Package`
  workflow so validation, package creation, tag creation, and GitHub Release
  publication happen together.
- Release tags use `v<version>`, for example `v0.2.0`.
- The release artifact is `slides-builder-<version>.tgz`, a git-archived source
  package from `HEAD`.
- Keep release packaging separate from GitHub Pages deployment.
- Follow `docs/release-workflow.md` and ADR 0002 for details.

## Visual Standard

- Use a light enterprise-tech visual language by default, with strong contrast,
  subtle grid, and polished product-like surfaces.
- Reserve dark palettes for talks that explicitly need a nocturnal, keynote, or
  high-contrast mood; never make new templates or showcase decks dark by
  default.
- Prefer a real slide experience: dense enough for a talk, minimal enough to be
  readable from a projector.
- Use gradient typography and gradient borders as signature styling.
- Use palette variables from `shared/styles/palettes.css`; do not fork the theme
  for one-off color changes.
- On dark slides, supporting copy and speaker-role text must remain high
  contrast. Use white or near-white for readable prose; reserve gray for labels,
  timestamps, or metadata that can safely be secondary.
- Use a subtle grid and restrained radial gradients for depth.
- Cards and panels should use `border-radius: 8px` unless a component has a
  specific reason to differ.
- Avoid one-color themes; combine blue, green, cyan, purple, amber, and rose as
  semantic accents.
- Never let decorative gradients, overlays, or glows reduce text contrast.
- Avoid nested card-in-card layouts unless the nested element represents a real
  product surface, modal, or repeated item.

## Typography

- Use large type only for true slide headlines and section breaks.
- Keep compact panels, cards, mockups, and navigation text smaller and stable.
- Do not use negative letter spacing.
- Do not scale text directly with viewport width.
- Confirm long Spanish headings fit at 1440x900.
- If a headline is too long, rewrite it or split it intentionally; do not rely
  on clipping or overflow.

## Animation Standard

- Use motion to clarify order, hierarchy, or transformation.
- Prefer smooth `fade`, `slide-left`, and `slide-up` transitions.
- Avoid `view-transition` or flash-like transitions in projector decks.
- Use `v-click` for progressive disclosure.
- Use `v-motion` for components that enter, move, or stage information.
- Keep most durations between 420ms and 680ms.
- Typewriter/code-writing effects are allowed only on selected high-impact
  titles.
- The typewriter effect must not show a vertical caret, border, cursor line, or
  fake terminal prompt unless explicitly requested.
- The typewriter effect should reveal text cleanly without leaving a persistent
  visual mark after the animation.
- Do not animate every object on a slide; the deck should feel intentional, not
  noisy.
- Native PowerPoint click animations are not supported by Slidev PPTX export.
  Treat PPTX as static snapshots. Use hosted Slidev for live motion, or model
  progressive disclosure as separate slides/click states for export.

## Navigation

- Prefer Slidev native navigation when it can be styled cleanly.
- Native navigation icons must remain visible in play mode and presenter mode.
- Do not hide the native ribbon just to solve contrast; fix icon color,
  background, borders, and hover states instead.
- Avoid duplicating navigation ribbons. Use a custom `slide-bottom.vue` only
  when the native controls cannot support the required workflow.
- The grid action must open the visual Slidev overview with slide thumbnails,
  not a numbers-only picker.
- Keep the mouse cursor visible over controls; do not use `cursor: none`.
- When capturing screenshots, move the mouse outside the deck viewport or away
  from navigation controls.

## Mockups, Graphics, And Screenshots

- Prefer HTML/CSS/Vue mockups over static screenshots when real platform access
  or permissions are not available.
- Mockups should feel like product surfaces, but should avoid copying sensitive
  or private UI.
- New or substantially changed decks must intentionally use the available
  visual catalog where it clarifies the story: media frames, mockups, diagrams,
  timelines, swimlanes, matrices, charts, or staged reveals should not be
  skipped in favor of same-looking text slides.
- Use grid-based top bars when badges sit next to long titles, so text cannot
  collide.
- Use Vue components for diagrams, flows, dashboards, topology maps, radars,
  maturity curves, and platform surfaces.
- Prefer the shared catalog for common visual primitives: browser mockups,
  metrics, comparison tables, decision matrices, hierarchy trees, icon grids,
  timelines, swimlanes, pyramids, Venn diagrams, callout stacks, quotes,
  architecture layers, media frames, and 3D stages.
- Use `BrowserMockup` for generic product surfaces; keep `GitHubMockup` for
  GitHub-specific screens.
- Use `Shape3DStage` for 3D slides and validate that its canvas renders nonblank
  in Playwright screenshots.
- Screenshots are acceptable only when the user provides them or asks for them,
  and when they are readable at presentation size.
- The generated home/gallery must preview decks with real screenshots captured
  from the built first slide. Do not replace deck previews with synthetic cards
  that drift from the actual slide design.
- Do not use blurry, cropped, stock-like, or purely atmospheric visuals when the
  audience needs to understand a platform concept.

## Content Standard

- Present the requested topic from the audience's operating context, not only
  from a feature or tool perspective.
- Connect strategy, process, roles, risks, controls, adoption, and measurable
  outcomes when they are relevant to the deck.
- Include practical operating lessons, not only feature lists.
- Prefer short phrases written for spoken delivery.
- For a 30 minute talk, target roughly 24-32 slides.
- For a 60 minute talk, target roughly 36-45 slides unless the format is a
  workshop, demo-heavy session, or intentionally sparse keynote. The brief's
  narrative plan must explain slide count and section depth relative to
  duration.
- Use section breaks every 5-7 slides to reset attention.
- Include a clear final takeaway or operating model.
- Section markers should read as intentional navigation, not decorative
  watermarks that compete with titles. Keep section numbers outside headline
  text flow and validate long section titles at 1440x900.

## Speaker Profile Slides

- Speaker/profile slides are required in every deck and must be data-driven,
  not hardcoded only in Markdown.
- Root personal data is canonical in `data/speaker/speaker.json`, with
  `data/speaker/person.js` as the Vite-facing wrapper. These files are for
  stable owner metadata shared by all decks: name, email, role/headline,
  organization, location, public profiles, QR image references, profile image
  references, reusable roles, and reusable tags.
- Deck-specific speaker files may exist at `decks/<slug>/data/speaker.js`, but
  they must import `person` from `data/speaker/person.js` and override only
  talk-specific fields such as `talkRole`, deck-specific roles, or deck-specific
  tags.
- Prefer a `data/<name>.js` file plus a reusable Vue component when a deck has
  additional data beyond the root `person` object.
- Include profile metadata organically:
  - name,
  - email when the owner wants it public,
  - role/headline,
  - organization,
  - relevant affiliations,
  - GitHub handle,
  - LinkedIn handle,
  - X/Twitter handle when relevant,
  - ORCID only when the speaker uses it or the talk has research context.
- Do not overload the profile slide with a full CV.
- The profile slide should connect the speaker's background to the talk topic.
- Avoid repeated identity blocks on speaker and closing slides. If a handle,
  talk title, QR label, or role is already clear from context, hide it instead
  of repeating it.
- `SpeakerProfile` can hide the top metadata block and QR label with props when
  a deck needs a cleaner profile slide.
- QR codes must be real image assets, not AI-generated fake QR codes.
- Until the QR image is provided, use a clear visual placeholder and document
  the expected file path.
- Store shared speaker assets next to the speaker data:

```text
data/speaker/linkedin-qr.svg
```

- If an asset is imported from `data/speaker/person.js`, use Vite asset imports
  with `?url`, for example `./linkedin-qr.svg?url`.
- Use `import.meta.env.BASE_URL` only for string paths that intentionally point
  to a deck's `public/` folder.
- Deck-specific media assets must live under:

```text
decks/<slug>/public/media/
```

- Keep the root data as the source of truth. Do not duplicate unchanged personal
  metadata inside Markdown slides or deck-specific data files.
- Never use a QR screenshot that is blurry, cropped, or impossible to scan.

## Template Repository Context

This repository is the public `slides-builder` template. Keep it reusable and
safe to fork:

- Keep reusable infrastructure, `decks/_template`, `component-showcase`, and the
  platform-engineering example deck.
- Do not add personal talks, private client material, personal CV details, or
  organization-specific assets to this template.
- Personal decks belong in a fork or downstream repository, commonly named
  `slides`, with this repository configured as upstream.
- Speaker data in the template must stay generic. Downstream forks can replace
  `data/speaker/speaker.json` with personal metadata.

## Validation

- Run `make check DECK=<slug>` after meaningful changes.
- Treat build warnings from dependencies as non-blocking only when the build
  exits successfully and the warning is unrelated to authored code.
- Validate at least:
  - every slide and visible click/state for a new deck or major visual change,
  - every changed slide plus adjacent/risky slides for a small isolated edit,
  - cover, speaker, dense content, section, chart/media/mockup, closing, and
    Q&A slides,
  - navigation visibility.
- Check for:
  - text overlap,
  - text clipping,
  - unreadable contrast,
  - badges colliding with titles,
  - section numbers, labels, or decorative marks looking like rendering errors,
  - native Slidev UI leaking into the deck,
  - mouse pointer artifacts,
  - excessive or distracting transitions.

## Documentation Rules

- Update `docs/slide-guidelines.md` when a reusable design rule changes.
- Update `README.md` and `docs/component-catalog.md` in the same commit that
  creates, deletes, renames, promotes, or meaningfully changes a visual
  component.
- Update `decks/component-showcase/` in the same commit when the visible
  component catalog changes.
- If a component is promoted to `shared/components/`, update
  `shared/components/README.md` in the same commit.
- Do not document temporary experiments as standards unless the user approves
  them or they become part of the final deck direction.
