<template>
  <figure class="media-frame" :class="[`media-${kind}`, `fit-${fit}`]">
    <div class="media-surface">
      <video
        v-if="kind === 'video' && src"
        :src="src"
        :poster="poster || undefined"
        :controls="controls"
        :autoplay="autoplay"
        :loop="loop"
        :muted="muted"
        playsinline
      />
      <img
        v-else-if="src"
        :src="src"
        :alt="alt || title"
      />
      <div v-else class="media-placeholder">
        <span>{{ kind }}</span>
        <strong>{{ title }}</strong>
      </div>
    </div>
    <figcaption v-if="caption || title">
      <span>{{ kindLabel }}</span>
      <strong>{{ caption || title }}</strong>
    </figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  kind: { type: String, default: 'image' },
  src: { type: String, default: '' },
  poster: { type: String, default: '' },
  title: { type: String, default: 'Media asset' },
  caption: { type: String, default: '' },
  alt: { type: String, default: '' },
  fit: { type: String, default: 'cover' },
  controls: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: false },
  loop: { type: Boolean, default: true },
  muted: { type: Boolean, default: true }
})

const kindLabel = computed(() => {
  if (props.kind === 'gif') return 'GIF'
  if (props.kind === 'video') return 'Video'
  return 'Image'
})
</script>
