<template>
  <section class="browser-mockup browser-light" :class="[`browser-${variant}`]">
    <header class="browser-chrome">
      <div class="browser-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div class="browser-address">
        <span>{{ url }}</span>
      </div>
      <strong>{{ title }}</strong>
    </header>

    <div class="browser-body">
      <slot>
        <div class="browser-sidebar">
          <span v-for="item in nav" :key="item">{{ item }}</span>
        </div>
        <div class="browser-content">
          <article
            v-for="(card, index) in cards"
            :key="card.title"
            v-motion
            :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 80, duration: 420 } }"
          >
            <span>{{ card.kicker }}</span>
            <strong>{{ card.title }}</strong>
            <small>{{ card.detail }}</small>
          </article>
        </div>
      </slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'dashboard' },
  title: { type: String, default: 'Product mockup' },
  url: { type: String, default: 'https://example.local/workspace' },
  nav: {
    type: Array,
    default: () => ['Overview', 'Reports', 'Settings']
  },
  cards: {
    type: Array,
    default: () => [
      { kicker: 'Status', title: 'System ready', detail: 'All primary checks are passing.' },
      { kicker: 'Signal', title: 'Usage growing', detail: 'Teams are adopting the shared workflow.' },
      { kicker: 'Action', title: 'Review evidence', detail: 'Open the latest validation report.' }
    ]
  }
})
</script>
