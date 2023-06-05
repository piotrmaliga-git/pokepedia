<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="-mb-px flex flex-wrap text-center font-medium"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist">
      <li
        class="mr-2"
        role="presentation">
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="profile-tab"
          data-tabs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">
          Profile
        </button>
      </li>
      <li
        class="mr-2"
        role="presentation">
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="dashboard-tab"
          data-tabs-target="#dashboard"
          type="button"
          role="tab"
          aria-controls="dashboard"
          aria-selected="false">
          Dashboard
        </button>
      </li>
      <li
        class="mr-2"
        role="presentation">
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="settings-tab"
          data-tabs-target="#settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false">
          Settings
        </button>
      </li>
      <li role="presentation">
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="contacts-tab"
          data-tabs-target="#contacts"
          type="button"
          role="tab"
          aria-controls="contacts"
          aria-selected="false">
          Contacts
        </button>
      </li>
    </ul>
  </div>
  <div id="myTabContent">
    <div
      class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab">
      <p class="text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ornare eros id
        gravida. Mauris dignissim urna ut mauris egestas feugiat. Vivamus augue elit, sagittis ac
        nulla eu, aliquam aliquet enim. Nulla vitae urna sapien. Vestibulum magna ligula, bibendum
        in nibh ut, convallis fermentum odio. Aenean sit amet volutpat diam. Suspendisse sed dolor
        non leo cursus congue. Donec at luctus mauris, vel ultrices lacus. Curabitur nec sagittis
        mauris. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, et accusantium. Et rem
      </p>
    </div>
    <div
      class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
      id="dashboard"
      role="tabpanel"
      aria-labelledby="dashboard-tab">
      <p class="text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ornare eros id
        gravida. Mauris dignissim urna ut mauris egestas feugiat. Vivamus augue elit, sagittis ac
        nulla eu, aliquam aliquet enim. Nulla vitae urna sapien. Vestibulum magna ligula, bibendum
        in nibh ut, convallis fermentum odio. Aenean sit amet volutpat diam. Suspendisse sed dolor
        non leo cursus congue. Donec at luctus mauris, vel ultrices lacus. Curabitur nec sagittis
        mauris. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, et accusantium. Et rem
      </p>
    </div>
    <div
      class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab">
      <p class="text-gray-500 dark:text-gray-400">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ornare eros id
        gravida. Mauris dignissim urna ut mauris egestas feugiat. Vivamus augue elit, sagittis ac
        nulla eu, aliquam aliquet enim. Nulla vitae urna sapien. Vestibulum magna ligula, bibendum
        in nibh ut, convallis fermentum odio. Aenean sit amet volutpat diam. Suspendisse sed dolor
        non leo cursus congue. Donec at luctus mauris, vel ultrices lacus. Curabitur nec sagittis
        mauris. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, et accusantium. Et rem
      </p>
    </div>
    <div
      class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
      id="contacts"
      role="tabpanel"
      aria-labelledby="contacts-tab">
      <p class="text-gray-500 dark:text-gray-400">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ornare eros id
        gravida. Mauris dignissim urna ut mauris egestas feugiat. Vivamus augue elit, sagittis ac
        nulla eu, aliquam aliquet enim. Nulla vitae urna sapien. Vestibulum magna ligula, bibendum
        in nibh ut, convallis fermentum odio. Aenean sit amet volutpat diam. Suspendisse sed dolor
        non leo cursus congue. Donec at luctus mauris, vel ultrices lacus. Curabitur nec sagittis
        mauris. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, et accusantium. Et rem
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>
