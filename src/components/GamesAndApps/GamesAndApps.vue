<template>
  <section id="gamesAndApps">
    <div class="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2">
      <div class="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        <GamesAndAppsTabs />
      </div>
      <div>
        <iframe
          class="mx-auto mt-16 h-64 w-full rounded-lg shadow-xl sm:h-96 lg:mt-0 lg:max-w-xl"
          src="https://www.youtube.com/embed/SWtDeeXtMZM"
          title="Pokémon GO - Get Up and Go!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GamesAndAppsTabs from '@components/GamesAndApps/GamesAndAppsTabs.vue';
</script>
