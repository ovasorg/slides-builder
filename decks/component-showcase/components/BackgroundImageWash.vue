<template>
  <img class="background-demo-photo" :src="photoSrc" alt="Collaboration workspace">
</template>

<script setup>
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const photoSrc = `${base}/media/pexels-collaboration-laptop.jpg`
</script>
