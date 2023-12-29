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
        theme: {
          light: '#f3f4f6',
          dark: '#111827',
        },
      },
      backgroundImage: {
        hero: "url('/src/assets/images/backgrounds/hero.jpg')",
        auth: "url('/src/assets/images/backgrounds/auth.png')",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss', 'flowbite/plugin')],
};
