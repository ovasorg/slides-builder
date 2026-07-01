<template>
  <SharedSequenceDiagram v-bind="{ ariaLabel: 'Sequence diagram', messages, ...$attrs }" />
</template>

<script setup>
import SharedSequenceDiagram from '../../../shared/components/SequenceDiagram.vue'

const messages = [
  { from: 'speaker', to: 'deck', label: 'Define story', tone: 'blue' },
  { from: 'deck', to: 'audience', label: 'Show visual', tone: 'green' },
  { from: 'speaker', to: 'audience', label: 'Answer question', tone: 'rose' },
  { from: 'deck', to: 'audience', label: 'Close idea', tone: 'amber' }
]
</script>
