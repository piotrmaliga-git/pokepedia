<template>
  <Navbar />
  <About/>
  <Footer />
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar: Navbar,
    About: About,
    Footer: Footer,
  },
};
</script>
