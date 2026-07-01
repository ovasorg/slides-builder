<template>
  <component
    :is="as"
    class="typing-title"
    :style="{
      '--typing-chars': text.length,
      '--typing-delay': `${delay}ms`
    }"
  >
    <span>{{ text }}</span>
  </component>
</template>

<script setup>
defineProps({
  as: { type: String, default: 'h1' },
  text: { type: String, required: true },
  delay: { type: Number, default: 0 }
})
</script>
