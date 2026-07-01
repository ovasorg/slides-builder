<template>
  <SharedSwimlaneFlow v-bind="{ ariaLabel: 'Swimlane flow', lanes, ...$attrs }" />
</template>

<script setup>
import SharedSwimlaneFlow from '../../../shared/components/SwimlaneFlow.vue'

const lanes = [
  { label: 'Team', steps: ['Idea', 'Change', 'Feedback'] },
  { label: 'Platform', steps: ['Policy', 'Pipeline', 'Release'] },
  { label: 'Risk', steps: ['Control', 'Review', 'Evidence'] }
]
</script>
