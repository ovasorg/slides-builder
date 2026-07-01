<template>
  <section class="mermaid-diagram" :class="[`mermaid-diagram--${variant}`, `mermaid-diagram--${density}`]">
    <header v-if="kicker || title" class="mermaid-diagram-header">
      <span v-if="kicker">{{ kicker }}</span>
      <strong v-if="title">{{ title }}</strong>
    </header>

    <div class="mermaid-diagram-body" :class="{ 'mermaid-diagram-body--with-insights': insights.length }">
      <figure class="mermaid-diagram-canvas" :aria-label="ariaLabel" role="img">
        <div v-if="error" class="mermaid-diagram-error">
          {{ error }}
        </div>
        <div ref="container" class="mermaid-diagram-render" />
      </figure>

      <aside v-if="insights.length" class="mermaid-diagram-insights">
        <article v-for="(insight, index) in insights" :key="`${insight.title}-${index}`">
          <span>{{ insight.label ?? String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ insight.title }}</strong>
          <small>{{ insight.detail }}</small>
        </article>
      </aside>
    </div>

    <p v-if="caption" class="mermaid-diagram-caption">{{ caption }}</p>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Mermaid diagram' },
  caption: { type: String, default: '' },
  density: { type: String, default: 'normal' },
  diagram: { type: String, required: true },
  insights: { type: Array, default: () => [] },
  kicker: { type: String, default: 'Mermaid' },
  title: { type: String, default: '' },
  variant: { type: String, default: 'default' }
})

const container = ref(null)
const error = ref('')
const uid = Math.random().toString(36).slice(2)
let active = true
let renderCount = 0

const renderDiagram = async () => {
  if (!container.value || !props.diagram.trim()) return

  const currentRender = ++renderCount
  error.value = ''

  try {
    const mermaid = (await import('mermaid/dist/mermaid.esm.min.mjs')).default

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'base',
      themeVariables: {
        background: 'transparent',
        primaryColor: '#eaf2ff',
        primaryBorderColor: '#2f81f7',
        primaryTextColor: '#0f172a',
        secondaryColor: '#dcfce7',
        secondaryBorderColor: '#22c55e',
        secondaryTextColor: '#0f172a',
        tertiaryColor: '#fce7f3',
        tertiaryBorderColor: '#f472b6',
        tertiaryTextColor: '#0f172a',
        lineColor: '#64748b',
        textColor: '#0f172a',
        mainBkg: '#f8fbff',
        nodeBorder: '#2f81f7',
        clusterBkg: '#ffffff',
        clusterBorder: '#93c5fd',
        edgeLabelBackground: '#ffffff',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
      },
      flowchart: {
        curve: 'basis',
        htmlLabels: true,
        nodeSpacing: 42,
        rankSpacing: 52,
        useMaxWidth: true
      },
      journey: {
        diagramMarginX: 28,
        diagramMarginY: 18,
        leftMargin: 140,
        width: 150,
        height: 52,
        boxMargin: 12,
        boxTextMargin: 6,
        noteMargin: 10,
        messageMargin: 35
      },
      timeline: {
        padding: 12,
        useMaxWidth: true
      }
    })

    const id = `mermaid-${uid}-${currentRender}`
    const { svg, bindFunctions } = await mermaid.render(id, props.diagram)

    if (!active || currentRender !== renderCount || !container.value) return

    container.value.innerHTML = svg
    bindFunctions?.(container.value)
  } catch (err) {
    if (!active || !container.value) return
    container.value.innerHTML = ''
    error.value = err instanceof Error ? err.message : 'The diagram could not be rendered.'
  }
}

watch(
  () => props.diagram,
  () => nextTick(renderDiagram)
)

onMounted(renderDiagram)

onBeforeUnmount(() => {
  active = false
})
</script>
