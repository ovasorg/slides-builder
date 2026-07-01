<template>
  <div class="callout-stack">
    <article
      v-for="(item, index) in items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, x: -14 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 80, duration: 420 } }"
      :class="item.tone"
    >
      <span>{{ item.label }}</span>
      <strong>{{ item.title }}</strong>
      <small>{{ item.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      { label: 'Insight', title: 'The pattern is already visible.', detail: 'Make the signal easy to scan.', tone: 'blue' },
      { label: 'Risk', title: 'Complexity can hide the message.', detail: 'Remove details that do not earn their space.', tone: 'amber' },
      { label: 'Decision', title: 'Reuse the strongest visual.', detail: 'Validate it in the final slide context.', tone: 'green' }
    ]
  }
})
</script>
