<template>
  <SharedEnterpriseTopology v-bind="{ nodes, ...$attrs }" />
</template>

<script setup>
import SharedEnterpriseTopology from '../../../shared/components/EnterpriseTopology.vue'

const nodes = [
  { code: 'SSO', title: 'Identity', detail: 'SAML · SCIM', tone: 'blue' },
  { code: 'ORG', title: 'Organizations', detail: 'Teams and domains', tone: 'green' },
  { code: 'SEC', title: 'Security', detail: 'Controls · rules', tone: 'amber' },
  { code: 'AUTO', title: 'Automation', detail: 'Pipelines · APIs', tone: 'rose' },
  { code: 'OBS', title: 'Audit', detail: 'Logs · metrics', tone: 'blue' },
  { code: 'AI', title: 'Assistance', detail: 'Guided adoption', tone: 'green' }
]
</script>
