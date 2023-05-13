/** @type {import('tailwindcss').Config} **/

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#f3f4f6',
          dark: '#111827',
        },
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/images/hero-image/hero-image.jpg')",
        'auth': "url('/src/assets/images/backgrounds/auth.png')",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss', 'eslint-plugin-tailwindcss', 'flowbite/plugin')],
};
