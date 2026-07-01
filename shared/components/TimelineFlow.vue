<template>
  <div class="timeline-flow">
    <article
      v-for="(item, index) in items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, y: 18 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 90, duration: 420 } }"
      :class="item.tone"
    >
      <span>{{ item.when }}</span>
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
      { when: 'T0', title: 'Discover', detail: 'Frame the problem.', tone: 'blue' },
      { when: 'T1', title: 'Design', detail: 'Shape the experience.', tone: 'green' },
      { when: 'T2', title: 'Operate', detail: 'Deliver with confidence.', tone: 'amber' },
      { when: 'T3', title: 'Scale', detail: 'Expand proven patterns.', tone: 'rose' }
    ]
  }
})
</script>
