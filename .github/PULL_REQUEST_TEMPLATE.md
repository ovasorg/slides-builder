## Summary

Describe what changed and why.

## Validation

- [ ] `node --check scripts/deck.mjs`
- [ ] `node --check scripts/release.mjs`
- [ ] `make check DECK=<slug>`
- [ ] `make build-all` when shared code, docs, workflows, or release behavior changed

## Visual QA

- [ ] Cover slide checked
- [ ] Dense/internal slide checked
- [ ] Media/Mermaid/ECharts/3D/mockup slide checked when relevant
- [ ] Navigation remains visible

## Notes

- PPTX exports are static snapshots; native PowerPoint click animations are not
  expected.
