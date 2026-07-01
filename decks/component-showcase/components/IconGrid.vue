<template>
  <SharedIconGrid v-bind="{ items, ...$attrs }" />
</template>

<script setup>
import SharedIconGrid from '../../../shared/components/IconGrid.vue'

const items = [
  { icon: 'API', title: 'Connect', detail: 'Integration point.', tone: 'blue' },
  { icon: 'SEC', title: 'Protect', detail: 'Reusable control.', tone: 'green' },
  { icon: 'OPS', title: 'Operate', detail: 'Continuous operation.', tone: 'amber' },
  { icon: 'AI', title: 'Assist', detail: 'Contextual assistance.', tone: 'rose' }
]
</script>
