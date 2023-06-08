<template>
  <section id="contact">
    <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
      <h2
        class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our
        Business plan? Let us know.
      </p>
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@components/Contact/ContactForm.vue';
</script>
