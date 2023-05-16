<template>
  <header class="h-screen max-w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat">
    <div class="h-screen max-w-full bg-black/60">
      <Navbar />
      <Hero />
    </div>
  </header>
</template>

<script setup lang="ts">
import Navbar from './Navbar/Navbar.vue';
import Hero from './Hero.vue';
</script>
