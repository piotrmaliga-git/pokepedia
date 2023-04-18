<template>
  <Navbar />
  <About />
  <Contact />
  <Fqa />
  <Footer />
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Fqa from '@/components/Fqa.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    About,
    Contact,
    Fqa,
    Footer,
  },
};
</script>
