import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const Layouts = () => import('@/pages/layouts/index.vue');
const Home = () => import('@/pages/home/index.vue');
const Community = () => import('@/pages/community/index.vue');
const Share = () => import('@/pages/share/index.vue');
const Posts = () => import('@/pages/community/posts-detail/index.vue');
const Xswl = () => import('@/pages/picture/index.vue');
const Sign = () => import('@/pages/sign/index.vue');
const NotFound = () => import('@/pages/notfound/index.vue');
const Mobile = () => import('@/components/mobile/index.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layouts,
    redirect: '/home',
    meta: {
      keepAlive: true,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true,
        },
      },
      {
        path: '/s/:id',
        name: 'share',
        component: Share,
      },
      {
        path: '/community',
        name: 'community',
        component: Community,
        meta: {
          keepAlive: true,
        },
      },
      {
        path: '/p/:id',
        name: 'posts-detail',
        component: Posts,
      },
      {
        path: '/xswl',
        name: 'picture',
        component: Xswl,
      },
    ],
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign,
  },
  {
    path: '/:cathchAll(.*)',
    name: 'notfound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
