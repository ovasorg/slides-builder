<template>
  <SharedMaturityCurve v-bind="{ points, ...$attrs }" />
</template>

<script setup>
import SharedMaturityCurve from '../../../shared/components/MaturityCurve.vue'

const points = [
  { x: 110, y: 230, title: 'Chaos', detail: 'Loose repos' },
  { x: 350, y: 172, title: 'Order', detail: 'Standards' },
  { x: 610, y: 88, title: 'Scale', detail: 'Self-service' },
  { x: 790, y: 58, title: 'Platform', detail: 'Measurement' }
]
</script>
