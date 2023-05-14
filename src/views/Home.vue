<template>
  <Navbar />
  <main class="relative bg-theme-light dark:bg-theme-dark">
    <About />
    <Pokedex />
    <Contact />
    <Faq />
    <ScrollToTopButton />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue';
import Pokedex from '@/components/Pokedex.vue';
import Contact from '@/components/Contact.vue';
import Faq from '@/components/Faq.vue';
import ScrollToTopButton from '@/components/Buttons/ScrollToTopButton.vue';
import Footer from '@/components/Footer.vue';
</script>
