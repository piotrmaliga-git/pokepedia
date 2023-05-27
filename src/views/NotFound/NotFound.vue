<template>
  <section class="bg-theme-light dark:bg-theme-dark">
    <div
      class="mx-auto flex h-screen w-screen max-w-screen-xl items-center justify-center py-8 px-4 lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl font-extrabold tracking-tight text-gray-300 dark:text-gray-200 lg:text-9xl">
          404
        </h1>
        <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <router-link to='/'>
           <button
          class="my-4 inline-flex rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:scale-105 hover:bg-red-800"
          >Back to Homepage
        </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
