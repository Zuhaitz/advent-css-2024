import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/challenge1",
      name: "challenge1",
      component: () => import("../views/Challenge01View.vue"),
    },
    {
      path: "/challenge2",
      name: "challenge2",
      component: () => import("../views/Challenge02View.vue"),
    },
    {
      path: "/challenge3",
      name: "challenge3",
      component: () => import("../views/Challenge03View.vue"),
    },
    {
      path: "/challenge4",
      name: "challenge4",
      component: () => import("../views/Challenge04View.vue"),
    },
    {
      path: "/challenge5",
      name: "challenge5",
      component: () => import("../views/Challenge05View.vue"),
    },
    {
      path: "/challenge6",
      name: "challenge6",
      component: () => import("../views/Challenge06View.vue"),
    },
    {
      path: "/challenge7",
      name: "challenge7",
      component: () => import("../views/Challenge07View.vue"),
    },
    {
      path: "/challenge8",
      name: "challenge8",
      component: () => import("../views/Challenge08View.vue"),
    },
    {
      path: "/challenge9",
      name: "challenge9",
      component: () => import("../views/Challenge09View.vue"),
    },
  ],
});

export default router;
