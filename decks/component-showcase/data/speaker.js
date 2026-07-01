import { person } from '../../../data/speaker/person.js'

export const speaker = {
  ...person,
  talkRole: 'Component Showcase',
  roles: [
    'Reusable component catalog maintainer',
    'Presentation-as-code practitioner',
    'Agent-assisted deck workflow designer'
  ],
  tags: ['Slidev', 'Component catalog', 'Reusable visuals', 'Deck factory']
}
