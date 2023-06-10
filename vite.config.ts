import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';

import { defineConfig, type PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    visualizer() as PluginOption,
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@shared': path.resolve(__dirname, './src/components/shared'),
      '@interfaces': path.resolve(__dirname, './src/types/interfaces'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
});
