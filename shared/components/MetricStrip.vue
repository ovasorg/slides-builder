<template>
  <div class="metric-strip">
    <article
      v-for="(metric, index) in metrics"
      :key="metric.label"
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 80, duration: 420 } }"
      :class="metric.tone"
    >
      <span>{{ metric.label }}</span>
      <strong>{{ metric.value }}</strong>
      <small>{{ metric.delta }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  metrics: {
    type: Array,
    default: () => [
      { label: 'Reach', value: '42k', delta: '+18% this quarter', tone: 'blue' },
      { label: 'Quality', value: '98%', delta: 'Stable trend', tone: 'green' },
      { label: 'Risk', value: '7', delta: 'Low priority', tone: 'amber' },
      { label: 'Adoption', value: '3.4x', delta: 'Growing usage', tone: 'rose' }
    ]
  }
})
</script>
