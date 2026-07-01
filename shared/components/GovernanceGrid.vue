<template>
  <div class="governance-grid">
    <div
      v-for="(item, index) in props.items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 110, duration: 480 } }"
      class="governance-item"
    >
      <span>{{ item.code }}</span>
      <strong>{{ item.title }}</strong>
      <small>{{ item.detail }}</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { code: 'ID', title: 'Identity', detail: 'SSO, SCIM, roles, and least access.' },
      { code: 'OWN', title: 'Ownership', detail: 'Clear owners by domain and product.' },
      { code: 'POL', title: 'Policies', detail: 'Consistent rules without slowing teams down.' },
      { code: 'AUD', title: 'Audit', detail: 'Traceability to operate with confidence.' }
    ]
  }
})
</script>
