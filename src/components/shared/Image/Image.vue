<template>
  <figure>
    <img
      :class="class"
      :alt="alt"
      :src="src" />
    <figcaption v-html="figcaption"></figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { ImageProps } from '@interfaces/image';

defineProps<ImageProps>();
</script>
