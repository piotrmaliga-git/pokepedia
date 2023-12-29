import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import i18n from './i18n';

import '@styles/main.css';

import '@fontsource/rubik';
import '@fontsource/rubik/700.css';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDgFEYvVEafC0HbLndUFSMMQVrPGleKra8',
  authDomain: 'pokepedia-689e5.firebaseapp.com',
  projectId: 'pokepedia-689e5',
  storageBucket: 'pokepedia-689e5.appspot.com',
  messagingSenderId: '1016956860482',
  appId: '1:1016956860482:web:5336b6d03d28cc449255db',
  measurementId: 'G-LPXC81RWCK',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

createApp(App).use(router).use(i18n).mount('#app');
