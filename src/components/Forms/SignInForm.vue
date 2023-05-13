<template>
  <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
      Sign in to your account
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
        <router-link to="/signup">
          <a class="font-medium text-red-600 hover:underline">Sign up</a>
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
