<template>
  <section id="gamesAndApps">
          <div class="mx-auto max-w-screen-md px-4 pt-8 lg:pt-16">
      <h2
        class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Trading Card Game
      </h2>
      <p class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our
        Business plan? Let us know. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci vero quam dolore quidem accusantium recusandae voluptates earum et natus rem beatae iste ducimus at repudiandae, sit, illo, magni veritatis!
      </p>
    </div>
    <div
      class="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2">
      <div class="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        <GamesAndAppsTabs />
      </div>
      <div>
        <div
          id="gallery"
          class="relative w-full"
          data-carousel="slide">
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                alt="" />
            </div>
            <!-- Item 2 -->
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item="active">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                alt="" />
            </div>
            <!-- Item 3 -->
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                alt="" />
            </div>
            <!-- Item 4 -->
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                alt="" />
            </div>
            <!-- Item 5 -->
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                alt="" />
            </div>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev>
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-next>
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GamesAndAppsTabs from '@components/GamesAndApps/GamesAndAppsTabs.vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>
