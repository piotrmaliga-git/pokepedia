<template>
  <Header />
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
import Header from '@/components/Header/Header.vue';
import About from '@/components/About/About.vue';
import Pokedex from '@/components/Pokedex/Pokedex.vue';
import Contact from '@/components/Contact/Contact.vue';
import Faq from '@/components/Faq/Faq.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>
