<template>
  <button
    @click="toggleDark()"
    class="mr-2 rounded-lg p-2"
    :class="isDark ? 'theme-btn' : 'theme-btn--dark'">
    <Icon
      :icon="isDark ? 'bi:sun' : 'ph:moon-fill'"
      width="21"
      height="21" />
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { Icon } from '@iconify/vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
