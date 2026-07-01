<template>
  <SharedDecisionMatrix
    v-bind="{
      ariaLabel: 'Decision matrix',
      xLabel: 'Impact',
      yLabel: 'Effort',
      quadrants,
      ...$attrs
    }"
  />
</template>

<script setup>
import SharedDecisionMatrix from '../../../shared/components/DecisionMatrix.vue'

const quadrants = ['Plan', 'Invest', 'Delegate', 'Automate']
</script>
