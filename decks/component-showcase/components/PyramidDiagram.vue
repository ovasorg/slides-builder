<template>
  <SharedPyramidDiagram v-bind="{ ariaLabel: 'Concept pyramid', levels, ...$attrs }" />
</template>

<script setup>
import SharedPyramidDiagram from '../../../shared/components/PyramidDiagram.vue'

const levels = [
  { label: '01', title: 'Vision', detail: 'Desired outcome', width: 42, tone: 'rose' },
  { label: '02', title: 'Model', detail: 'Operating design', width: 58, tone: 'amber' },
  { label: '03', title: 'System', detail: 'Shared capabilities', width: 74, tone: 'green' },
  { label: '04', title: 'Operations', detail: 'Daily execution', width: 90, tone: 'blue' }
]
</script>
