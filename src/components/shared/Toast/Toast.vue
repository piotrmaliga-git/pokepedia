<template>
  <div
    id="toast-success"
    class="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
    role="alert">
    <slot name="toastIconBox"></slot>
    <div class="ml-3 text-sm font-normal"><slot name="toastText"></slot></div>
    <button
      type="button"
      class="-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
      data-dismiss-target="#toast-success"
      aria-label="Close">
      <span class="sr-only">Close</span>
      <Icon
        icon="heroicons-solid:x"
        width="20"
        height="20"
        aria-hidden="true" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
