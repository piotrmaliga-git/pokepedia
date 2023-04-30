<template>
  <button
    type="button"
    data-dropdown-toggle="language-dropdown-menu"
    class="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
    <Icon
      icon="emojione:flag-for-united-states"
      width="22"
      height="22"
      class="mr-2"
      aria-hidden="true" />
    English
  </button>
  <!-- Dropdown -->
  <div
    class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-gray-100 text-base shadow dark:bg-gray-700"
    id="language-dropdown-menu">
    <ul
      class="py-2 font-medium"
      role="none">
      <li>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem">
          <div class="inline-flex items-center">
            <Icon
              icon="emojione:flag-for-united-states"
              width="16"
              height="16"
              class="mr-2"
              aria-hidden="true" />
            English
          </div>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem">
          <div class="inline-flex items-center">
            <Icon
              icon="emojione:flag-for-poland"
              width="16"
              height="16"
              class="mr-2" />
            Polski
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
