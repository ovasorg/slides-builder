<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    density="compact"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="journey"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Adoption Mermaid journey' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid journey' },
  title: { type: String, default: 'Adoption journey' },
  insights: {
    type: Array,
    default: () => [
      { label: 'A', title: 'Human moment', detail: 'Connects technology with real experience.' },
      { label: 'B', title: 'Friction points', detail: 'Shows where change needs support.' },
      { label: 'C', title: 'Executive narrative', detail: 'Turns adoption into an easy story to follow.' }
    ]
  }
})

const defaultDiagram = `journey
  title Adoption journey
  section Discover
    Understand context: 4: User, Team
    Recognize friction: 3: User
  section Try
    First guided flow: 5: Team
    Resolve blocker: 2: Support
  section Scale
    Automate practice: 4: Team
    Measure outcome: 5: Leadership`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
