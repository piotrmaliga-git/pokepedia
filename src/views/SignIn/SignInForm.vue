<template>
  <form
    class="space-y-4 md:space-y-6"
    action="#">
    <div>
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900"
        >Your email</label
      >
      <input
        type="email"
        name="email"
        id="email"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
        placeholder="mail@example.com"
        required="true" />
    </div>
    <div>
      <label
        for="password"
        class="mb-2 block text-sm font-medium text-gray-900"
        >Password</label
      >
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
        required="true" />
    </div>
    <div class="inline-flex w-full items-center justify-center">
      <hr class="my-4 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
      <span
        class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
        >or</span
      >
    </div>
    <div class="flex items-center justify-between">
      <button
        type="button"
        class="mb-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <Icon
          class="-ml-1 mr-2"
          icon="logos:facebook"
          width="20"
          height="20" />
        Sign in with Facebook
      </button>
      <button
        type="button"
        class="mb-2 ml-4 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <Icon
          class="-ml-1 mr-2"
          icon="logos:google-icon"
          width="20"
          height="20" />
        Sign in with Google
      </button>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-start">
        <div class="flex h-5 items-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-600"
            required="true" />
        </div>
        <div class="ml-3 text-sm">
          <label
            for="remember"
            class="text-gray-500"
            >Remember me</label
          >
        </div>
      </div>
      <a
        href="#"
        class="text-sm font-medium text-red-600 hover:underline"
        >Forgot password?</a
      >
    </div>
    <button
      type="submit"
      class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700">
      Sign in
    </button>
    <p class="text-sm font-light text-gray-500">
      Don't have an account yet?
      <router-link
        to="/signup"
        class="font-medium text-red-600 hover:underline"
        >Sign up</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
