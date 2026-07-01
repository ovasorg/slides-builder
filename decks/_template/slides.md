---
theme: default
title: Lorem Ipsum Deck
info: |
  Plantilla base para crear una nueva presentacion modular.
transition: slide-left
background: "#f8fbff"
class: template palette-crystal
defaults:
  class: template palette-crystal
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<span class="kicker">Lorem ipsum</span>

<h1 class="cover-title">
  <TypingTitle as="span" text="Lorem ipsum" />
  <TypingTitle as="span" text="dolor sit amet" :delay="780" class="cover-title-accent" />
</h1>

<p class="lead">Consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

---
transition: slide-up
---

<SpeakerProfile kicker="Speaker metadata" />

---
transition: fade
---

<span class="kicker">Agenda</span>

## Que vamos a recorrer

<div class="agenda-grid">
  <div v-click><span>01</span><strong>Contexto</strong><small>Lorem ipsum dolor sit amet.</small></div>
  <div v-click><span>02</span><strong>Sistema</strong><small>Consectetur adipiscing elit.</small></div>
  <div v-click><span>03</span><strong>Decision</strong><small>Integer posuere erat.</small></div>
  <div v-click><span>04</span><strong>Operacion</strong><small>Donec ullamcorper nulla.</small></div>
  <div v-click><span>05</span><strong>Cierre</strong><small>Cras mattis consectetur.</small></div>
</div>

---
transition: slide-left
---

<span class="kicker">Contexto</span>

## Una idea por slide

<v-clicks>

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed posuere consectetur est at lobortis.
- Curabitur blandit tempus porttitor.

</v-clicks>

---
transition: slide-up
---

<span class="kicker">Metricas</span>

## Datos para abrir conversacion

<MetricStrip />

---
transition: slide-left
---

<span class="kicker">Mockup</span>

## Superficie clara para producto

<BrowserMockup title="Lorem dashboard" />

---
transition: slide-left
---

<span class="kicker">Mapa</span>

## De problema a narrativa

<PlatformMap />

---
transition: slide-up
---

<span class="kicker">Insight</span>

## Tres ideas que sostienen la historia

<CalloutStack />

---
transition: slide-left
---

<span class="kicker">Comparacion</span>

## Opciones sobre la mesa

<ComparisonTable />

---
transition: slide-left
---

<span class="kicker">Decision</span>

## Priorizar sin perder contexto

<DecisionMatrix />

---
transition: slide-up
---

<span class="kicker">Jerarquia</span>

## De la idea al sistema

<HierarchyTree />

---
transition: slide-left
---

<span class="kicker">Arquitectura</span>

## Capas para ordenar la conversacion

<ArchitectureLayers />

---
transition: slide-left
---

<span class="kicker">Iconos</span>

## Conceptos en bloques pequenos

<IconGrid />

---
transition: slide-up
---

<span class="kicker">Relaciones</span>

## Grafo de conceptos

<GraphDiagram />

---
transition: slide-left
---

<span class="kicker">Secuencia</span>

## Flujo conversacional

<SequenceDiagram />

---
transition: slide-left
---

<span class="kicker">Carriles</span>

## Responsabilidades por actor

<SwimlaneFlow />

---
transition: slide-up
---

<span class="kicker">Tiempo</span>

## Una evolucion posible

<TimelineFlow />

---
transition: slide-up
---

<span class="kicker">Formas</span>

## Lenguaje visual reusable

<ShapeSystem />

---
transition: fade
---

<span class="kicker">Media</span>

## Imagen, video o GIF

<MediaFrame kind="image" title="Lorem media" caption="Reemplaza este placeholder con un asset local del deck." />

---
transition: slide-left
---

<span class="kicker">Cita</span>

## Un momento editorial

<QuoteFrame />

---
transition: slide-left
---

<span class="kicker">3D</span>

## Formas para slides de impacto

<Shape3DStage />

---
transition: slide-up
---

<span class="kicker">Paleta</span>

## Estilos disponibles

<StylePalette />

---
transition: fade
---

<span class="kicker">Cierre</span>

## Una decision accionable

<div class="final-frame">
  <strong>Lorem ipsum</strong>
  <span>+</span>
  <strong>Consectetur</strong>
  <span>+</span>
  <strong>Operacion</strong>
</div>

<p class="closing">Donec ullamcorper nulla non metus auctor fringilla.</p>
