<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    density="compact"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="roadmap"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Roadmap Mermaid timeline' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid timeline' },
  title: { type: String, default: 'Executive roadmap' },
  insights: {
    type: Array,
    default: () => [
      { label: 'Now', title: 'Baseline', detail: 'Grounds the starting point and enablers.' },
      { label: 'Next', title: 'Change', detail: 'Orders initiatives into communicable phases.' },
      { label: 'Later', title: 'Scale', detail: 'Keeps the expected outcome visible.' }
    ]
  }
})

const defaultDiagram = `timeline
  title Platform roadmap
  Now : Inventory
      : Minimum guardrails
      : First metrics
  Next : Automation
       : Component reuse
       : Guided experience
  Later : Scaled operation
        : Continuous governance
        : Data-driven improvement`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
