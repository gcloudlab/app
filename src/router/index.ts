import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
const Layouts = () => import("@/pages/layouts/index.vue");
const Home = () => import("@/pages/home/index.vue");
const Share = () => import("@/pages/share/index.vue");
const Xswl = () => import("@/pages/picture/index.vue");
const Sign = () => import("@/pages/sign/index.vue");
const NotFound = () => import("@/pages/notfound/index.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: Layouts,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/share",
        name: "share",
        component: Share,
      },
      {
        path: "/xswl",
        name: "picture",
        component: Xswl,
      },
    ],
  },
  {
    path: "/sign",
    name: "sign",
    component: () => Sign,
  },
  {
    path: "/:cathchAll(.*)",
    name: "notfound",
    component: () => NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
