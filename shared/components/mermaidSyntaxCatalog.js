export const mermaidSyntaxCatalog = [
  {
    id: 'sequence',
    title: 'Sequence Diagram',
    keyword: 'sequenceDiagram',
    status: 'ready',
    use: 'Conversations between actors, systems, APIs, or teams.',
    starter: 'sequenceDiagram\\nActor->>System: Request\\nSystem-->>Actor: Response'
  },
  {
    id: 'journey',
    title: 'User Journey',
    keyword: 'journey',
    status: 'ready',
    use: 'Adoption, experience, friction, and human moments of change.',
    starter: 'journey\\ntitle Adoption\\nsection Discover\\nUnderstand need: 4: User'
  },
  {
    id: 'gantt',
    title: 'Gantt',
    keyword: 'gantt',
    status: 'ready',
    use: 'Plans with dates, dependencies, phases, and timeline execution.',
    starter: 'gantt\\ntitle Plan\\ndateFormat YYYY-MM-DD\\nDiscovery : 2026-01-01, 7d'
  },
  {
    id: 'pie',
    title: 'Pie Chart',
    keyword: 'pie',
    status: 'ready',
    use: 'Simple distributions; use with few categories and high readability.',
    starter: 'pie title Coverage\\n  \"Ready\" : 60\\n  \"Pending\" : 40'
  },
  {
    id: 'quadrant',
    title: 'Quadrant Chart',
    keyword: 'quadrantChart',
    status: 'ready',
    use: 'Prioritization, value vs effort, impact vs risk, and trade-offs.',
    starter: 'quadrantChart\\ntitle Priority\\nx-axis Low --> High\\ny-axis Low --> High'
  },
  {
    id: 'gitgraph',
    title: 'GitGraph Diagram',
    keyword: 'gitGraph',
    status: 'ready',
    use: 'Branches, releases, merges, parallel changes, and Git strategies.',
    starter: 'gitGraph\\ncommit\\nbranch feature\\ncheckout feature\\ncommit'
  },
  {
    id: 'mindmap',
    title: 'Mindmap',
    keyword: 'mindmap',
    status: 'ready',
    use: 'Idea exploration, taxonomies, discovery, and mindmaps.',
    starter: 'mindmap\\n  root((Deck))\\n    Narrative\\n    Visuals\\n    Validation'
  },
  {
    id: 'timeline',
    title: 'Timeline',
    keyword: 'timeline',
    status: 'ready',
    use: 'Roadmaps, milestones, evolution, maturity, and chronological narrative.',
    starter: 'timeline\\ntitle Roadmap\\nNow : Brief\\nNext : Build\\nLater : Validate'
  },
  {
    id: 'packet',
    title: 'Packet',
    keyword: 'packet-beta',
    status: 'beta',
    use: 'Packet fields, protocols, payloads, and binary structures.',
    starter: 'packet-beta\\ntitle Packet\\n0-15: \"Source\"\\n16-31: \"Target\"'
  }
]

export const mermaidStatusLabels = {
  ready: 'Ready',
  experimental: 'Experimental',
  beta: 'Beta',
  candidate: 'Candidate'
}
