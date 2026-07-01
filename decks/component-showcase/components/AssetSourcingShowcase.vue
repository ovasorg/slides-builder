<template>
  <div class="asset-sourcing-showcase">
    <figure
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 520 } }"
      class="asset-photo"
    >
      <img :src="photoSrc" alt="People collaborating with laptops">
      <figcaption>
        <span>Pexels</span>
        <strong>Editorial photo downloaded into the deck</strong>
      </figcaption>
    </figure>

    <div class="asset-guidance">
      <div
        v-motion
        :initial="{ opacity: 0, x: 18 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 120, duration: 520 } }"
        class="asset-icon-card"
      >
        <img :src="iconSrc" alt="DevOps icon from SVG Repo">
        <div>
          <span>SVG Repo</span>
          <strong>Local SVG icons</strong>
          <small>Search by domain, validate the license, and save under `public/media/icons/`.</small>
        </div>
      </div>

      <div class="asset-rule-grid">
        <div v-for="item in rules" :key="item.title">
          <span>{{ item.label }}</span>
          <strong>{{ item.title }}</strong>
          <small>{{ item.copy }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL.replace(/\/$/, '')

const photoSrc = `${base}/media/pexels-collaboration-laptop.jpg`
const iconSrc = `${base}/media/icons/svgrepo-devops-deploy.svg`

const rules = [
  {
    label: '01',
    title: 'Purposeful',
    copy: 'The image should expand the slide idea, not decorate by habit.'
  },
  {
    label: '02',
    title: 'Local',
    copy: 'Download approved assets into the deck so Pages works without internet access.'
  },
  {
    label: '03',
    title: 'Traceable',
    copy: 'Keep the source, author, and license in deck documentation or metadata.'
  }
]
</script>
