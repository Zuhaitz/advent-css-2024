import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
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
      component: () => import("../views/Challenge1View.vue"),
    },
    {
      path: "/challenge2",
      name: "challenge2",
      component: () => import("../views/Challenge2View.vue"),
    },
    {
      path: "/challenge3",
      name: "challenge3",
      component: () => import("../views/Challenge3View.vue"),
    },
    {
      path: "/challenge4",
      name: "challenge4",
      component: () => import("../views/Challenge4View.vue"),
    },
    {
      path: "/challenge5",
      name: "challenge5",
      component: () => import("../views/Challenge5View.vue"),
    },
    {
      path: "/challenge6",
      name: "challenge6",
      component: () => import("../views/Challenge6View.vue"),
    },
  ],
});

export default router;
