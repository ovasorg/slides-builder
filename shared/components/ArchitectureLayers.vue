<template>
  <div class="architecture-layers">
    <article
      v-for="(layer, index) in layers"
      :key="layer.title"
      v-motion
      :initial="{ opacity: 0, x: -16 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 90, duration: 420 } }"
      :class="layer.tone"
    >
      <span>{{ layer.label }}</span>
      <strong>{{ layer.title }}</strong>
      <small>{{ layer.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  layers: {
    type: Array,
    default: () => [
      { label: 'L4', title: 'Experience', detail: 'Users, workflows, and adoption.', tone: 'rose' },
      { label: 'L3', title: 'Platform', detail: 'Services, APIs, and extensibility.', tone: 'blue' },
      { label: 'L2', title: 'Governance', detail: 'Policies, ownership, and evidence.', tone: 'green' },
      { label: 'L1', title: 'Foundation', detail: 'Identity, data, and operations.', tone: 'amber' }
    ]
  }
})
</script>
