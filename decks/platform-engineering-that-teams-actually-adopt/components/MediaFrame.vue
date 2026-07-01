<template>
  <SharedMediaFrame v-bind="$attrs" :src="src" />
</template>

<script setup>
import SharedMediaFrame from '../../../shared/components/MediaFrame.vue'
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true }
})

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const src = computed(() => `${base}/media/${props.name}`)
</script>
