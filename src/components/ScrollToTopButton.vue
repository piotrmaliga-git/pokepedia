<template>
  <button
    v-if="y > 1000"
    @click="scrollToTop"
    type="button"
    class="sticky bottom-10 left-10 ml-10 mb-10 cursor-pointer rounded-full bg-red-600 p-4 text-sm font-medium text-white">
    <Icon
      icon="material-symbols:arrow-upward"
      width="26"
      height="26" />
  </button>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import { Icon } from '@iconify/vue';

const { y } = useWindowScroll();

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
