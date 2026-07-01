<template>
  <section class="mermaid-syntax-catalog" aria-label="Mermaid syntax catalog">
    <header>
      <span>{{ kicker }}</span>
      <strong>{{ title }}</strong>
      <small>{{ detail }}</small>
    </header>

    <div class="mermaid-syntax-grid">
      <article
        v-for="entry in entries"
        :key="entry.id"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: entry.index * 34, duration: 320 } }"
        :class="`is-${entry.status}`"
        :title="entry.use"
      >
        <div>
          <span>{{ statusLabel(entry.status) }}</span>
          <code>{{ entry.keyword }}</code>
        </div>
        <strong>{{ entry.title }}</strong>
        <small>{{ entry.use }}</small>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { mermaidStatusLabels, mermaidSyntaxCatalog } from './mermaidSyntaxCatalog.js'

const props = defineProps({
  detail: {
    type: String,
    default: 'Use MermaidDiagram for any starter and presets when you want a curated visual.'
  },
  entries: { type: Array, default: () => mermaidSyntaxCatalog },
  kicker: { type: String, default: 'Mermaid syntax' },
  title: { type: String, default: 'Map of possibilities' }
})

const entries = computed(() => props.entries.map((entry, index) => ({ ...entry, index })))
const statusLabel = (status) => mermaidStatusLabels[status] ?? status
</script>
