import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/all',
      name: 'all',
      // lazy loading

      component: () => import('../pages/All.vue'),
    },
    {
      path: '/get/:id',
      name: 'get',

      component: () => import('../pages/get.vue'),
    },
    {
      path: '/post',
      name: 'post',

      component: () => import('../pages/post.vue'),
    },
  ],
});

export default router;
