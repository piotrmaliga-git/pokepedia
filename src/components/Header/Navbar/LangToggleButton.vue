<template>
  <!-- <button
   @change="switchLanguage"
    type="button"
    data-dropdown-toggle="language-dropdown-menu"
    class="mr-2 inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
    <Icon
      icon="emojione:flag-for-united-states"
      width="22"
      height="22"
      class="mr-2"
      aria-hidden="true" />
    English
  </button>

  <div
    class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-gray-100 text-base shadow dark:bg-gray-700"
    id="language-dropdown-menu">
    <ul
      class="py-2 font-medium"
      role="none">
      <li v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
      @change="switchLanguage"
      >
        <a
          href="#"
          
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem">
          <div class="inline-flex items-center">
            {{ t(`locale.${sLocale}`) }}
          </div>
        </a>
      </li>
    </ul>
  </div> -->

  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'
//import { Icon } from '@iconify/vue';

export default defineComponent({
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales
    const router = useRouter()

    const switchLanguage = async (event: Event) => {
      const newLocale = (event.target as HTMLSelectElement).value

      await Tr.switchLanguage(newLocale)

      try {
        await router.replace({ params: { locale: newLocale } })
      } catch (e) {
        console.log(e)
        router.push('/')
      }
    }

    return { t, locale, supportedLocales, switchLanguage }
  },
})
</script>
