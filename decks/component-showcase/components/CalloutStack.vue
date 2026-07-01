<template>
  <SharedCalloutStack v-bind="{ items, ...$attrs }" />
</template>

<script setup>
import SharedCalloutStack from '../../../shared/components/CalloutStack.vue'

const items = [
  { label: 'Insight', title: 'The pattern is already visible.', detail: 'Make the signal easy to scan.', tone: 'blue' },
  { label: 'Risk', title: 'Complexity can hide the message.', detail: 'Remove details that do not earn their space.', tone: 'amber' },
  { label: 'Decision', title: 'Reuse the strongest visual.', detail: 'Validate it in the final slide context.', tone: 'green' }
]
</script>
