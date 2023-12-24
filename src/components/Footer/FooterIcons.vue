<template>
  <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-gray-200">
      <Icon
        icon="mdi:facebook"
        width="20"
        height="20" />
      <span class="sr-only">Facebook page</span>
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-gray-200">
      <Icon
        icon="mdi:instagram"
        width="20"
        height="20" />
      <span class="sr-only">Instagram page</span>
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-gray-200">
      <Icon
        icon="mdi:twitter"
        width="20"
        height="20" />
      <span class="sr-only">Twitter page</span>
    </a>
    <a
      href="https://github.com/piotrmaliga-git/pokepedia"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-gray-200">
      <Icon
        icon="mdi:github"
        width="20"
        height="20" />
      <span class="sr-only">GitHub account</span>
    </a>
    <a
      href="https://dribbble.com"
      target="_blank"
      rel="noopener"
      class="text-white hover:text-gray-200">
      <Icon
        icon="ph:dribbble-logo"
        width="20"
        height="20" />
      <span class="sr-only">Dribbble account</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
