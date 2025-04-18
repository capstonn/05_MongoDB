import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/contacts',
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/ContactListPage.vue'),
      children: [
        {
          path: '/contacts/detail/:id',
          name: 'contacts/detail',
          component: () => import('../pages/ContactDetailPage.vue'),
        },
        {
          path: '/contacts/write',
          name: 'contacts/write',
          component: () => import('../pages/ContactWritePage.vue'),
        },
        {
          path: '/contacts/edit/:id',
          name: 'contacts/edit',
          component: () => import('../pages/ContactEditPage.vue'),
        },
      ],
    },
  ],
});

export default router;
