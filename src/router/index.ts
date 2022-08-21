import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/pages/layouts/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "/share",
        name: "share",
        component: () => import("@/pages/share/index.vue"),
      },
      {
        path: "/xswl",
        name: "picture",
        component: () => import("@/pages/picture/index.vue"),
      },
    ],
  },
  {
    path: "/sign",
    name: "sign",
    component: () => import("@/pages/sign/index.vue"),
  },
  {
    path: "/:cathchAll(.*)",
    name: "notfound",
    component: () => import("@/pages/notfound/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
