<template>
  <section id="faq">
    <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
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
            <span>What is Pokémon ?</span>
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
              Pokémon, short for "Pocket Monsters," are creatures that people, known as Pokémon
              Trainers, catch and train to battle each other. Pokémon is a popular franchise that
              includes video games, trading card games, a TV series, movies, and merchandise.
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
            <span>How do I find rare Pokémon cards ?</span>
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
              Rare Pokémon cards can be found in booster packs, theme decks, and special
              collections. You can also buy individual cards from trading card shops, online
              marketplaces, or trade with other collectors to complete your collection.
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
            <span>How do I evolve my Pokémon in Pokémon Go?</span>
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
              To evolve your Pokémon in Pokémon Go, collect enough of their specific candies by
              catching, transferring, or hatching Pokémon of the same species. Then, tap on the
              Pokémon and select the "Evolve" option if you have enough candies.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-4">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-md border-b border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-flush-body-4"
            aria-expanded="false"
            aria-controls="accordion-flush-body-4">
            <span>How can I battle other players in Pokémon Go?</span>
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
              In Pokémon Go, you can battle other players by sending them a Battle invitation
              through your friend list. Alternatively, you can participate in Trainer Battles at
              Gyms or in special events. Ensure that you and your opponent are within the same
              vicinity or use remote battle passes to battle from a distance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { Icon } from '@iconify/vue';

onMounted(() => {
  initFlowbite();
});
</script>
