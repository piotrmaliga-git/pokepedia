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
import type { ImageProps } from '../../types/interfaces/image';

defineProps<ImageProps>();
</script>
