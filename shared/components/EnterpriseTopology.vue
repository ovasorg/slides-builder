<template>
  <div class="enterprise-topology">
    <div class="topology-center">
      <span>{{ centerLabel }}</span>
      <strong>{{ centerTitle }}</strong>
    </div>
    <div
      v-for="(node, index) in props.nodes"
      :key="node.title"
      v-motion
      :initial="{ opacity: 0, scale: 0.86 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: index * 110, duration: 520 } }"
      class="topology-node"
      :class="node.tone"
    >
      <span>{{ node.code }}</span>
      <strong>{{ node.title }}</strong>
      <small>{{ node.detail }}</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  centerLabel: { type: String, default: 'Enterprise' },
  centerTitle: { type: String, default: 'Platform' },
  nodes: {
    type: Array,
    default: () => [
      { code: 'SSO', title: 'Identity', detail: 'SAML · SCIM', tone: 'blue' },
      { code: 'ORG', title: 'Organizations', detail: 'Teams and domains', tone: 'green' },
      { code: 'SEC', title: 'Security', detail: 'Controls · rules', tone: 'amber' },
      { code: 'AUTO', title: 'Automation', detail: 'Pipelines · APIs', tone: 'rose' },
      { code: 'OBS', title: 'Audit', detail: 'Logs · metrics', tone: 'blue' },
      { code: 'AI', title: 'Assistance', detail: 'Guided adoption', tone: 'green' }
    ]
  }
})
</script>
