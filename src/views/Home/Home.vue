<template>
  <Header />
  <main class="relative bg-theme-light dark:bg-theme-dark">
    <About />
    <Pokedex />
    <GamesAndApps/>
    <TradingsCards/>
    <Contact />
    <Faq />
    <ScrollToTopButton />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@components/Header/Header.vue';
import About from '@components/About/About.vue';
import Pokedex from '@components/Pokedex/Pokedex.vue';
import GamesAndApps from '@components/GamesAndApps/GamesAndApps.vue';
import TradingsCards from '@/components/TradingCards/TradingsCards.vue';
import Contact from '@components/Contact/Contact.vue';
import Faq from '@components/Faq/Faq.vue';
import ScrollToTopButton from '@components/ScrollToTopButton/ScrollToTopButton.vue';
import Footer from '@components/Footer/Footer.vue';
</script>
