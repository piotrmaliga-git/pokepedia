<template>
  <div
    class="hidden w-full items-center justify-between xl:order-1 xl:flex xl:w-auto"
    id="mobile-menu-language-select">
    <ul
      class="mt-4 flex flex-col rounded-lg border border-gray-400 bg-gray-100 p-4 font-medium dark:border-gray-500 dark:bg-gray-700 xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 xl:bg-transparent xl:p-0 dark:xl:bg-transparent">
      <li>
        <a
          href="#about"
          class="navbar-link navbar-link--dark"
          >{{ $t('nav.about') }}</a
        >
      </li>
      <li>
        <a
          href="#pokedex"
          class="navbar-link navbar-link--dark"
          >{{ $t('nav.pokedex') }}</a
        >
      </li>
      <li>
        <a
          href="#gamesAndApps"
          class="navbar-link navbar-link--dark"
          >{{ $t('nav.gamesAndApps') }}</a
        >
      </li>
      <li>
        <a
          href="#tradingCards"
          class="navbar-link navbar-link--dark"
          >{{ $t('nav.tradingCardGame') }}</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="navbar-link navbar-link--dark"
          >{{ $t('nav.contact') }}</a
        >
      </li>
      <li>
        <a
          href="#faq"
          class="navbar-link navbar-link--dark"
          >{{ $t('nav.faq') }}</a
        >
      </li>
      <template v-if="!auth.currentUser?.displayName">
        <router-link
          to="/signin"
          class="xl:hidden">
          <button
            type="button"
            class="btn my-4 mr-2 w-full border border-gray-500 py-2 text-gray-500 dark:border-white dark:text-white">
            Sign in
          </button>
        </router-link>
        <router-link
          to="/signup"
          class="xl:hidden">
          <button
            type="button"
            class="btn btn--red mb-4 mr-2 w-full py-2">
            Sign up
          </button>
        </router-link>
      </template>
      <template v-else>
        <button
          @click="signOutUser"
          type="button"
          class="btn btn--red mr-2 w-full py-2 xl:hidden">
          Sign Out
        </button>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();

const signOutUser = (): void => {
  signOut(auth)
    .then(result => {
      console.log('Successfully sign out!');
      router.push('/signin');
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
