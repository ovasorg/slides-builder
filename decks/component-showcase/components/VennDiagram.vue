<template>
  <SharedVennDiagram v-bind="{ ariaLabel: 'Venn diagram', center, circles, ...$attrs }" />
</template>

<script setup>
import SharedVennDiagram from '../../../shared/components/VennDiagram.vue'

const center = { label: 'Fit', title: 'Decision' }
const circles = [
  { title: 'Desirable', detail: 'User', tone: 'blue' },
  { title: 'Viable', detail: 'Business', tone: 'green' },
  { title: 'Feasible', detail: 'Technology', tone: 'rose' }
]
</script>
