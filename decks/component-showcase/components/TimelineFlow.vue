<template>
  <SharedTimelineFlow v-bind="{ items, ...$attrs }" />
</template>

<script setup>
import SharedTimelineFlow from '../../../shared/components/TimelineFlow.vue'

const items = [
  { when: 'T0', title: 'Discover', detail: 'Frame the problem.', tone: 'blue' },
  { when: 'T1', title: 'Design', detail: 'Shape the experience.', tone: 'green' },
  { when: 'T2', title: 'Operate', detail: 'Deliver with confidence.', tone: 'amber' },
  { when: 'T3', title: 'Scale', detail: 'Expand proven patterns.', tone: 'rose' }
]
</script>
