<template>
  <section id="contact">
    <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
      <h2
        class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        We're here to assist you, so whether you have feedback to share or questions to ask, please
        reach out to us – we're just a message away!
      </p>
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@components/Contact/ContactForm.vue';
</script>
