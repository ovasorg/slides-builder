# Versioning And Release

This repository is released as a source workspace called `slides-builder`.
The package is not an npm library; it is a reproducible archive that lets a
person or agent create decks with the same structure, rules, skills,
components, and workflows.

## SemVer Policy

- `PATCH`: documentation, style, component, or workflow fixes that do not change
  public contracts.
- `MINOR`: new reusable components, skills, templates, reference decks, or
  compatible workflow improvements.
- `MAJOR`: incompatible changes to structure, commands, brief contract, asset
  locations, or agent workflow.

Version `1.0.0` is the first stable release of the `slides-builder` workspace.

## Local Preparation

1. Make sure you are on the branch you want to release.
2. Update package metadata:

   ```bash
   npm run release:prepare -- 1.0.0
   ```

3. Validate metadata and build:

   ```bash
   make release-check VERSION=1.0.0
   make build-all
   ```

4. Review status, commit, and push:

   ```bash
   git status
   git add package.json package-lock.json
   git commit -m "release: slides-builder v1.0.0"
   git push
   ```

Do not create release tags manually for normal releases. The workflow creates
tags after validation.

## Publication

1. Open **Actions** in GitHub.
2. Run **Release Package**.
3. Enter `version`, for example `1.0.0`.
4. Mark `prerelease` only for beta or release-candidate versions.

The workflow:

- installs dependencies with `npm ci`;
- validates `package.json` and `package-lock.json`;
- checks local scripts and runs `npm run build:all`;
- creates `dist/release/slides-builder-<version>.tgz`;
- creates and pushes annotated tag `v<version>`;
- publishes a GitHub Release with the package attached.

## Package Contents

The package is created with `git archive` from `HEAD`, so it includes only
tracked source files. It does not include `node_modules`, `dist`, `.slidev`,
`tmp`, or ignored QA artifacts.

To test packaging locally after committing:

```bash
make package VERSION=1.0.0
```

The package is written to:

```text
dist/release/slides-builder-1.0.0.tgz
```

## Relationship To Deployment

Release packaging and GitHub Pages deployment are separate:

- **Release Package** versions the workspace and publishes a reusable source
  archive.
- **Deploy Slides** publishes rendered decks to GitHub Pages.

If a version should also be published as a site, release the package first and
then run **Deploy Slides** with `target = all` or a specific deck.
