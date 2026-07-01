<template>
  <div class="graph-diagram">
    <svg viewBox="0 0 900 420" role="img" :aria-label="ariaLabel">
      <defs>
        <marker :id="markerId" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
          <path d="M0,0 L8,4 L0,8 Z" class="graph-arrow" />
        </marker>
      </defs>
      <line
        v-for="(edge, index) in edges"
        :key="`${edge.from}-${edge.to}-${index}`"
        :x1="nodeById(edge.from).x"
        :y1="nodeById(edge.from).y"
        :x2="nodeById(edge.to).x"
        :y2="nodeById(edge.to).y"
        class="graph-edge"
        :marker-end="`url(#${markerId})`"
      />
      <g
        v-for="(node, index) in nodes"
        :key="node.id"
        v-motion
        :initial="{ opacity: 0, scale: 0.88 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: index * 90, duration: 460 } }"
        class="graph-node"
        :class="node.tone"
      >
        <circle :cx="node.x" :cy="node.y" r="44" />
        <text :x="node.x" :y="node.y - 5" class="graph-title">{{ node.label }}</text>
        <text :x="node.x" :y="node.y + 18" class="graph-detail">{{ node.detail }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { useId } from 'vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Relationship graph' },
  nodes: {
    type: Array,
    default: () => [
      { id: 'idea', label: 'Idea', detail: 'Narrative', x: 150, y: 210, tone: 'blue' },
      { id: 'data', label: 'Data', detail: 'Inputs', x: 360, y: 110, tone: 'green' },
      { id: 'visual', label: 'Visual', detail: 'Model', x: 560, y: 210, tone: 'amber' },
      { id: 'outcome', label: 'Outcome', detail: 'Decision', x: 760, y: 310, tone: 'rose' }
    ]
  },
  edges: {
    type: Array,
    default: () => [
      { from: 'idea', to: 'data' },
      { from: 'data', to: 'visual' },
      { from: 'visual', to: 'outcome' },
      { from: 'idea', to: 'visual' }
    ]
  }
})

const markerId = `graph-arrow-${useId().replaceAll(':', '')}`
const fallbackNode = { x: 0, y: 0 }
const nodeById = (id) => props.nodes.find((node) => node.id === id) ?? fallbackNode
</script>
