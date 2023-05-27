<template>
  <footer class="bg-red-600">
    <div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <router-link
          to="/"
          class="mb-4 flex items-center sm:mb-0">
          <Image
            class="mr-3 h-12"
            alt="Pokepedia Logo"
            src="src/assets/images/logo/Pokepedia.png" />
        </router-link>
        <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-white sm:mb-0">
          <li>
            <a
              class="mr-4 cursor-pointer hover:underline md:mr-6"
              data-modal-target="about-modal"
              data-modal-toggle="about-modal"
              >About</a
            >
          </li>
          <Modal
            id="about-modal"
            dataModalHide="about-modal"
            tabindex="-1"
            headingTitle="About"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
          <li>
            <a
              class="mr-4 cursor-pointer hover:underline md:mr-6"
              data-modal-target="policy-modal"
              data-modal-toggle="policy-modal"
              >Privacy Policy</a
            >
          </li>
           <Modal
            id="policy-modal"
            dataModalHide="policy-modal"
            tabindex="-1"
            headingTitle="Privacy Policy"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
          <li>
            <a
              class="mr-4 cursor-pointer hover:underline md:mr-6"
              data-modal-target="license-modal"
              data-modal-toggle="license-modal"
              >Licensing</a
            >
          </li>
           <Modal
            id="license-modal"
            dataModalHide="license-modal"
            tabindex="-1"
            headingTitle="Licensing"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
          <li>
            <a
              class="cursor-pointer hover:underline"
              data-modal-target="contact-modal"
              data-modal-toggle="contact-modal"
              >Contact</a
            >
          </li>
           <Modal
            id="contact-modal"
            dataModalHide="contact-modal"
            tabindex="-1"
            headingTitle="Contact"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
        </ul>
      </div>
      <hr class="my-6 border-l-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-white sm:text-center"
        >&copy; {{ currentYear }}
        <router-link
          to="/"
          class="hover:underline"
          >Pokepedia&trade;</router-link
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
import Image from '@shared/Image/Image.vue';
import Modal from '@shared/Modal/Modal.vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useNow, useDateFormat } from '@vueuse/core';

onMounted(() => {
  initFlowbite();
});

const currentYear = useDateFormat(useNow(), 'YYYY');
</script>
