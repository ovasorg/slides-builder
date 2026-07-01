<template>
  <div class="sequence-diagram" role="img" :aria-label="ariaLabel">
    <div class="sequence-participants" :style="{ '--sequence-count': participants.length }">
      <div v-for="participant in participants" :key="participant.id">
        <span>{{ participant.label }}</span>
      </div>
    </div>

    <div class="sequence-body" :style="{ '--sequence-count': participants.length }">
      <div
        v-for="participant in participants"
        :key="`${participant.id}-line`"
        class="sequence-lifeline"
      />
      <div
        v-for="(message, index) in messages"
        :key="`${message.from}-${message.to}-${index}`"
        v-motion
        :initial="{ opacity: 0, x: -18 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: index * 120, duration: 440 } }"
        class="sequence-message"
        :class="message.tone"
        :style="messageStyle(message, index)"
      >
        <span>{{ message.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ariaLabel: { type: String, default: 'Sequence diagram' },
  participants: {
    type: Array,
    default: () => [
      { id: 'speaker', label: 'Speaker' },
      { id: 'deck', label: 'Deck' },
      { id: 'audience', label: 'Audience' }
    ]
  },
  messages: {
    type: Array,
    default: () => [
      { from: 'speaker', to: 'deck', label: 'Define story', tone: 'blue' },
      { from: 'deck', to: 'audience', label: 'Show visual', tone: 'green' },
      { from: 'speaker', to: 'audience', label: 'Answer question', tone: 'rose' },
      { from: 'deck', to: 'audience', label: 'Close idea', tone: 'amber' }
    ]
  }
})

const participantIndex = (id) => Math.max(0, props.participants.findIndex((participant) => participant.id === id))

const messageStyle = (message, index) => {
  const from = participantIndex(message.from)
  const to = participantIndex(message.to)
  const start = Math.min(from, to)
  const end = Math.max(from, to)
  const count = Math.max(1, props.participants.length - 1)

  return {
    '--message-left': `${(start / count) * 100}%`,
    '--message-width': `${((end - start) / count) * 100}%`,
    '--message-top': `${index * 66 + 26}px`
  }
}
</script>
