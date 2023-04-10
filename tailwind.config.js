/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('./src/assets/images/hero-image/hero-image.jpg')",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss', 'eslint-plugin-tailwindcss', 'flowbite/plugin')],
};
