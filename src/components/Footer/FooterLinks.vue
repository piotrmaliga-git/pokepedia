<template>
  <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-800">Resources</h2>
      <ul class="font-medium text-white">
        <li class="mb-4">
          <a
            href="https://www.pokemon.com/us"
            target="_blank"
            class="hover:underline"
            >Pokemon</a
          >
        </li>
        <li>
          <a
            href="https://bulbagarden.net"
            target="_blank"
            class="hover:underline"
            >Bulbagarden</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-800">Follow us</h2>
      <ul class="font-medium text-white">
        <li class="mb-4">
          <a
            href="https://github.com/piotrmaliga-git/pokepedia"
            target="_blank"
            class="hover:underline"
            >Github</a
          >
        </li>
        <li>
          <a
            href="https://discord.gg"
            target="_blank"
            class="hover:underline"
            >Discord</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-800">Legal</h2>
      <ul class="font-medium text-white">
        <li class="mb-4">
          <a
            class="hover:underline"
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
            class="hover:underline"
            data-modal-target="term-and-conditions-modal"
            data-modal-toggle="term-and-conditions-modal"
            >Terms &amp; Conditions</a
          >
        </li>
        <Modal
          id="term-and-conditions-modal"
          dataModalHide="term-and-conditions-modal"
          tabindex="-1"
          headingTitle="Terms &amp; Conditions"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Modal from '@shared/Modal/Modal.vue';
</script>
