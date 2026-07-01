<template>
  <SharedSpeakerProfile :speaker="speaker" kicker="Speaker" v-bind="$attrs" />
</template>

<script setup>
import SharedSpeakerProfile from '../../../shared/components/SpeakerProfile.vue'
import { speaker } from '../data/speaker.js'
</script>
