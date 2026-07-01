<template>
  <div class="maturity-curve">
    <svg viewBox="0 0 900 280" role="img">
      <path d="M110 230 C225 220 270 184 350 172 C470 152 500 96 610 88 C700 82 735 62 790 58" class="curve-line" />
      <g v-for="point in props.points" :key="point.title">
        <circle :cx="point.x" :cy="point.y" r="10" class="curve-dot" />
        <text :x="point.x" :y="point.y - 24">{{ point.title }}</text>
        <text :x="point.x" :y="point.y + 42" class="curve-small">{{ point.detail }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  points: {
    type: Array,
    default: () => [
      { x: 110, y: 230, title: 'Chaos', detail: 'Loose repos' },
      { x: 350, y: 172, title: 'Order', detail: 'Standards' },
      { x: 610, y: 88, title: 'Scale', detail: 'Self-service' },
      { x: 790, y: 58, title: 'Platform', detail: 'Measurement' }
    ]
  }
})
</script>
