<template>
  <div
    class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
    id="mobile-menu-language-select">
    <ul
      class="mt-4 flex flex-col rounded-lg bg-gray-100 p-4 font-medium dark:bg-gray-700 lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0 dark:lg:bg-transparent">
      <li>
        <a
          href="#about"
          class="navbar-link navbar-link--dark"
          >About</a
        >
      </li>
      <li>
        <a
          href="#pokedex"
          class="navbar-link navbar-link--dark"
          >Pokédex</a
        >
      </li>
      <li>
        <a
          href="#"
          class="navbar-link navbar-link--dark"
          >Games & Apps</a
        >
      </li>
      <li>
        <a
          href="#"
          class="navbar-link navbar-link--dark"
          >Trading Card Game</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="navbar-link navbar-link--dark"
          >Contact</a
        >
      </li>
      <li>
        <a
          href="#faq"
          class="navbar-link navbar-link--dark"
          >FAQ</a
        >
      </li>
      <router-link
        to="/signin"
        class="lg:hidden">
        <button
          type="button"
          class="btn my-4 mr-2 w-full border-2 border-gray-500 py-2 text-gray-500">
          Sign in
        </button>
      </router-link>
      <router-link
        to="/signup"
        class="lg:hidden">
        <button
          type="button"
          class="btn btn--red mr-2 w-full py-2">
          Sign up
        </button>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
