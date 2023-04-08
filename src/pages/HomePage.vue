<template>
  <Navbar />
  <Footer />
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>
