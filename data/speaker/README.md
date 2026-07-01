# Speaker Data And Assets

This folder is the canonical home for repository-wide speaker metadata and
speaker-owned public assets reused by multiple decks.

Current canonical files:

```text
data/speaker/person.js
data/speaker/speaker.json
data/speaker/linkedin-qr.svg
```

Edit stable speaker metadata in `speaker.json`. `person.js` is the Vite-facing
wrapper that imports local assets with `?url` and exposes the `person` object
used by decks.

Reference shared assets from `data/speaker/person.js` using Vite `?url` imports
relative to this folder. Keep deck-specific copies only when a presentation
needs a different QR, profile photo, badge, or event-specific graphic.

Deck-specific images, videos, GIFs, screenshots, and event graphics belong under
`decks/<slug>/public/media/`, not in this folder.

Use deck-level `decks/<slug>/data/speaker.js` files only for talk-specific
overrides such as `talkRole`, selected profiles, tags, or roles. Avoid repeating
stable identity data in Markdown. If a profile or closing slide feels crowded,
prefer hiding redundant labels/metadata instead of duplicating handles or QR
descriptions.
