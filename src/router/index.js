import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView.vue');
const DoisView = () => import('../views/DoisView.vue');

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/dois',
      name: 'Dois',
      component: DoisView,
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' },
    },
  ],
});

export default router;
