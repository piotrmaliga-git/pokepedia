<template>
  <button
    type="button"
    data-dropdown-toggle="language-dropdown-menu"
    class="inline-flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-white rounded-lg cursor-pointer hover:bg-red-600">
    <Icon
      :icon="locale === 'en' ? 'emojione:flag-for-united-states' : 'emojione:flag-for-poland'"
      width="22"
      height="22"
      class="mr-2" />
    {{ locale === 'en' ? t(`locale.en`) : t(`locale.pl`) }}
  </button>

  <div
    class="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
    id="language-dropdown-menu">
    <ul
      class="py-2 font-medium"
      role="none">
      <li
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"
        @click="switchLanguage">
        <div
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem">
          <div class="inline-flex items-center">
            <Icon
              :icon="
                sLocale === 'en' ? 'emojione:flag-for-united-states' : 'emojione:flag-for-poland'
              "
              width="16"
              height="16"
              class="mr-2" />
            {{ t(`locale.${sLocale}`) }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Tr from '@/i18n/translation';
import { Icon } from '@iconify/vue';

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;

const switchLanguage = async (event: Event): Promise<void> => {
  const newLocale = (event.target as HTMLSelectElement).value;

  await Tr.switchLanguage(newLocale);
};
</script>
