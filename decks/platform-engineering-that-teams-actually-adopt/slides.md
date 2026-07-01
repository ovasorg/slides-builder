---
theme: default
title: Platform Engineering That Teams Actually Adopt
info: |
  A practical operating model for building, adopting, and measuring an internal developer platform.
transition: slide-left
background: "#f8fbff"
class: platform-adoption palette-crystal
defaults:
  class: platform-adoption palette-crystal
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<div class="cover-grid">
  <div>
    <span class="kicker">Internal engineering conference · 25 min + Q&A</span>
    <h1 class="cover-title">
      <span>Platform Engineering</span>
      <span class="cover-title-accent">That Teams Actually Adopt</span>
    </h1>
    <p class="lead">A practical operating model for turning shared capability into a product teams choose.</p>
  </div>
  <figure class="cover-photo">
    <DeckImage name="team-collaboration.jpg" alt="Engineering team collaborating around a shared workspace" />
    <figcaption>Adoption starts in team workflows—not in a tool inventory.</figcaption>
  </figure>
</div>

---
transition: slide-up
---

<SpeakerProfile
  organization-connector="at"
  qr-label="LinkedIn"
  :show-qr-label="false"
/>

---
transition: fade
---

<span class="kicker">The premise</span>

## Deployment is an output. Adoption is the result.

<div class="statement-frame">
  <span>Installed</span>
  <strong>≠</strong>
  <span>Available</span>
  <strong>≠</strong>
  <span>Preferred</span>
</div>

<p class="statement-caption">The platform wins when its safe path is also the fastest credible path.</p>

---
transition: slide-up
---

<div class="editorial-split">
  <div>
    <span class="kicker">The investment question</span>
    <h2>Should we fund a platform organization?</h2>
    <p class="lead">Only if it can remove repeated cognitive load across teams and own the experience end to end.</p>
    <div class="decision-signals">
      <span><b>Repeated pain</b> across several teams</span>
      <span><b>Shared leverage</b> beats local fixes</span>
      <span><b>Named owner</b> for product outcomes</span>
    </div>
  </div>
  <MediaFrame
    name="developer-workflow.jpg"
    title="Developer workflow"
    caption="Optimize the developer's path, not the platform team's inventory."
    alt="Developer working with code on a large monitor"
  />
</div>

---
transition: slide-left
---

<span class="kicker">Common failure mode</span>

## A tool pile has integrations. A platform has a journey.

<div class="tool-pile">
  <div class="tool-cloud">
    <span>Portal</span><span>CI</span><span>Cloud</span><span>Secrets</span><span>Catalog</span><span>Policy</span><span>Observability</span>
  </div>
  <div class="journey-arrow">→</div>
  <div class="journey-panel">
    <small>Team intent</small>
    <strong>“Ship a service safely”</strong>
    <div class="journey-steps"><span>Create</span><span>Change</span><span>Release</span><span>Operate</span></div>
    <p>One coherent path, owned and measured.</p>
  </div>
</div>

---
transition: slide-left
---

<span class="kicker">Platform vs. tools</span>

## The difference is operational, not architectural

<ComparisonTable
  firstColumn="Signal"
  :columns="['Collection of tools', 'Internal platform']"
  :rows="[
    { label: 'Starting point', values: ['Technology inventory', 'Developer job to be done'], preferred: 1 },
    { label: 'Experience', values: ['Teams assemble the path', 'End-to-end workflow'], preferred: 1 },
    { label: 'Ownership', values: ['Per-tool administrators', 'Product + service ownership'], preferred: 1 },
    { label: 'Success', values: ['Availability and usage', 'Adoption and outcomes'], preferred: 1 },
    { label: 'Change model', values: ['Projects and migrations', 'Continuous discovery'], preferred: 1 }
  ]"
/>

---
class: platform-adoption palette-crystal section-slide
transition: fade
---

<span class="section-number">01</span>
<span class="kicker">Product and experience</span>

# Build for a customer, not for a diagram

<p class="lead">The first platform capability is product judgment: which friction deserves a shared solution?</p>

---
transition: slide-up
---

<span class="kicker">Product thinking</span>

## Segment customers by work, not by org chart

<div class="customer-jobs">
  <article><span>Product team</span><strong>Launch a service</strong><p>From repository to production without bespoke setup.</p></article>
  <article><span>Service owner</span><strong>Change safely</strong><p>Understand blast radius, policy, and rollback before release.</p></article>
  <article><span>On-call engineer</span><strong>Restore confidence</strong><p>Find ownership, telemetry, and runbooks under pressure.</p></article>
</div>

<div class="editorial-note">Different users may share one golden path—but they judge it at different moments.</div>

---
transition: slide-left
---

<span class="kicker">Operating model</span>

## Five layers, one accountable product

<ArchitectureLayers
  :layers="[
    { label: 'L5', title: 'Product direction', detail: 'Problems, segments, priorities, outcomes.', tone: 'rose' },
    { label: 'L4', title: 'Developer experience', detail: 'Docs, interfaces, feedback, support.', tone: 'purple' },
    { label: 'L3', title: 'Platform capabilities', detail: 'Reusable services, APIs, workflows.', tone: 'blue' },
    { label: 'L2', title: 'Guardrails', detail: 'Identity, policy, security, evidence.', tone: 'green' },
    { label: 'L1', title: 'Reliability', detail: 'SLOs, operations, cost, lifecycle.', tone: 'amber' }
  ]"
/>

<p class="slide-footnote">If a layer has no owner, teams inherit the integration work.</p>

---
transition: slide-left
---

<span class="kicker">Continuous discovery</span>

## Observe friction before prescribing standards

<div class="discovery-loop">
  <article><span>01</span><strong>Observe</strong><small>Shadow real delivery and incident work.</small></article>
  <article><span>02</span><strong>Quantify</strong><small>Frequency × delay × risk × reach.</small></article>
  <article><span>03</span><strong>Prototype</strong><small>Test the smallest path with 2–3 teams.</small></article>
  <article><span>04</span><strong>Learn</strong><small>Keep, change, or remove based on behavior.</small></article>
  <div class="loop-center">Every<br/>4–6 weeks</div>
</div>

---
transition: slide-up
---

<span class="kicker">Team model</span>

## Small core team, explicit interfaces

<GovernanceGrid
  :items="[
    { code: 'PM', title: 'Platform product', detail: 'Chooses problems, segments users, owns adoption.' },
    { code: 'PE', title: 'Platform engineering', detail: 'Builds and operates reusable capabilities.' },
    { code: 'EN', title: 'Enablement', detail: 'Pairs with teams and turns friction into learning.' },
    { code: 'RS', title: 'Risk partners', detail: 'Define controls and evidence with the workflow.' }
  ]"
/>

<p class="slide-footnote">Domain teams remain accountable for their products; the platform owns the paved experience.</p>

---
transition: slide-left
---

<span class="kicker">Delivery trade-offs</span>

## Build less. Integrate deliberately. Own the seams.

<div class="tradeoff-grid">
  <article><span>Build</span><strong>When workflow is differentiating</strong><p>Highest fit; highest lifecycle burden.</p></article>
  <article><span>Buy</span><strong>When capability is commodity</strong><p>Fastest start; constrain customization.</p></article>
  <article><span>Integrate</span><strong>Most platform work lives here</strong><p>Own identity, policy, telemetry, docs, and upgrades.</p></article>
</div>

<div class="decision-rule"><strong>Decision rule</strong><span>Spend custom engineering on the user journey—not on recreating mature infrastructure.</span></div>

---
class: platform-adoption palette-crystal section-slide
transition: fade
---

<span class="section-number">02</span>
<span class="kicker">Golden paths and self-service</span>

# Make the good path obvious—and escapable

<p class="lead">A golden path is a supported product with an opinion, not a mandatory template frozen in time.</p>

---
transition: slide-left
---

<span class="kicker">Golden path anatomy</span>

## A path combines defaults, automation, and support

<div class="golden-path-anatomy">
  <article><span>1</span><strong>Intent</strong><small>“Create an API”</small></article>
  <article><span>2</span><strong>Opinionated defaults</strong><small>Runtime, ownership, telemetry</small></article>
  <article><span>3</span><strong>Automated workflow</strong><small>Provision, validate, release</small></article>
  <article><span>4</span><strong>Embedded guardrails</strong><small>Policy and evidence in the path</small></article>
  <article><span>5</span><strong>Operated product</strong><small>SLO, support, feedback, versions</small></article>
</div>

<div class="path-baseline"><span>Fast start</span><span>Safe change</span><span>Clear ownership</span><span>Known escape hatch</span></div>

---
transition: slide-up
---

<span class="kicker">Concrete example</span>

## “Launch a service” should feel like one request

<div class="service-path">
  <div class="service-intent"><small>Developer asks</small><strong>New customer API</strong></div>
  <div class="service-rail">
    <article><span>01</span><strong>Scaffold</strong><small>Repository + ownership</small></article>
    <article><span>02</span><strong>Provision</strong><small>Runtime + data + secrets</small></article>
    <article><span>03</span><strong>Verify</strong><small>Policy + tests + evidence</small></article>
    <article><span>04</span><strong>Release</strong><small>Progressive delivery</small></article>
    <article><span>05</span><strong>Operate</strong><small>SLO + alerts + runbook</small></article>
  </div>
</div>

<p class="slide-footnote">The user sees one coherent workflow; the platform absorbs the integration complexity.</p>

---
transition: slide-left
---

<span class="kicker">Self-service workflow</span>

## Automate the handoffs, not only the commands

<SwimlaneFlow
  ariaLabel="Self-service service creation workflow"
  :lanes="[
    { label: 'Product team', steps: ['Declare intent', 'Review change', 'Own service'] },
    { label: 'Platform', steps: ['Compose resources', 'Run workflow', 'Expose status'] },
    { label: 'Risk', steps: ['Evaluate policy', 'Record evidence', 'Monitor drift'] }
  ]"
/>

<div class="workflow-insight"><strong>Self-service is not “no interaction.”</strong><span>It is a predictable interaction with clear state, recovery, and ownership.</span></div>

---
transition: slide-left
---

<span class="kicker">Standardization without lock-in</span>

## Use progressive disclosure, not one-size-fits-all

<div class="path-spectrum">
  <article class="recommended"><span>80%</span><strong>Golden path</strong><small>Supported defaults for common cases</small></article>
  <article><span>15%</span><strong>Extension points</strong><small>Documented configuration and plugins</small></article>
  <article><span>5%</span><strong>Exception path</strong><small>Time-bound review with an owner</small></article>
</div>

<div class="escape-rules">
  <span>Make exit possible</span><span>Price the operational cost</span><span>Feed patterns back into the product</span>
</div>

---
class: platform-adoption palette-crystal section-slide
transition: fade
---

<span class="section-number">03</span>
<span class="kicker">Governance and security</span>

# Put control where the work happens

<p class="lead">The strongest guardrail is the one teams do not need to route around.</p>

---
transition: slide-up
---

<span class="kicker">Proportional governance</span>

## Match control strength to change risk

<div class="risk-lanes">
  <article class="green"><span>Low</span><strong>Auto-approve</strong><p>Known pattern, bounded impact, complete evidence.</p><small>Seconds</small></article>
  <article class="amber"><span>Medium</span><strong>Async review</strong><p>Novel configuration or material data exposure.</p><small>Hours</small></article>
  <article class="rose"><span>High</span><strong>Expert decision</strong><p>Irreversible change, broad blast radius, regulated boundary.</p><small>Days—rare by design</small></article>
</div>

<p class="slide-footnote">Do not make every change wait for the process needed by the riskiest 5%.</p>

---
transition: slide-left
---

<span class="kicker">Policy as a product surface</span>

## A guardrail should explain, remediate, and prove

<div class="policy-flow">
  <article><span>Detect</span><strong>Evaluate intent early</strong><small>Before expensive work begins</small></article>
  <article><span>Explain</span><strong>State the reason</strong><small>Human language + affected rule</small></article>
  <article><span>Remediate</span><strong>Offer the next action</strong><small>Fix, exception, or owner</small></article>
  <article><span>Evidence</span><strong>Record automatically</strong><small>Who, what, when, result</small></article>
</div>

<div class="policy-example"><code>Encryption required</code><span>→</span><code>Enable managed key</code><span>→</span><code>Re-run automatically</code></div>

---
transition: slide-up
---

<span class="kicker">Friction budget</span>

## Spend friction only where it reduces real risk

<div class="friction-examples">
  <article><span>Before</span><strong>Ticket for a standard database</strong><small>3 queues · 4 days · unclear state</small><b>After: policy-backed provisioning in 12 min</b></article>
  <article><span>Before</span><strong>Security review at release</strong><small>Late findings · rework · escalation</small><b>After: checks at scaffold and change time</b></article>
  <article><span>Before</span><strong>Manual audit evidence</strong><small>Spreadsheet chase every quarter</small><b>After: evidence emitted by the workflow</b></article>
</div>

<p class="editorial-note">Friction is justified only when it changes a decision—not when it transfers work.</p>

---
class: platform-adoption palette-crystal photo-section
transition: fade
---

<div class="photo-section-copy">
  <span class="section-number">04</span>
  <span class="kicker">Adoption and outcomes</span>
  <h1>Measure preference, not presence</h1>
  <p>Usage can be mandated. Repeated voluntary use is a stronger signal that the product works.</p>
</div>
<DeckImage name="team-collaboration.jpg" alt="Engineering team collaborating in an office" />
<span class="photo-credit">Pexels · Ketut Subiyanto</span>

---
transition: slide-left
---

<span class="kicker">One clear adoption view</span>

## Track the journey from eligible to preferred

<EChart
  kicker="Illustrative quarterly cohort"
  title="Team adoption funnel"
  ariaLabel="Funnel chart showing 42 eligible teams, 31 that tried the path, 24 repeated it, and 18 that prefer it"
  height="180px"
  :option="{
    tooltip: { trigger: 'item', formatter: '{b}: {c} teams' },
    series: [{
      type: 'funnel',
      left: '4%', top: 14, bottom: 12, width: '58%',
      min: 0, max: 42, minSize: '34%', maxSize: '100%',
      sort: 'descending', gap: 6,
      label: { show: true, position: 'inside', formatter: '{b}  {c}', color: '#ffffff', fontSize: 13, fontWeight: 700 },
      labelLine: { show: false },
      itemStyle: { borderColor: '#ffffff', borderWidth: 2 },
      data: [
        { value: 42, name: 'Eligible' },
        { value: 31, name: 'Tried' },
        { value: 24, name: 'Repeated' },
        { value: 18, name: 'Preferred' }
      ]
    }]
  }"
  :insights="[
    { label: '74%', title: 'Activation', detail: 'Tried ÷ eligible' },
    { label: '77%', title: 'Retention', detail: 'Repeated ÷ tried' },
    { label: '75%', title: 'Preference', detail: 'Preferred ÷ repeated' }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Metric system</span>

## Pair adoption with outcomes and trust

<div class="metric-stack">
  <article><span>Adoption</span><strong>Who chooses the path?</strong><small>Activation · repeat use · retention · preference</small></article>
  <article><span>Flow</span><strong>Does delivery get easier?</strong><small>Lead time · wait time · failure recovery · handoffs</small></article>
  <article><span>Outcomes</span><strong>Does the system improve?</strong><small>Change success · reliability · control coverage · unit cost</small></article>
  <article><span>Trust</span><strong>Will teams keep choosing it?</strong><small>Support load · satisfaction · exceptions · abandonment</small></article>
</div>

<div class="metric-warning"><strong>Avoid vanity metrics:</strong><span>number of catalog entries, templates created, tools integrated, or accounts provisioned—unless they predict a user or business outcome.</span></div>

---
transition: slide-left
---

<span class="kicker">Phased implementation</span>

## Sequence evidence before scale

<TimelineFlow
  :items="[
    { when: '0–30 days', title: 'Discover', detail: 'Map friction, select one journey, baseline outcomes.', tone: 'blue' },
    { when: '31–90 days', title: 'Prove', detail: 'Co-design with 2–3 teams; ship one thin golden path.', tone: 'green' },
    { when: '3–6 months', title: 'Productize', detail: 'Add SLOs, support, guardrails, telemetry, versions.', tone: 'amber' },
    { when: '6–12 months', title: 'Scale', detail: 'Expand only where adoption and outcomes repeat.', tone: 'rose' }
  ]"
/>

<div class="roadmap-gates"><span><b>Gate 1</b> repeated pain</span><span><b>Gate 2</b> voluntary reuse</span><span><b>Gate 3</b> measurable outcome</span><span><b>Gate 4</b> sustainable ownership</span></div>

---
transition: slide-up
---

<span class="kicker">Investment decision</span>

## Fund the operating model—not a tooling program

<div class="investment-grid">
  <div class="go-column">
    <span>Invest when</span>
    <strong>Shared friction is material</strong>
    <strong>A product owner can say “no”</strong>
    <strong>Two or three teams will co-design</strong>
    <strong>Outcomes can be baselined</strong>
  </div>
  <div class="pause-column">
    <span>Pause when</span>
    <strong>The mandate is “standardize everything”</strong>
    <strong>Success means tool deployment</strong>
    <strong>Operations have no owner</strong>
    <strong>Teams are only migration targets</strong>
  </div>
</div>

<div class="next-steps"><b>Next 30 days</b><span>Pick one journey</span><span>Recruit three partner teams</span><span>Baseline time, risk, and adoption</span></div>

---
class: platform-adoption palette-crystal closing-slide
transition: fade
---

<span class="kicker">Closing takeaway</span>

# Teams adopt a platform when it makes the right thing easier.

<div class="closing-equation">
  <span>Valuable workflow</span><b>+</b><span>Safe defaults</span><b>+</b><span>Fast feedback</span><b>=</b><strong>Chosen path</strong>
</div>

<p class="lead">Start with one painful journey. Prove voluntary reuse. Scale only what earns trust.</p>

---
class: platform-adoption palette-crystal qa-slide
transition: fade
---

<span class="kicker">Final 5 minutes</span>

# Questions

<p class="lead">Where does your organization currently transfer the most delivery friction to product teams?</p>

<div class="qa-prompts"><span>Investment</span><span>Operating model</span><span>Golden paths</span><span>Metrics</span></div>
