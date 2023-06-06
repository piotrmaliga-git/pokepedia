<template>
  <form
    class="mt-4 space-y-4 md:space-y-5 lg:mt-5"
    action="#">
    <div>
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        type="email"
        name="email"
        id="email"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
        placeholder="name@company.com"
        required="true" />
    </div>
    <div>
      <label
        for="password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >New Password</label
      >
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
        required="true" />
    </div>
    <div>
      <label
        for="confirm-password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Confirm password</label
      >
      <input
        type="confirm-password"
        name="confirm-password"
        id="confirm-password"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
        required="true" />
    </div>
    <div class="flex items-start">
      <div class="flex h-5 items-center">
        <input
          id="newsletter"
          aria-describedby="newsletter"
          type="checkbox"
          class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-600"
          required="true" />
      </div>
      <div class="ml-3 text-sm">
        <label
          for="newsletter"
          class="font-light text-gray-500"
          >I accept the
          <a
            class="font-medium text-red-600 hover:underline"
            href="#"
            >Terms and Conditions</a
          ></label
        >
      </div>
    </div>
    <button
      type="submit"
      class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700">
      Reset password
    </button>
    <p class="flex justify-end text-sm font-light text-gray-500">
      <router-link
        to="/signin"
        class="font-medium text-red-600 hover:underline"
        >Back to Login</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts"></script>
