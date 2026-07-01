<template>
  <SharedPlatformMap v-bind="{ nodes, ...$attrs }" />
</template>

<script setup>
import SharedPlatformMap from '../../../shared/components/PlatformMap.vue'

const nodes = [
  { label: '01', title: 'Code', detail: 'Repos, branches, PRs', tone: 'blue' },
  { label: '02', title: 'Teams', detail: 'Owners, access, rules', tone: 'green' },
  { label: '03', title: 'Enterprise', detail: 'Governance, audit, scale', tone: 'amber' },
  { label: '04', title: 'Platform', detail: 'Security, automation, metrics', tone: 'rose' }
]
</script>
