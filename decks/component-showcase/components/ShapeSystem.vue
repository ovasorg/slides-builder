<template>
  <SharedShapeSystem v-bind="{ ariaLabel: 'Shape system', shapes, ...$attrs }" />
</template>

<script setup>
import SharedShapeSystem from '../../../shared/components/ShapeSystem.vue'

const shapes = [
  { kind: 'circle', tone: 'blue', code: '01', label: 'Input' },
  { kind: 'diamond', tone: 'green', code: '02', label: 'Decision' },
  { kind: 'hex', tone: 'amber', code: '03', label: 'Process' },
  { kind: 'square', tone: 'rose', code: '04', label: 'Output' }
]
</script>
