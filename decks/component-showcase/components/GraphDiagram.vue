<template>
  <SharedGraphDiagram v-bind="{ ariaLabel: 'Relationship graph', nodes, ...$attrs }" />
</template>

<script setup>
import SharedGraphDiagram from '../../../shared/components/GraphDiagram.vue'

const nodes = [
  { id: 'idea', label: 'Idea', detail: 'Narrative', x: 150, y: 210, tone: 'blue' },
  { id: 'data', label: 'Data', detail: 'Inputs', x: 360, y: 110, tone: 'green' },
  { id: 'visual', label: 'Visual', detail: 'Model', x: 560, y: 210, tone: 'amber' },
  { id: 'outcome', label: 'Outcome', detail: 'Decision', x: 760, y: 310, tone: 'rose' }
]
</script>
