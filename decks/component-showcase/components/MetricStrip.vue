<template>
  <SharedMetricStrip v-bind="{ metrics, ...$attrs }" />
</template>

<script setup>
import SharedMetricStrip from '../../../shared/components/MetricStrip.vue'

const metrics = [
  { label: 'Reach', value: '42k', delta: '+18% this quarter', tone: 'blue' },
  { label: 'Quality', value: '98%', delta: 'Stable trend', tone: 'green' },
  { label: 'Risk', value: '7', delta: 'Low priority', tone: 'amber' },
  { label: 'Adoption', value: '3.4x', delta: 'Growing usage', tone: 'rose' }
]
</script>
