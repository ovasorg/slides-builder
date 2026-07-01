<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="quadrant"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Decision Mermaid quadrant chart' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid quadrantChart' },
  title: { type: String, default: 'Decision map' },
  insights: {
    type: Array,
    default: () => [
      { label: 'Focus', title: 'High impact', detail: 'Shows quickly where energy is worth investing.' },
      { label: 'Avoid', title: 'Low return', detail: 'Makes initiatives that can wait visible.' },
      { label: 'Balance', title: 'Trade-offs', detail: 'Supports one conversation about cost, value, and risk.' }
    ]
  }
})

const defaultDiagram = `quadrantChart
  title Initiative prioritization
  x-axis Low effort --> High effort
  y-axis Low impact --> High impact
  quadrant-1 Strategic bets
  quadrant-2 Quick wins
  quadrant-3 Avoid for now
  quadrant-4 Plan carefully
  "Automate evidence": [0.28, 0.78]
  "Standardize templates": [0.36, 0.62]
  "Mass migration": [0.82, 0.72]
  "Manual report": [0.24, 0.24]
  "Complex integration": [0.76, 0.36]`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
