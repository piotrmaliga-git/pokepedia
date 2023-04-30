<template>
  <section class="bg-background-light dark:bg-background-dark">
    <div class="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
      <h2
        class="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-16">
        Frequently asked questions
      </h2>
      <div
        id="accordion-collapse"
        data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 focus:text-black dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1">
            <span>Eos facere omnis magni doloremque, alias repellat quaerat ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24" />
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1">
          <div class="border-b border-gray-200 p-5">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis
              asperiores blanditiis sed id optio voluptas sapiente officiis neque ducimus aliquid
              minima ipsam molestias voluptates dolorem, mollitia maxime. Fugit, nam?
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellat ut quidem
              sunt earum nisi aut accusantium!
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 hover:underline"
                >get started</a
              >
              obcaecati laboriosam accusantium in ullam, adipisicing elit
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 focus:text-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2">
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24" />
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2">
          <div class="border-b border-gray-200 p-5">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, omnis! Sed animi amet
              iure eius explicabo at officiis, obcaecati laboriosam accusantium in ullam ex dolor
              sequi enim reprehenderit cumque debitis!
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 hover:underline"
                >Figma design system</a
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, pariatur omnis
              earum id, minima tenetur recusandae ex sunt similique et ab, error dicta excepturi
              ipsam voluptatum ipsum hic quisquam. Error!
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 focus:text-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3">
            <span>Labore tempora, perspiciatis fuga ?</span>
            <Icon
              icon="mdi:chevron-down"
              width="24"
              height="24" />
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3">
          <div class="border-b border-gray-200 p-5">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum eaque, nisi
              assumenda iure fugiat earum error possimus numquam hic, tenetur labore! Labore
              corrupti veritatis, a quia amet earum itaque?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero necessitatibus nemo facere illum, totam veritatis sunt
              aspernatur enim cupiditate quia eos voluptatum soluta provident, aliquid quae minima
              incidunt? Ipsa, neque?
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit voluptates
              laborum enim. Delectus nostrum eum illum eveniet voluptatem placeat error?
            </p>
            <p class="mb-2 text-gray-500">Libero necessitatibus nemo facere illum:</p>
            <ul class="list-disc pl-5 text-gray-500">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-blue-600 hover:underline"
                  >link 1</a
                >
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 hover:underline"
                  >link 2</a
                >
              </li>
            </ul>
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
