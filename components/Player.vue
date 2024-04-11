<script setup lang="ts">
const props = defineProps({
  src: String,
  image: String,
  alt: String
})

const config = defineMusicfyPlayer({
  audio: {
    src: props.src,
  },
  image: {
    src: props.image,
    alt: props.alt
  },
  size: {
    width: "100%"
  },
  color: {
    detect: true
  }
})
</script>

<template>
  <MusicfyPlayer :config="config" />
</template>
