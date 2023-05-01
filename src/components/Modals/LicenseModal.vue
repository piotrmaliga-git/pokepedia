<template>
  <div
    id="license-modal"
    tabindex="-1"
    class="fixed inset-x-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 dark:bg-gray-700/10 md:inset-0">
    <div class="relative max-h-full w-full max-w-lg">
      <div class="relative rounded-lg bg-gray-100 shadow dark:bg-gray-700">
        <div class="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Licensing</h3>
          <button
            type="button"
            class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="license-modal">
            <Icon
              icon="ion:close-round"
              width="16"
              height="16"
              aria-hidden="true" />
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="space-y-6 p-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem autem delectus
            magnam id quibusdam, laudantium excepturi quia itaque quos optio consectetur dolorum
            exercitationem pariatur sunt ullam explicabo? Magni, obcaecati.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo velit voluptate
            perferendis veritatis consequuntur. Ut a illum, esse earum architecto adipisci tenetur,
            fugiat ullam, et consequatur nisi aspernatur? Culpa, quisquam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Tempora, modi dolorum! Quae ea magni non mollitia
            nulla, blanditiis repudiandae perferendis molestiae harum. Magnam consequuntur veniam
            quis unde autem quidem porro.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
