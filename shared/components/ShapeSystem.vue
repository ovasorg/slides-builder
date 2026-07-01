<template>
  <div class="shape-system" role="img" :aria-label="ariaLabel">
    <div
      v-for="(shape, index) in shapes"
      :key="shape.label"
      v-motion
      :initial="{ opacity: 0, rotate: -8, scale: 0.9 }"
      :enter="{ opacity: 1, rotate: 0, scale: 1, transition: { delay: index * 90, duration: 460 } }"
      class="shape-token"
      :class="[shape.kind, shape.tone]"
    >
      <span>{{ shape.code }}</span>
      <strong>{{ shape.label }}</strong>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Shape system' },
  shapes: {
    type: Array,
    default: () => [
      { kind: 'circle', tone: 'blue', code: '01', label: 'Input' },
      { kind: 'diamond', tone: 'green', code: '02', label: 'Decision' },
      { kind: 'hex', tone: 'amber', code: '03', label: 'Process' },
      { kind: 'square', tone: 'rose', code: '04', label: 'Output' }
    ]
  }
})
</script>
