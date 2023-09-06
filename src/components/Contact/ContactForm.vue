<template>
  <form
    action="#"
    class="space-y-8">
    <div>
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your email</label
      >
      <input
        type="email"
        id="email"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
        placeholder="mail@example.com"
        required />
    </div>
    <div>
      <label
        for="subject"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject</label
      >
      <input
        type="text"
        id="subject"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
        placeholder="Let us know how we can help you"
        required />
    </div>
    <div class="sm:col-span-2">
      <label
        for="message"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your message</label
      >
      <textarea
        id="message"
        rows="6"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
        placeholder="Leave a comment..."></textarea>
    </div>
    <button
      type="submit"
      class="rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-medium text-white hover:scale-105 hover:bg-red-700 sm:w-fit">
      Send message
    </button>
  </form>
</template>

<script setup lang="ts">
// import emailjs from '@emailjs/browser';

// const sendEmail = (): void => {
//   emailjs
//     .sendForm('service_ni2u6tn', 'template_0kl3ujp', this.$refs.contactForm, 'NksSG0YqwR5trRVqc')
//     .then(
//       result => {
//         console.log('SUCCESS!', result.text);
//       },
//       error => {
//         console.log('FAILED...', error.text);
//       }
//     );
// };
</script>
