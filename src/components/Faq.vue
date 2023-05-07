<template>
  <section
    id="faq"
    class="bg-background-light dark:bg-background-dark">
    <div class="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
      <h2
        class="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-16">
        Frequently asked questions
      </h2>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400">
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1">
            <span>Eos facere omnis magni doloremque, alias repellat quaerat ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24"
              class="shrink-0 rotate-180"
              data-accordion-icon />
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          class="hidden"
          aria-labelledby="accordion-flush-heading-1">
          <div class="border-b border-gray-200 p-5 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore adipisci
              deleniti tempore velit placeat architecto.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Nemo ut aliquid quibusdam et quisquam quae
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 hover:underline dark:text-blue-500"
                >link</a
              >
              tempore velit placeat architecto nemo ut aliquid quibusdam, iste amet.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2">
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24"
              class="shrink-0"
              data-accordion-icon />
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          class="hidden"
          aria-labelledby="accordion-flush-heading-2">
          <div class="border-b border-gray-200 p-5 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum distinctio,
              suscipit illum facilis, dolorem unde cum earum quia vel qui placeat inventore
              doloribus, tempore hic voluptatibus a est similique.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Ipsum dolor sit amet consectetur, adipisicing elit. Id ad distinctio ducimus totam
              quasi commodi blanditiis.

              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
                >link</a
              >
              Libero facere nam cumque, quo voluptatum sunt sed! Magnam, est! Obcaecati ad aperiam
              tempore vel, ipsam voluptatibus sed hic quaerat.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3">
            <span>Labore tempora, perspiciatis fuga ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24"
              class="shrink-0"
              data-accordion-icon />
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          class="hidden"
          aria-labelledby="accordion-flush-heading-3">
          <div class="border-b border-gray-200 p-5 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi sed aut
              iure sint assumenda quaerat expedita doloremque cupiditate dignissimos? Voluptates
              doloremque quo dolore quas ad autem veniam optio eaque.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex eveniet, doloribus
              cum provident voluptates! Eius, sint sit tenetur praesentium eum natus.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite:
            </p>
            <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  >link 1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  rel="nofollow"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  >link 2</a
                >
              </li>
            </ul>
          </div>
        </div>
        <h2 id="accordion-flush-heading-4">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-flush-body-4"
            aria-expanded="false"
            aria-controls="accordion-flush-body-4">
            <span>Sit amet, consectetur adipisicing elit. Consectetur iure, libero ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24"
              class="shrink-0"
              data-accordion-icon />
          </button>
        </h2>
        <div
          id="accordion-flush-body-4"
          class="hidden"
          aria-labelledby="accordion-flush-heading-4">
          <div class="border-b border-gray-200 p-5 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quo amet quibusdam
              doloribus asperiores id laudantium, fugiat provident magni et excepturi consequuntur
              beatae itaque odio aliquid illum rerum recusandae soluta!
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam exercitationem
              id! Magni voluptatibus sapiente ex ratione minima rerum, quia animi doloremque
              deleniti quam cumque quos totam quas aspernatur illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>
