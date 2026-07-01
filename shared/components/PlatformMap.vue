<template>
  <div class="platform-map" :aria-label="ariaLabel">
    <div
      v-for="(node, index) in props.nodes"
      :key="node.title"
      v-motion
      :initial="{ opacity: 0, y: 18, scale: 0.96 }"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: index * 120, duration: 520 } }"
      class="platform-node"
      :class="node.tone"
    >
      <span>{{ node.label }}</span>
      <strong>{{ node.title }}</strong>
      <small>{{ node.detail }}</small>
    </div>
    <div class="platform-line platform-line-a" />
    <div class="platform-line platform-line-b" />
    <div class="platform-line platform-line-c" />
  </div>
</template>

<script setup>
const props = defineProps({
  ariaLabel: { type: String, default: 'Platform transformation map' },
  nodes: {
    type: Array,
    default: () => [
      { label: '01', title: 'Code', detail: 'Repos, branches, PRs', tone: 'blue' },
      { label: '02', title: 'Teams', detail: 'Owners, access, rules', tone: 'green' },
      { label: '03', title: 'Enterprise', detail: 'Governance, audit, scale', tone: 'amber' },
      { label: '04', title: 'Platform', detail: 'Security, automation, metrics', tone: 'rose' }
    ]
  }
})
</script>
