<template>
  <form
    class="space-y-4 md:space-y-6"
    action="#">
    <div class="flex flex-col items-center justify-between sm:flex-row">
      <div class="w-full">
        <label
          for="first_name"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >First name</label
        >
        <input
          type="text"
          id="first_name"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="John"
          required />
      </div>
      <div class="mt-4 w-full sm:ml-4 sm:mt-0">
        <label
          for="last_name"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >Last name</label
        >
        <input
          type="text"
          id="last_name"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="Doe"
          required />
      </div>
    </div>
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
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
        placeholder="mail@example.com"
        required="true" />
    </div>
    <div>
      <label
        for="password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
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
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
        required="true" />
    </div>
    <div class="flex items-start">
      <div class="flex h-5 items-center">
        <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-600 dark:border-gray-600 dark:bg-gray-700"
          required="true" />
      </div>
      <div class="ml-3 text-sm">
        <label
          for="terms"
          class="font-light text-gray-500 dark:text-gray-300"
          >I accept the
          <a
            class="font-medium text-red-600 hover:underline"
            data-modal-target="term-and-conditions-modal"
            data-modal-toggle="term-and-conditions-modal"
            >Terms and Conditions</a
          ></label
        >
        <Modal
          id="term-and-conditions-modal"
          dataModalHide="term-and-conditions-modal"
          tabindex="-1"
          headingTitle="Terms &amp; Conditions"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
      </div>
    </div>
    <button
      type="submit"
      class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700">
      Create an account
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Already have an account?
      <router-link
        to="/signin"
        class="font-medium text-red-600 hover:underline"
        >Login here</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import Modal from '@shared/Modal/Modal.vue';
</script>
