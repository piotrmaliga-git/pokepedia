/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss', 'eslint-plugin-tailwindcss', 'flowbite/plugin')],
};
