<template>
  <div
    id="contact-modal"
    tabindex="-1"
    class="fixed inset-x-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 dark:bg-gray-700/10 md:inset-0">
    <div class="relative max-h-full w-full max-w-lg">
      <div class="relative rounded-lg bg-gray-100 shadow dark:bg-gray-700">
        <div class="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Contact</h3>
          <button
            type="button"
            class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="contact-modal">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae corporis
            culpa impedit, illo soluta adipisci sunt a enim dolores ex quod cumque aspernatur
            incidunt dolor autem, reprehenderit rerum corrupti.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis quos
            provident. Distinctio porro, eligendi culpa commodi doloremque officia nobis rerum ea
            tenetur ipsum exercitationem minus, nemo illum nesciunt officiis. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Laborum obcaecati facilis asperiores, debitis saepe
            quidem similique suscipit fugiat exercitationem modi eius hic quae consectetur officia
            reiciendis, nobis, molestias autem omnis!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
