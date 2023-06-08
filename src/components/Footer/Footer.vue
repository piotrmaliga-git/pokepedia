<template>
  <footer class="bg-red-600">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <router-link
            to="/"
            class="flex items-center">
            <Image
              class="mr-3 h-12"
              alt="Pokepedia Logo"
              :src="logoImage" />
          </router-link>
        </div>
        <FooterLinks/>
      </div>
      <hr class="my-6 border-l-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-white sm:text-center"
          >&copy; {{ currentYear }}
          <router-link
            to="/"
            class="hover:underline"
            >Pokepedia&trade;</router-link
          >. All Rights Reserved.
        </span>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="text-white hover:text-gray-200">
            <Icon
              icon="mdi:facebook"
              width="20"
              height="20" />
            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="text-white hover:text-gray-200">
            <Icon
              icon="mdi:instagram"
              width="20"
              height="20" />
            <span class="sr-only">Instagram page</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            class="text-white hover:text-gray-200">
            <Icon
              icon="mdi:twitter"
              width="20"
              height="20" />
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="https://github.com/piotrmaliga-git/pokepedia"
            target="_blank"
            class="text-white hover:text-gray-200">
            <Icon
              icon="mdi:github"
              width="20"
              height="20" />
            <span class="sr-only">GitHub account</span>
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            class="text-white hover:text-gray-200">
            <Icon
              icon="ph:dribbble-logo"
              width="20"
              height="20" />
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterLinks from "./FooterLinks.vue"
import Image from '@shared/Image/Image.vue';
import Modal from '@shared/Modal/Modal.vue';
import { Icon } from '@iconify/vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useNow, useDateFormat } from '@vueuse/core';

import logoImage from '@assets/images/logo/Pokepedia.png';

onMounted(() => {
  initFlowbite();
});

const currentYear = useDateFormat(useNow(), 'YYYY');
</script>
