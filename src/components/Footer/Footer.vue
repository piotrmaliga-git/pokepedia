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
        <FooterLinks />
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
        <FooterIcons />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterLinks from '@components/Footer/FooterLinks.vue';
import FooterIcons from '@components/Footer/FooterIcons.vue';

import Image from '@shared/Image/Image.vue';
import logoImage from '@assets/images/logo/Pokepedia.png';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useNow, useDateFormat } from '@vueuse/core';

onMounted(() => {
  initFlowbite();
});

const currentYear = useDateFormat(useNow(), 'YYYY');
</script>
