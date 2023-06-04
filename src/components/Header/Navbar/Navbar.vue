<template>
  <nav class="absolute z-50 w-full">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <router-link
        to="/"
        class="flex items-center">
        <Image
          class="mr-3 h-12"
          alt="Pokepedia Logo"
          :src="logoImage" />
      </router-link>
      <div class="flex items-center xl:order-2">
        <ThemeToggleButton />
        <LangToggleDropdown />
        <router-link
          to="/signin"
          class="hidden xl:block">
          <button
            type="button"
            class="btn mr-2 px-4 py-2">
            Sign in
          </button>
        </router-link>
        <router-link
          to="/signup"
          class="hidden xl:block">
          <button
            type="button"
            class="btn btn--red mr-2 px-4 py-2">
            Sign up
          </button>
        </router-link>
        <button
          data-collapse-toggle="mobile-menu-language-select"
          type="button"
          class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 xl:hidden"
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
</template>

<script setup lang="ts">
import ThemeToggleButton from './ThemeToggleButton.vue';
import LangToggleDropdown from './LangToggleButton.vue';
import NavbarLinks from './NavbarLinks.vue';
import Image from '@shared/Image/Image.vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { Icon } from '@iconify/vue';

import logoImage from '@assets/images/logo/Pokepedia.png'

onMounted(() => {
  initFlowbite();
});
</script>
