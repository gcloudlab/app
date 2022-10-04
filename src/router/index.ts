import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import { isMobile } from '@/utils/is-mobile';
const Layouts = () => import('@/pages/layouts/index.vue');
const Home = () => import('@/pages/home/index.vue');
const Share = () => import('@/pages/share/index.vue');
const Community = () => import('@/pages/community/index.vue');
const Xswl = () => import('@/pages/picture/index.vue');
const Sign = () => import('@/pages/sign/index.vue');
const NotFound = () => import('@/pages/notfound/index.vue');
const TsxDemo = () => import('@/pages/tsx-demo');
const Mobile = () => import('@/components/mobile/index.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layouts,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
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
    component: !isMobile() ? Sign : Mobile,
  },
  {
    path: '/tsx-demo',
    name: 'tsxDemo',
    component: TsxDemo,
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
