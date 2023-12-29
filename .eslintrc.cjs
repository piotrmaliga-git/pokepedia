/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['tailwindcss'],
  ignorePatterns: ['*.config.js'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'Header',
          'Navbar',
          'Hero',
          'About',
          'Pokedex',
          'Image',
          'Contact',
          'Faq',
          'Footer',
          'Modal',
          'Toast',
          'Home',
        ],
      },
    ],
  },
};
