import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SignIn/SignIn.vue'),
      meta: { title: 'Sign in' },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUp/SignUp.vue'),
      meta: { title: 'Sign up' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound/NotFound.vue'),
      meta: { title: 'Not Found' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ? `Poképedia | ${to.meta?.title}` : 'Poképedia';
  next();
});

export default router;
