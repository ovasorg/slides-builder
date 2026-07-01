<template>
  <img :src="src" :alt="alt" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  alt: { type: String, default: '' }
})

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const src = computed(() => `${base}/media/${props.name}`)
</script>
