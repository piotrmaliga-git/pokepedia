<template>
  <figure>
    <img
      :class="class"
      :alt="alt"
      :src="src" />
    <figcaption v-if="figcaption">{{ figcaption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Image {
  class: string;
  alt: string;
  src: string;
  figcaption?: string | null;
}

const props = defineProps<Image>();
</script>
