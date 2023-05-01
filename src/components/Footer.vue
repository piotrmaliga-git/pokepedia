<template>
  <footer class="bg-red-600">
    <div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="/"
          class="mb-4 flex items-center sm:mb-0">
          <img
            src="../assets/images/logo/Pokepedia.png"
            class="mr-3 h-12"
            alt="Pokepedia Logo" />
        </a>
        <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-white sm:mb-0">
          <li>
            <a
              class="mr-4 hover:underline md:mr-6"
              data-modal-target="about-modal"
              data-modal-toggle="about-modal"
              >About</a
            >
          </li>
          <AboutModal />
          <li>
            <a
              class="mr-4 hover:underline md:mr-6"
              data-modal-target="policy-modal"
              data-modal-toggle="policy-modal"
              >Privacy Policy</a
            >
          </li>
          <PolicyModal />
          <li>
            <a
              href="#"
              class="mr-4 hover:underline md:mr-6"
              >Licensing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:underline"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <hr class="my-6 border-l-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-white sm:text-center"
        >&copy; {{ displayCurrentYear() }}
        <a
          href="/"
          class="hover:underline"
          >Pokepedia&trade;</a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
import AboutModal from './Modals/AboutModal.vue';
import PolicyModal from './Modals/PolicyModal.vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});

const displayCurrentYear = (): number => {
  const currentDate: Date = new Date();

  return currentDate.getFullYear();
};
</script>
