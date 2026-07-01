---
theme: default
title: Component Showcase
info: |
  Reference deck for validating and reusing the repository visual catalog.
transition: slide-left
background: "#f8fbff"
class: component-showcase palette-crystal
defaults:
  class: component-showcase palette-crystal
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<span class="kicker">Reference deck</span>

<h1 class="cover-title">
  <TypingTitle as="span" text="Component" />
  <TypingTitle as="span" text="Showcase" :delay="760" class="cover-title-accent" />
</h1>

<p class="lead">A living deck for testing, copying, and combining the repository visual components.</p>

---
transition: slide-up
---

<SpeakerProfile kicker="Shared profile data" organization-connector="at" />

---
transition: fade
---

<span class="kicker">Visual index</span>

## What this showroom covers

<div class="showcase-index">
  <div v-click><span>Shared</span><strong>32 components</strong><small>Global foundation for new decks.</small></div>
  <div v-click><span>Agnostic</span><strong>0 fixed products</strong><small>The catalog is independent of any brand or talk.</small></div>
  <div v-click><span>Style</span><strong>8 palettes</strong><small>Selectable from the deck frontmatter.</small></div>
</div>

<p class="showcase-note">The idea is simple: if a visual already exists, the agent should reuse it, provide data, and validate that it breathes in 16:9.</p>

---
transition: slide-up
---

<span class="kicker">Asset sourcing</span>

## SVG icons and editorial images

<AssetSourcingShowcase />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## StylePalette

<StylePalette />

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-waves
---

<span class="kicker">Background system</span>

## CSS waves

<div class="background-stage background-stage-split">
  <div class="background-demo-copy">
    <span>Wave Layer</span>
    <strong>Ambient motion with a quiet reading surface</strong>
    <p>The wave field drifts continuously while the content remains stable and projector-friendly.</p>
  </div>
  <div class="background-demo-marks" aria-hidden="true">
    <i></i>
    <i></i>
    <i></i>
  </div>
</div>

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-image-wash
---

<BackgroundImageWash />

<span class="kicker">Background system</span>

## Image wash

<div class="background-stage background-stage-right">
  <div class="background-demo-copy">
    <span>Transparent Media</span>
    <strong>Photo context, readable foreground</strong>
    <p>A directional wash protects the copy while the local photo remains visible as real context.</p>
  </div>
</div>

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-mesh
---

<span class="kicker">Background system</span>

## Mesh gradient

<div class="background-stage background-stage-split">
  <div class="background-demo-copy">
    <span>Editorial Mesh</span>
    <strong>Depth for narrative slides</strong>
    <p>Layered color fields and a modular mosaic add energy without relying on a literal image.</p>
  </div>
  <div class="background-demo-mesh" aria-hidden="true">
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
  </div>
</div>

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-blueprint
---

<span class="kicker">Background system</span>

## Blueprint grid

<div class="background-stage background-stage-split">
  <div class="background-demo-copy">
    <span>Structured Canvas</span>
    <strong>Precise surface for architecture</strong>
    <p>Use blueprint backgrounds for systems, roadmaps, and flows that benefit from a quiet technical frame.</p>
  </div>
  <div class="background-blueprint-plan" aria-label="Agnostic system blueprint">
    <span class="blueprint-coordinate">GRID 08 / 12</span>
    <i class="blueprint-link blueprint-link-a"></i>
    <i class="blueprint-link blueprint-link-b"></i>
    <div class="blueprint-node blueprint-node-a"><small>01</small><strong>Signal</strong></div>
    <div class="blueprint-node blueprint-node-b"><small>02</small><strong>System</strong></div>
    <div class="blueprint-node blueprint-node-c"><small>03</small><strong>Outcome</strong></div>
  </div>
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## PlatformMap

<PlatformMap aria-label="Reusable transformation map" />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EnterpriseTopology

<EnterpriseTopology center-label="Workspace" center-title="Slides" />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## GovernanceGrid

<GovernanceGrid />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## SecurityRadar

<SecurityRadar
  title="Visual quality"
  detail="A polished deck needs legibility, intentional motion, reusable components, and reliable delivery."
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MaturityCurve

<MaturityCurve />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart

<EChart
  title="Interactive trend"
  kicker="ECharts combo"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1500"
  caption="Best for series, animation, and comparisons that need more control than Mermaid."
  :insights="[
    { label: 'Series', title: 'Two readings', detail: 'Bars show volume while the line shows quality on one canvas.' },
    { label: 'Motion', title: 'State transition', detail: 'The chart updates values with native interpolation.' },
    { label: 'Deck', title: 'Reusable', detail: 'The component accepts options and preserves repository styling.' }
  ]"
  :option="{
    grid: { top: 28, right: 18, bottom: 34, left: 42 },
    legend: { top: 0, right: 0, textStyle: { color: '#334155', fontWeight: 700 } },
    xAxis: {
      type: 'category',
      data: ['Brief', 'Draft', 'Visual', 'Final'],
      axisLine: { lineStyle: { color: '#94a3b8' } },
      axisLabel: { color: '#334155', fontWeight: 700 }
    },
    yAxis: {
      type: 'value',
      max: 100,
      splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.22)' } },
      axisLabel: { color: '#64748b' }
    },
    series: [
      {
        name: 'Coverage',
        type: 'bar',
        data: [28, 42, 56, 64],
        barWidth: 34,
        itemStyle: { borderRadius: [8, 8, 0, 0] }
      },
      {
        name: 'Confidence',
        type: 'line',
        data: [32, 44, 58, 68],
        smooth: true,
        symbolSize: 10,
        lineStyle: { width: 4 },
        areaStyle: { opacity: 0.12 }
      }
    ]
  }"
  :sequence="[
    {
      series: [
        { name: 'Coverage', data: [42, 64, 82, 94] },
        { name: 'Confidence', data: [38, 58, 80, 96] }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Sankey

<EChart
  title="Composition flow"
  kicker="ECharts sankey"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1600"
  caption="Best for showing transfer, dependency, or distribution across layers."
  :insights="[
    { label: 'Flow', title: 'Visual weight', detail: 'Link width communicates magnitude without extra explanation.' },
    { label: 'Layers', title: 'Left-to-right reading', detail: 'Ideal for data moving through stages or capabilities.' },
    { label: 'Use', title: 'When to use it', detail: 'Processes, costs, adoption, funnels, dependencies, or work energy.' }
  ]"
  :option="{
    series: [
      {
        type: 'sankey',
        left: 16,
        right: 20,
        top: 18,
        bottom: 18,
        nodeWidth: 18,
        nodeGap: 12,
        emphasis: { focus: 'adjacency' },
        label: { color: '#0f172a', fontWeight: 800, fontSize: 12, position: 'inside' },
        lineStyle: { color: 'gradient', curveness: 0.5, opacity: 0.34 },
        data: [
          { name: 'Idea' },
          { name: 'Brief' },
          { name: 'Assets' },
          { name: 'Narrative' },
          { name: 'Deck' },
          { name: 'QA' }
        ],
        links: [
          { source: 'Idea', target: 'Brief', value: 5 },
          { source: 'Brief', target: 'Narrative', value: 4 },
          { source: 'Assets', target: 'Narrative', value: 2 },
          { source: 'Narrative', target: 'Deck', value: 5 },
          { source: 'Brief', target: 'QA', value: 1 },
          { source: 'Deck', target: 'QA', value: 3 }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          links: [
            { source: 'Idea', target: 'Brief', value: 8 },
            { source: 'Brief', target: 'Narrative', value: 6 },
            { source: 'Assets', target: 'Narrative', value: 4 },
            { source: 'Narrative', target: 'Deck', value: 9 },
            { source: 'Brief', target: 'QA', value: 2 },
            { source: 'Deck', target: 'QA', value: 7 }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Funnel

<EChart
  title="Stage conversion"
  kicker="ECharts funnel"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1450"
  caption="Best for explaining loss, progress, or selection by stage without Mermaid boxes."
  :insights="[
    { label: 'Use', title: 'Real funnel', detail: 'Use it when each stage has a different magnitude.' },
    { label: 'Motion', title: 'Staggered entrance', detail: 'Each block enters with a delay to signal progression.' },
    { label: 'Slide', title: 'Few steps', detail: 'Keep five or six stages so the reading stays immediate.' }
  ]"
  :option="{
    animationDuration: 780,
    animationDelay: (idx) => idx * 140,
    series: [
      {
        type: 'funnel',
        left: '4%',
        top: 18,
        bottom: 18,
        width: '72%',
        sort: 'none',
        gap: 5,
        minSize: '34%',
        maxSize: '100%',
        label: { position: 'inside', color: '#ffffff', fontWeight: 900, fontSize: 14 },
        labelLine: { show: false },
        itemStyle: { borderColor: 'rgba(255,255,255,0.72)', borderWidth: 2 },
        data: [
          { value: 100, name: 'Intake' },
          { value: 92, name: 'Brief' },
          { value: 84, name: 'Storyboard' },
          { value: 76, name: 'Build' },
          { value: 66, name: 'Visual QA' },
          { value: 58, name: 'Release' }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          data: [
            { value: 100, name: 'Intake' },
            { value: 82, name: 'Brief' },
            { value: 68, name: 'Storyboard' },
            { value: 54, name: 'Build' },
            { value: 38, name: 'Visual QA' },
            { value: 30, name: 'Release' }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart Radar

<EChart
  title="Capability gap"
  kicker="ECharts radar"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1550"
  caption="Best for comparing the current state with a target in one executive view."
  :insights="[
    { label: 'Compare', title: 'Current vs target', detail: 'Two polygons communicate the gap without a long table.' },
    { label: 'Motion', title: 'Animated area', detail: 'The shape grows to make the posture change visible.' },
    { label: 'Limit', title: 'Six axes maximum', detail: 'More axes make the slide difficult to present.' }
  ]"
  :option="{
    legend: { right: 2, top: 0, textStyle: { color: '#334155', fontWeight: 800 } },
    radar: {
      center: ['36%', '54%'],
      radius: '68%',
      splitNumber: 4,
      axisName: { color: '#334155', fontWeight: 900 },
      splitLine: { lineStyle: { color: 'rgba(100,116,139,0.22)' } },
      splitArea: { areaStyle: { color: ['rgba(47,129,247,0.04)', 'rgba(63,185,80,0.04)'] } },
      axisLine: { lineStyle: { color: 'rgba(100,116,139,0.28)' } },
      indicator: [
        { name: 'Narrative', max: 100 },
        { name: 'Visual', max: 100 },
        { name: 'Data', max: 100 },
        { name: 'QA', max: 100 },
        { name: 'Assets', max: 100 }
      ]
    },
    series: [
      {
        type: 'radar',
        symbolSize: 7,
        lineStyle: { width: 4 },
        areaStyle: { opacity: 0.18 },
        animationDelay: (idx) => idx * 180,
        data: [
          { name: 'Current', value: [42, 50, 36, 44, 32] },
          { name: 'Target', value: [66, 62, 54, 70, 50] }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          data: [
            { name: 'Current', value: [62, 70, 54, 66, 48] },
            { name: 'Target', value: [88, 86, 76, 92, 72] }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Heatmap

<EChart
  title="Effort and impact map"
  kicker="ECharts heatmap"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1500"
  caption="Best for prioritization, risk, coverage, or intensity across two dimensions."
  :insights="[
    { label: 'Matrix', title: 'Two dimensions', detail: 'Color replaces repeated text and accelerates decisions.' },
    { label: 'Motion', title: 'Wave of cells', detail: 'Per-cell delay creates a sense of analytical loading.' },
    { label: 'Tip', title: 'Short labels', detail: 'Use acronyms or brief words, then explain with insights.' }
  ]"
  :option="{
    grid: { top: 28, right: 18, bottom: 32, left: 82 },
    xAxis: {
      type: 'category',
      data: ['Low', 'Medium', 'High', 'Critical'],
      axisLabel: { color: '#334155', fontWeight: 800 },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'category',
      data: ['Discovery', 'Content', 'Visual', 'Release'],
      axisLabel: { color: '#334155', fontWeight: 800 },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    visualMap: {
      min: 0,
      max: 100,
      show: false,
      inRange: { color: ['#dbeafe', '#60a5fa', '#22c55e', '#f778ba'] }
    },
    series: [
      {
        type: 'heatmap',
        data: [[0,0,12],[1,0,24],[2,0,36],[3,0,44],[0,1,10],[1,1,26],[2,1,40],[3,1,52],[0,2,14],[1,2,34],[2,2,48],[3,2,58],[0,3,12],[1,3,28],[2,3,46],[3,3,54]],
        label: { show: true, color: '#0f172a', fontWeight: 900 },
        itemStyle: { borderColor: 'rgba(255,255,255,0.8)', borderWidth: 3, borderRadius: 6 },
        emphasis: { itemStyle: { shadowBlur: 14, shadowColor: 'rgba(47,129,247,0.25)' } },
        animationDelay: (idx) => idx * 38
      }
    ]
  }"
  :sequence="[
    {
      series: [
        { data: [[0,0,26],[1,0,42],[2,0,68],[3,0,78],[0,1,18],[1,1,54],[2,1,72],[3,1,92],[0,2,32],[1,2,66],[2,2,84],[3,2,96],[0,3,20],[1,3,48],[2,3,74],[3,3,88]] }
      ]
    }
  ]"
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart Treemap

<EChart
  title="Architecture map"
  kicker="ECharts treemap"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1600"
  caption="Best for weighted hierarchies: capabilities, budget, incidents, ownership, or coverage."
  :insights="[
    { label: 'Hierarchy', title: 'Meaningful size', detail: 'Area communicates the relative importance of each block.' },
    { label: 'Motion', title: 'Mental zoom', detail: 'Level-by-level entrance adds structure without animating every label.' },
    { label: 'Rule', title: 'Brief names', detail: 'Move explanations outside the chart when labels become long.' }
  ]"
  :option="{
    tooltip: { formatter: '{b}: {c}' },
    series: [
      {
        type: 'treemap',
        roam: false,
        nodeClick: false,
        left: 12,
        right: 12,
        top: 8,
        bottom: 8,
        breadcrumb: { show: false },
        label: { show: true, color: '#ffffff', fontWeight: 900, fontSize: 13 },
        upperLabel: { show: true, height: 24, color: '#0f172a', fontWeight: 900 },
        itemStyle: { borderColor: '#f8fbff', borderWidth: 4, gapWidth: 4, borderRadius: 8 },
        levels: [
          { itemStyle: { borderWidth: 0, gapWidth: 4 } },
          { colorSaturation: [0.35, 0.68], itemStyle: { gapWidth: 4 } }
        ],
        animationDuration: 900,
        animationDelay: (idx) => idx * 80,
        data: [
          {
            name: 'Story',
            value: 34,
            children: [
              { name: 'Brief', value: 12 },
              { name: 'Narrative', value: 10 },
              { name: 'Secs', value: 6 }
            ]
          },
          {
            name: 'Visual',
            value: 30,
            children: [
              { name: 'Charts', value: 10 },
              { name: 'Media', value: 8 },
              { name: 'Mockups', value: 12 }
            ]
          },
          {
            name: 'Delivery',
            value: 16,
            children: [
              { name: 'Build', value: 8 },
              { name: 'QA', value: 8 }
            ]
          }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          data: [
            {
              name: 'Story',
              value: 34,
              children: [
                { name: 'Brief', value: 12 },
                { name: 'Narrative', value: 14 },
                { name: 'Secs', value: 8 }
              ]
            },
            {
              name: 'Visual',
              value: 42,
              children: [
                { name: 'Charts', value: 16 },
                { name: 'Media', value: 10 },
                { name: 'Mockups', value: 16 }
              ]
            },
            {
              name: 'Delivery',
              value: 20,
              children: [
                { name: 'Build', value: 9 },
                { name: 'QA', value: 11 }
              ]
            }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Gauge

<EChart
  title="Readiness indicator"
  kicker="ECharts gauge"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1500"
  caption="Best for communicating one status with clear motion and high-contrast reading."
  :insights="[
    { label: 'One', title: 'One primary metric', detail: 'Use it when the slide needs a visual verdict.' },
    { label: 'Motion', title: 'Animated indicator', detail: 'The gauge reinforces progress or readiness without explaining the axis.' },
    { label: 'Avoid', title: 'Do not fill dashboards', detail: 'For many metrics, use bars or a heatmap instead of gauges.' }
  ]"
  :option="{
    series: [
      {
        type: 'gauge',
        center: ['36%', '56%'],
        radius: '72%',
        startAngle: 210,
        endAngle: -30,
        min: 0,
        max: 100,
        progress: { show: true, roundCap: true, width: 14 },
        axisLine: { roundCap: true, lineStyle: { width: 14, color: [[0.35, '#f778ba'], [0.7, '#f59e0b'], [1, '#3fb950']] } },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { distance: 2, length: 10, lineStyle: { color: '#64748b', width: 2 } },
        axisLabel: { color: '#64748b', fontWeight: 800, distance: 24, fontSize: 11 },
        title: { offsetCenter: [0, '42%'], color: '#334155', fontWeight: 900, fontSize: 14 },
        detail: { valueAnimation: true, formatter: '{value}%', color: '#0f172a', fontSize: 34, fontWeight: 900, offsetCenter: [0, '10%'] },
        data: [{ value: 42, name: 'Draft' }]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        { data: [{ value: 86, name: 'Ready' }] }
      ]
    }
  ]"
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart Graphic

<div class="echart-graphic-grid">
  <EChart
    title="Stroke title"
    kicker="Graphic text"
    height="178px"
    density="compact"
    :sequence-delay="1900"
    :option="{
      graphic: {
        elements: [
          {
            id: 'stroke-title',
            type: 'text',
            left: 'center',
            top: 'middle',
            silent: true,
            style: {
              text: 'Decks',
              fontSize: 46,
              fontWeight: '900',
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              lineDash: [0, 1000],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#0f172a',
              lineWidth: 1.4
            },
            keyframeAnimation: {
              duration: 1800,
              loop: false,
              keyframes: [
                { percent: 0, style: { lineDashOffset: 0, lineDash: [0, 1000], fill: 'transparent' } },
                { percent: 0.55, style: { lineDashOffset: 1000, lineDash: [1000, 0], fill: 'transparent' } },
                { percent: 0.78, style: { fill: 'transparent' } },
                { percent: 1, style: { fill: '#0f172a', lineDashOffset: 1000, lineDash: [1000, 0] } }
              ]
            }
          }
        ]
      }
    }"
    :sequence="[
      {
        graphic: {
          elements: [
            { id: 'stroke-title', style: { fill: '#0f172a', stroke: '#0f172a', lineDash: [1000, 0], lineDashOffset: 1000 } }
          ]
        }
      }
    ]"
  />
  <EChart
    title="Loading"
    kicker="Graphic bars"
    height="178px"
    density="compact"
    :option="{
      graphic: {
        elements: Array.from({ length: 6 }, (_, index) => ({
          type: 'rect',
          shape: { x: 74 + index * 24, y: 74, width: 14, height: 42 },
          style: { fill: index % 2 ? '#39c5cf' : '#2f81f7', opacity: 0.86 },
          keyframeAnimation: {
            duration: 960,
            delay: index * 90,
            loop: false,
            keyframes: [
              { percent: 0, shape: { y: 88, height: 22 }, style: { opacity: 0.42 } },
              { percent: 0.5, shape: { y: 54, height: 78 }, style: { opacity: 0.96 } },
              { percent: 1, shape: { y: 66, height: 58 }, style: { opacity: 0.86 } }
            ]
          }
        }))
      }
    }"
  />
  <EChart
    title="Wave"
    kicker="Graphic dots"
    height="178px"
    density="compact"
    :option="{
      graphic: {
        elements: Array.from({ length: 77 }, (_, index) => {
          const col = index % 11
          const row = Math.floor(index / 11)
          const wave = Math.abs(row - 3) + Math.abs(col - 5)
          return {
            type: 'circle',
            shape: { cx: 52 + col * 19, cy: 40 + row * 17, r: 4 },
            style: { fill: '#0f172a', opacity: 0.14 },
            keyframeAnimation: {
              duration: 1400,
              delay: wave * 52,
              loop: false,
              keyframes: [
                { percent: 0, scaleX: 0.7, scaleY: 0.7, style: { opacity: 0.12 } },
                { percent: 0.45, scaleX: 1.85, scaleY: 1.85, style: { opacity: 0.82 } },
                { percent: 1, scaleX: 1, scaleY: 1, style: { opacity: 0.44 } }
              ]
            }
          }
        })
      }
    }"
  />
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## GraphDiagram

<GraphDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## SequenceDiagram

<SequenceDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidJourney

<MermaidJourney />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidRoadmap

<MermaidRoadmap />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MermaidQuadrant

<MermaidQuadrant />

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Sequence Diagram

<MermaidDiagram
  title="Actor interaction"
  kicker="Mermaid sequenceDiagram"
  density="compact"
  caption="Best for APIs, handoffs, approvals, and conversations between teams."
  :diagram="'sequenceDiagram\nparticipant User\nparticipant Agent\nparticipant Repo\nUser->>Agent: Deck prompt\nAgent->>Repo: Read brief and catalog\nRepo-->>Agent: Components and rules\nAgent-->>User: Critical questions or finished deck'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Gantt

<MermaidDiagram
  title="Production plan"
  kicker="Mermaid gantt"
  density="compact"
  caption="Best for phases with dates, dependencies, and delivery windows."
  :diagram="'gantt\ntitle Deck production\ndateFormat YYYY-MM-DD\naxisFormat %d %b\nsection Discovery\nIntake :a1, 2026-06-10, 1d\nBrief :after a1, 1d\nsection Build\nSlides :2026-06-12, 3d\nVisual QA :after Slides, 1d\nsection Release\nDeploy :2026-06-16, 1d'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## GitGraph

<MermaidDiagram
  title="Change strategy"
  kicker="Mermaid gitGraph"
  density="compact"
  caption="Best for explaining branches, merges, releases, and work checkpoints."
  :diagram="'gitGraph\ncommit\nbranch feature\ncheckout feature\ncommit\ncommit\ncheckout main\nmerge feature\ncommit'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Mindmap

<MermaidDiagram
  title="Deck narrative"
  kicker="Mermaid mindmap"
  density="compact"
  caption="Best for discovery, taxonomies, brainstorming, and conceptual structure."
  :diagram="'mindmap\n  root((Deck))\n    AUD\n      NIV\n      DOL\n      META\n    STO\n      IN\n      DEV\n      FIN\n    VIS\n      CMP\n      AST\n      DIA\n    QA\n      BLD\n      CAP\n      HND'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Pie Chart

<MermaidDiagram
  title="Content balance"
  kicker="Mermaid pie"
  density="compact"
  caption="Best for simple proportions with a few categories and immediate reading."
  :diagram="'pie title Deck balance\n  &quot;Narrative&quot; : 35\n  &quot;Visuals&quot; : 30\n  &quot;Diagrams&quot; : 20\n  &quot;Validation&quot; : 15'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Timeline

<MermaidDiagram
  title="Idea evolution"
  kicker="Mermaid timeline"
  density="compact"
  caption="Best for showing maturity, milestones, a roadmap, or an initiative history."
  :diagram="'timeline\ntitle Deck evolution\nPrompt : Initial intent\nBrief : Scope and critical questions\nStoryboard : Slide-by-slide narrative\nShowcase : Reusable components\nRelease : Build and publication'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Packet Diagram

<MermaidDiagram
  title="Delivery contract"
  kicker="Mermaid packet-beta"
  density="compact"
  caption="Best for protocols, payload fields, and message structure."
  :diagram="'packet-beta\ntitle Deck payload\n0-7: &quot;brief&quot;\n8-15: &quot;slides&quot;\n16-23: &quot;assets&quot;\n24-31: &quot;checks&quot;'"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MediaFrame

<div class="media-showcase-grid">
  <MediaFrame kind="image" title="Image placeholder" caption="Readable image or screenshot" />
  <MediaFrame kind="video" title="Video placeholder" caption="Local video or deck asset" />
  <MediaFrame kind="gif" title="GIF placeholder" caption="Short animation or looped demo" />
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## BrowserMockup

<BrowserMockup title="Light product surface" />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MetricStrip

<MetricStrip />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## ComparisonTable

<ComparisonTable />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## DecisionMatrix

<DecisionMatrix />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## HierarchyTree

<HierarchyTree />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## IconGrid

<IconGrid />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## ShapeSystem

<ShapeSystem />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## TimelineFlow

<TimelineFlow />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## SwimlaneFlow

<SwimlaneFlow />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## PyramidDiagram

<PyramidDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## VennDiagram

<VennDiagram />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## CalloutStack

<CalloutStack />

---
transition: fade
---

<span class="kicker">Shared component</span>

## QuoteFrame

<QuoteFrame />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## ArchitectureLayers

<ArchitectureLayers />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## Shape3DStage

<Shape3DStage />

---
transition: fade
---

<span class="kicker">Usage rules</span>

## How to decide where a component belongs

<div class="showcase-usage">
  <div v-click>
    <span>Shared</span>
    <strong>Generic, data-driven, and reusable.</strong>
    <small>Place it in `shared/components/` and import it explicitly.</small>
  </div>
  <div v-click>
    <span>Deck local</span>
    <strong>Depends on a product, talk, or CTA.</strong>
    <small>Keep it in `decks/&lt;slug&gt;/components/` until it becomes generic.</small>
  </div>
  <div v-click>
    <span>Documentation</span>
    <strong>Update the catalog with the change.</strong>
    <small>README and `docs/component-catalog.md` belong in the same commit.</small>
  </div>
  <div v-click>
    <span>Validation</span>
    <strong>A successful build still needs inspection.</strong>
    <small>Review the cover, dense slide, visual component, and navigation.</small>
  </div>
</div>
