<template>
  <Navbar />
  <About />
  <Contact />
  <Footer />
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar: Navbar,
    About: About,
    Contact: Contact,
    Footer: Footer,
  },
};
</script>
