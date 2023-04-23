<template>
  <div class="h-screen max-w-full bg-hero-image bg-cover bg-fixed bg-no-repeat">
    <div class="h-screen max-w-full bg-black/50">
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
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              class="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
              <Icon
                icon="emojione:flag-for-united-states"
                width="22"
                height="22"
                class="mr-2"
                aria-hidden="true" />
              English
            </button>
            <!-- Dropdown -->
            <div
              class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-gray-100 text-base shadow"
              id="language-dropdown-menu">
              <ul
                class="py-2 font-medium"
                role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    role="menuitem">
                    <div class="inline-flex items-center">
                      <Icon
                        icon="emojione:flag-for-united-states"
                        width="16"
                        height="16"
                        class="mr-2"
                        aria-hidden="true" />
                      English
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    role="menuitem">
                    <div class="inline-flex items-center">
                      <Icon
                        icon="emojione:flag-for-poland"
                        width="16"
                        height="16"
                        class="mr-2" />
                      Polski
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-language-select"
              type="button"
              class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
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
          <div
            class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-language-select">
            <ul
              class="mt-4 flex flex-col rounded-lg border bg-gray-100 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  >Pokédex</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  >Games & Apps</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  >Trading Card Game</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  >Contact</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-48 text-gray-700 hover:bg-gray-200 lg:p-0 lg:text-white lg:hover:scale-105 lg:hover:bg-transparent lg:hover:text-red-600"
                  >FQA</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Hero />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hero from './Hero.vue';

import { Icon } from '@iconify/vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>
