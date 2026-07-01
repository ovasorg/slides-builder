<template>
  <div class="comparison-table" role="table" :aria-label="ariaLabel">
    <div class="comparison-row comparison-head" role="row">
      <span role="columnheader">{{ firstColumn }}</span>
      <strong v-for="column in columns" :key="column" role="columnheader">{{ column }}</strong>
    </div>
    <div
      v-for="(row, index) in rows"
      :key="row.label"
      v-motion
      :initial="{ opacity: 0, x: -12 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 70, duration: 420 } }"
      class="comparison-row"
      role="row"
    >
      <span role="rowheader">{{ row.label }}</span>
      <strong
        v-for="(value, valueIndex) in row.values"
        :key="`${row.label}-${valueIndex}`"
        :class="{ preferred: row.preferred === valueIndex }"
        role="cell"
      >
        {{ value }}
      </strong>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Comparison table' },
  firstColumn: { type: String, default: 'Criterion' },
  columns: {
    type: Array,
    default: () => ['Option A', 'Option B', 'Option C']
  },
  rows: {
    type: Array,
    default: () => [
      { label: 'Cost', values: ['Low', 'Medium', 'High'], preferred: 0 },
      { label: 'Control', values: ['Medium', 'High', 'High'], preferred: 1 },
      { label: 'Speed', values: ['High', 'Medium', 'Low'], preferred: 0 },
      { label: 'Scale', values: ['Medium', 'High', 'High'], preferred: 2 }
    ]
  }
})
</script>
