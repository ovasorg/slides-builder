# ADR 0002: Slides-builder Agent And Release Workflow

Status: accepted
Date: 2026-06-19

## Context

The repository is no longer only a personal Slidev workspace. It is intended to
be reusable by people and AI agents that receive a prompt and create a polished
deck using local rules, skills, components, assets, validation, and publishing
commands.

The project also needs a clear way to publish stable versions without implying
that it is an npm library.

## Decision

Name the agent role and reusable workspace `slides-builder`.

Use SemVer, annotated Git tags, and GitHub Releases for versioning. A release
publishes a source archive named `slides-builder-<version>.tgz` generated from
the released `HEAD`.

Use `.github/workflows/release.yml` as the canonical release path. The workflow
validates metadata, checks scripts, builds all decks, creates the package,
creates tag `v<version>`, and publishes the GitHub Release.

Do not publish to npm by default. Reconsider npm publication only if the repo
becomes a consumable CLI or library with a stable public API.

## Consequences

- Humans should start with `README.md`.
- Agents should start with `AGENTS.md` and `.agents/skills/`.
- New deck work should refer to the `slides-builder` role instead of a
  vendor-specific agent name.
- Releases require a package version update in `package.json` and
  `package-lock.json` before running the workflow.
- The package contains source files tracked by git, not generated deployment
  output.
- GitHub Pages deployment remains separate from release packaging.
