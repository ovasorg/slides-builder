<template>
  <section class="echart-panel" :class="[`echart-panel--${density}`]">
    <header v-if="kicker || title" class="echart-panel-header">
      <span v-if="kicker">{{ kicker }}</span>
      <strong v-if="title">{{ title }}</strong>
    </header>

    <div class="echart-panel-body" :class="{ 'echart-panel-body--with-insights': insights.length }">
      <figure class="echart-panel-canvas" :aria-label="ariaLabel" role="img">
        <div v-if="error" class="echart-panel-error">
          {{ error }}
        </div>
        <div ref="chartEl" class="echart-render" :style="{ height }" />
      </figure>

      <aside v-if="insights.length" class="echart-panel-insights">
        <article v-for="(insight, index) in insights" :key="`${insight.title}-${index}`">
          <span>{{ insight.label ?? String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ insight.title }}</strong>
          <small>{{ insight.detail }}</small>
        </article>
      </aside>
    </div>

    <p v-if="caption" class="echart-panel-caption">{{ caption }}</p>
  </section>
</template>

<script setup>
import { BarChart, FunnelChart, GaugeChart, GraphChart, HeatmapChart, LineChart, PieChart, RadarChart, SankeyChart, ScatterChart, SunburstChart, TreeChart, TreemapChart } from 'echarts/charts'
import { DatasetComponent, GraphicComponent, GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent, TransformComponent, VisualMapComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
import { onSlideEnter, useSlideContext } from '@slidev/client'
import { nextTick, onBeforeUnmount, onMounted, ref, toRaw, watch } from 'vue'

echarts.use([
  BarChart,
  CanvasRenderer,
  DatasetComponent,
  FunnelChart,
  GaugeChart,
  GraphChart,
  GraphicComponent,
  GridComponent,
  HeatmapChart,
  LegendComponent,
  LineChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
  SVGRenderer,
  SunburstChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  TreeChart,
  TreemapChart,
  VisualMapComponent
])

const props = defineProps({
  ariaLabel: { type: String, default: 'ECharts chart' },
  caption: { type: String, default: '' },
  density: { type: String, default: 'normal' },
  height: { type: String, default: '320px' },
  insights: { type: Array, default: () => [] },
  kicker: { type: String, default: 'ECharts' },
  option: { type: Object, required: true },
  renderer: { type: String, default: 'svg' },
  sequence: { type: Array, default: () => [] },
  sequenceDelay: { type: Number, default: 720 },
  sequenceInterval: { type: Number, default: 1500 },
  sequenceLoop: { type: Boolean, default: false },
  sequenceTrigger: { type: String, default: 'enter' },
  title: { type: String, default: '' }
})

const chartEl = ref(null)
const error = ref('')
let chart = null
let resizeObserver = null
let sequenceTimer = null
const clickRegistrationId = `echart-sequence-${Math.random().toString(36).slice(2)}`
let slideContext = null
let clickInfo = null
let hasSlideLifecycle = false

const palette = [
  '#2f81f7',
  '#3fb950',
  '#39c5cf',
  '#f778ba',
  '#f59e0b',
  '#8b5cf6'
]

const baseOption = {
  animation: true,
  animationDuration: 900,
  animationDurationUpdate: 680,
  animationEasing: 'cubicOut',
  animationEasingUpdate: 'cubicOut',
  color: palette,
  textStyle: {
    color: '#0f172a',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
  },
  tooltip: {
    appendToBody: true,
    backgroundColor: 'rgba(15, 23, 42, 0.94)',
    borderColor: 'rgba(125, 140, 163, 0.34)',
    borderWidth: 1,
    textStyle: {
      color: '#f8fbff',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      fontSize: 12
    }
  }
}

const mergedOption = () => ({
  ...baseOption,
  ...toRaw(props.option),
  color: toRaw(props.option).color ?? baseOption.color,
  textStyle: {
    ...baseOption.textStyle,
    ...(toRaw(props.option).textStyle ?? {})
  },
  tooltip: {
    ...baseOption.tooltip,
    ...(toRaw(props.option).tooltip ?? {}),
    textStyle: {
      ...baseOption.tooltip.textStyle,
      ...(toRaw(props.option).tooltip?.textStyle ?? {})
    }
  }
})

const clearSequence = () => {
  if (!sequenceTimer) return
  window.clearTimeout(sequenceTimer)
  sequenceTimer = null
}

const canUseSequence = () => Array.isArray(toRaw(props.sequence)) && toRaw(props.sequence).length > 0
const shouldPlayOnEnter = () => canUseSequence() && ['enter', 'both'].includes(props.sequenceTrigger)
const shouldPlayOnClick = () => canUseSequence() && ['click', 'both'].includes(props.sequenceTrigger)

const playSequence = (step = 0) => {
  const frames = toRaw(props.sequence)
  if (!chart || !Array.isArray(frames) || !frames.length) return

  const frame = frames[step]
  if (frame) {
    chart.setOption(toRaw(frame), false)
    chart.resize()
  }

  const nextStep = step + 1
  if (nextStep < frames.length) {
    sequenceTimer = window.setTimeout(() => playSequence(nextStep), props.sequenceInterval)
    return
  }

  if (props.sequenceLoop) {
    sequenceTimer = window.setTimeout(() => {
      chart?.setOption(mergedOption(), true)
      playSequence(0)
    }, props.sequenceInterval)
  }
}

const startSequence = () => {
  clearSequence()
  if (!canUseSequence()) return
  sequenceTimer = window.setTimeout(() => playSequence(0), props.sequenceDelay)
}

const renderChart = async ({ play = shouldPlayOnEnter() } = {}) => {
  if (!chartEl.value) return
  await nextTick()

  if (!chartEl.value.clientWidth || !chartEl.value.clientHeight) return

  if (!chart) {
    chart = echarts.init(chartEl.value, null, { renderer: props.renderer })
  }

  try {
    error.value = ''
    chart.setOption(mergedOption(), true)
    chart.resize()
    if (play) startSequence()
    else clearSequence()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'The chart could not be rendered.'
  }
}

watch(
  () => [props.option, props.sequence],
  () => renderChart(),
  { deep: true }
)

try {
  slideContext = useSlideContext()
  hasSlideLifecycle = true

  if (shouldPlayOnClick()) {
    clickInfo = slideContext.$clicksContext.calculateSince('+1', 1)
    slideContext.$clicksContext.register(clickRegistrationId, clickInfo)
  }

  onSlideEnter(() => {
    renderChart({ play: shouldPlayOnEnter() })
  })

  if (clickInfo) {
    watch(slideContext.$clicks, (current, previous) => {
      if (current > previous && clickInfo?.isCurrent.value) {
        renderChart({ play: true })
      }
    })
  }
} catch {
  hasSlideLifecycle = false
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    if (!chartEl.value?.clientWidth || !chartEl.value?.clientHeight) return
    if (chart) {
      chart.resize()
      return
    }
    renderChart()
  })
  if (chartEl.value) resizeObserver.observe(chartEl.value)
  renderChart({ play: shouldPlayOnEnter() })
})

onBeforeUnmount(() => {
  clearSequence()
  slideContext?.$clicksContext.unregister(clickRegistrationId)
  resizeObserver?.disconnect()
  resizeObserver = null
  chart?.dispose()
  chart = null
})
</script>
