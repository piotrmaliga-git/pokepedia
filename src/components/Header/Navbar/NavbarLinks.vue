<template>
  <div
    class="hidden w-full items-center justify-between xl:order-1 xl:flex xl:w-auto"
    id="mobile-menu-language-select">
    <ul
      class="mt-4 flex flex-col rounded-lg bg-gray-100 p-4 font-medium dark:bg-gray-700 xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 xl:bg-transparent xl:p-0 dark:xl:bg-transparent">
      <li>
        <a
          href="#about"
          class="navbar-link navbar-link--dark"
          >{{ NavbarLinks.about }}</a
        >
      </li>
      <li>
        <a
          href="#pokedex"
          class="navbar-link navbar-link--dark"
          >{{ NavbarLinks.pokedex }}</a
        >
      </li>
      <li>
        <a
          href="#"
          class="navbar-link navbar-link--dark"
          >{{ NavbarLinks.gamesAndApps }}</a
        >
      </li>
      <li>
        <a
          href="#"
          class="navbar-link navbar-link--dark"
          >{{ NavbarLinks.tradingCardGame }}</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="navbar-link navbar-link--dark"
          >{{ NavbarLinks.contact }}</a
        >
      </li>
      <li>
        <a
          href="#faq"
          class="navbar-link navbar-link--dark"
          >{{ NavbarLinks.faq }}</a
        >
      </li>
      <router-link
        to="/signin"
        class="xl:hidden">
        <button
          type="button"
          class="btn my-4 mr-2 w-full border-2 border-gray-500 py-2 text-gray-500">
          Sign in
        </button>
      </router-link>
      <router-link
        to="/signup"
        class="xl:hidden">
        <button
          type="button"
          class="btn btn--red mr-2 w-full py-2">
          Sign up
        </button>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { NavbarLinks } from '@/constants/header';
</script>
