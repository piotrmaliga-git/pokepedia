import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: { title: 'Login' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta: { title: 'Not Found' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ? `Poképedia | ${to.meta?.title}` : 'Poképedia';
  next();
});

export default router;
