<template>
  <div class="decision-matrix" role="img" :aria-label="ariaLabel">
    <div class="matrix-axis matrix-axis-x">{{ xLabel }}</div>
    <div class="matrix-axis matrix-axis-y">{{ yLabel }}</div>
    <div class="matrix-quadrants">
      <span v-for="quadrant in quadrants" :key="quadrant">{{ quadrant }}</span>
    </div>
    <div
      v-for="(item, index) in items"
      :key="item.label"
      v-motion
      :initial="{ opacity: 0, scale: 0.88 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: index * 90, duration: 420 } }"
      class="matrix-point"
      :class="item.tone"
      :style="{ left: `${item.x}%`, bottom: `${item.y}%` }"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Decision matrix' },
  xLabel: { type: String, default: 'Impact' },
  yLabel: { type: String, default: 'Effort' },
  quadrants: {
    type: Array,
    default: () => ['Plan', 'Invest', 'Delegate', 'Automate']
  },
  items: {
    type: Array,
    default: () => [
      { label: 'A', x: 24, y: 72, tone: 'amber' },
      { label: 'B', x: 78, y: 78, tone: 'green' },
      { label: 'C', x: 34, y: 28, tone: 'blue' },
      { label: 'D', x: 70, y: 34, tone: 'rose' }
    ]
  }
})
</script>
