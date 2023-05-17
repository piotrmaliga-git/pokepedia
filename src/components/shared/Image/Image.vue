<template>
  <figure>
    <img
      :src="src"
      :alt="alt" />
    <figcaption>{{ figcaption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Image {
  src: string;
  alt: string;
  figcaption?: string | null;
}

const props = defineProps<Image>();
</script>
