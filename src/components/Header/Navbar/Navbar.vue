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
        <template v-if="!auth.currentUser?.displayName">
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
        </template>
        <template v-else>
          <button
            @click="signOutUser"
            type="button"
            class="btn btn--red mr-2 hidden px-4 py-2 xl:block">
            Sign Out
          </button>
        </template>
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
import ThemeToggleButton from '@components/Header/Navbar/ThemeToggleButton.vue';
import LangToggleDropdown from '@components/Header/Navbar/LangToggleButton.vue';
import NavbarLinks from '@components/Header/Navbar/NavbarLinks.vue';
import Image from '@shared/Image/Image.vue';

import logoImage from '@assets/images/logo/Pokepedia.png';

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth';
import { initFlowbite } from 'flowbite';
import { Icon } from '@iconify/vue';

onMounted(() => {
  initFlowbite();
});

const auth = getAuth();
const router = useRouter();

const signOutUser = (): void => {
  signOut(auth)
    .then(() => {
      console.log('Successfully sign out!');
      console.log(auth.currentUser);
      router.push('/signin');
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
