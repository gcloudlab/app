import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/pages/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        path: '/share',
        name: 'Share',
        component: () => import('@/pages/share/index.vue'),
      },
    ],
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('@/pages/auth/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
