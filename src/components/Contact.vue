<template>
  <section
    id="contact"
    class="bg-background-light dark:bg-background-dark">
    <div class="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
      <h2
        class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our
        Business plan? Let us know.
      </p>
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
          class="rounded-lg bg-red-600 py-3 px-5 text-center text-sm font-medium text-white hover:scale-105 hover:bg-red-700 sm:w-fit">
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
