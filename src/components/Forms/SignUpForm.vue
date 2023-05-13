<template>
  <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
      Create and account
    </h1>
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
      <div>
        <label
          for="confirm-password"
          class="mb-2 block text-sm font-medium text-gray-900"
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
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-600"
            required="true" />
        </div>
        <div class="ml-3 text-sm">
          <label
            for="terms"
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
        Create an account
      </button>
      <p class="text-sm font-light text-gray-500">
        Already have an account?
        <router-link to="/signin">
          <a
            href="#"
            class="font-medium text-red-600 hover:underline"
            >Login here</a
          >
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
