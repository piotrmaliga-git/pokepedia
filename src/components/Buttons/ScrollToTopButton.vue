<template>
  <div class="sticky bottom-0 right-0 flex justify-end">
    <button
      v-if="y > 1000"
      @click="scrollToTop"
      type="button"
      class="mb-10 mr-10 cursor-pointer rounded-full bg-red-600 p-4 text-sm font-medium text-white hover:border hover:border-red-600 hover:bg-white hover:text-red-600">
      <Icon
        icon="material-symbols:arrow-upward"
        width="26"
        height="26" />
    </button>
  </div>
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
