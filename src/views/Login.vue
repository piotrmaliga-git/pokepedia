<template>
  <section>
    <div
      class="mx-auto flex h-screen max-w-full flex-col items-center justify-center bg-hero-image bg-cover bg-fixed bg-no-repeat px-6 py-8 lg:py-0">
      <a
        href="/"
        class="flex items-center">
        <img
          src="../assets/images/logo/Pokepedia.png"
          class="mr-3 h-20"
          alt="Pokepedia Logo" />
      </a>
      <div class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
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
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
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
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
                required="true" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-800"
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
                class="text-sm font-medium text-red-800 hover:underline"
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-red-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300">
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500">
              Don't have an account yet?
              <a
                href="#"
                class="font-medium text-red-800 hover:underline"
                >Sign up</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
