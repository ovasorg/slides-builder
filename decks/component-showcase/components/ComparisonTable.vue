<template>
  <SharedComparisonTable v-bind="{ ariaLabel: 'Comparison table', firstColumn: 'Criterion', columns, rows, ...$attrs }" />
</template>

<script setup>
import SharedComparisonTable from '../../../shared/components/ComparisonTable.vue'

const columns = ['Option A', 'Option B', 'Option C']
const rows = [
  { label: 'Cost', values: ['Low', 'Medium', 'High'], preferred: 0 },
  { label: 'Control', values: ['Medium', 'High', 'High'], preferred: 1 },
  { label: 'Speed', values: ['High', 'Medium', 'Low'], preferred: 0 },
  { label: 'Scale', values: ['Medium', 'High', 'High'], preferred: 2 }
]
</script>
