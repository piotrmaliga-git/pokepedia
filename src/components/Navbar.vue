<template>
  <div class="h-screen max-w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat">
    <div class="h-screen max-w-full bg-black/60">
      <nav class="absolute z-50 w-full">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            class="flex items-center">
            <img
              src="../assets/images/logo/Pokepedia.png"
              class="mr-3 h-12"
              alt="Pokepedia Logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <ThemeToggleButton />
            <LangToggleDropdown />
            <router-link to="/signin">
              <button
                type="button"
                class="btn mr-2 px-4 py-2">
                Sign in
              </button>
            </router-link>
            <router-link to="/signup">
              <button
                type="button"
                class="btn btn--red mr-2 px-4 py-2">
                Sign up
              </button>
            </router-link>
            <button
              data-collapse-toggle="mobile-menu-language-select"
              type="button"
              class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-language-select"
              aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <Icon
                icon="charm:menu-hamburger"
                width="24"
                height="24"
                aria-hidden="true" />
            </button>
          </div>
          <NavbarLinks />
        </div>
      </nav>
      <Hero />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeToggleButton from './Buttons/ThemeToggleButton.vue';
import LangToggleDropdown from './Buttons/LangToggleButton.vue';
import NavbarLinks from './NavbarLinks.vue';
import Hero from './Hero.vue';

import { Icon } from '@iconify/vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>
