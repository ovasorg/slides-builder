<template>
  <div class="icon-grid">
    <article
      v-for="(item, index) in items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, y: 12 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 70, duration: 420 } }"
      :class="item.tone"
    >
      <span>{{ item.icon }}</span>
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
      { icon: 'API', title: 'Connect', detail: 'Integration point.', tone: 'blue' },
      { icon: 'SEC', title: 'Protect', detail: 'Reusable control.', tone: 'green' },
      { icon: 'OPS', title: 'Operate', detail: 'Continuous operation.', tone: 'amber' },
      { icon: 'AI', title: 'Assist', detail: 'Contextual assistance.', tone: 'rose' }
    ]
  }
})
</script>
