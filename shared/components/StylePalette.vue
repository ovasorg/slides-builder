<template>
  <div class="style-palette-grid" aria-label="Palette catalog">
    <div
      v-for="(palette, index) in palettes"
      :key="palette.name"
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 90, duration: 420 } }"
      class="style-palette-card"
    >
      <div class="style-swatch-row">
        <span
          v-for="color in palette.colors"
          :key="color"
          :style="{ background: color }"
        />
      </div>
      <strong>{{ palette.name }}</strong>
      <small>{{ palette.className }}</small>
      <p>{{ palette.use }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  palettes: {
    type: Array,
    default: () => [
      {
        name: 'Enterprise Aurora',
        className: 'palette-aurora',
        use: 'Technical talks, platforms, and DevSecOps.',
        colors: ['#2f81f7', '#39c5cf', '#3fb950', '#a371f7']
      },
      {
        name: 'Research Lab',
        className: 'palette-lab',
        use: 'Research, teaching, data science, and technical demos.',
        colors: ['#47b8ff', '#32d6d3', '#38d996', '#f2c94c']
      },
      {
        name: 'Product Sunset',
        className: 'palette-sunset',
        use: 'Product, strategy, adoption, and storytelling.',
        colors: ['#7aa2ff', '#fb7185', '#fbbf24', '#c084fc']
      },
      {
        name: 'Executive Mono',
        className: 'palette-mono',
        use: 'Executive audiences, reports, and restrained narratives.',
        colors: ['#93c5fd', '#cbd5e1', '#86efac', '#fda4af']
      },
      {
        name: 'Carbon Focus',
        className: 'palette-carbon',
        use: 'Technical keynotes with high contrast and operational focus.',
        colors: ['#60a5fa', '#22d3ee', '#34d399', '#fb7185']
      },
      {
        name: 'Citrus Grid',
        className: 'palette-citrus',
        use: 'Workshops, labs, and energetic demos.',
        colors: ['#38bdf8', '#84cc16', '#facc15', '#a78bfa']
      },
      {
        name: 'Orchid Pulse',
        className: 'palette-orchid',
        use: 'AI, innovation, product, and visual narratives.',
        colors: ['#7dd3fc', '#5eead4', '#f472b6', '#c084fc']
      },
      {
        name: 'Crystal Day',
        className: 'palette-crystal',
        use: 'Light slides, dashboards, and close reading.',
        colors: ['#2563eb', '#0891b2', '#16a34a', '#e11d48']
      }
    ]
  }
})
</script>
