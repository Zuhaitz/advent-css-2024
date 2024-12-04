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
  ],
});

export default router;
