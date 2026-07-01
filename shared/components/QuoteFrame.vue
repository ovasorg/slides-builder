<template>
  <figure class="quote-frame">
    <div class="quote-mark" aria-hidden="true">"</div>
    <blockquote>{{ quote }}</blockquote>
    <figcaption>
      <strong>{{ author }}</strong>
      <span>{{ role }}</span>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    default: 'Clarity is not decoration. It is part of the architecture.'
  },
  author: { type: String, default: 'Speaker' },
  role: { type: String, default: 'Session context' }
})
</script>
