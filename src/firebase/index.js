import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDgFEYvVEafC0HbLndUFSMMQVrPGleKra8',
  authDomain: 'pokepedia-689e5.firebaseapp.com',
  projectId: 'pokepedia-689e5',
  storageBucket: 'pokepedia-689e5.appspot.com',
  messagingSenderId: '1016956860482',
  appId: '1:1016956860482:web:5336b6d03d28cc449255db',
  measurementId: 'G-LPXC81RWCK',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
