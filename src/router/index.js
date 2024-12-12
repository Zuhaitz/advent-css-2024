import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const challengesAnim = {
  enterClass: "animate__animated animate__fadeInUp",
  leaveClass: "animate__animated animate__fadeOutDown",
};

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: DefaultLayout,
      redirect: "/",
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
          meta: {
            enterClass: "animate__animated animate__fadeInLeft",
            leaveClass: "animate__animated animate__fadeOutRight",
          },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
          meta: {
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutLeft",
          },
        },
        {
          path: "/challenge1",
          name: "challenge1",
          component: () => import("../views/Challenge01View.vue"),
          meta: {
            next: { path: "/challenge2", title: "2 - CSS Only Toggle" },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge2",
          name: "challenge2",
          component: () => import("../views/Challenge02View.vue"),
          meta: {
            previous: { path: "/challenge1", title: "1 - Gallery" },
            next: { path: "/challenge3", title: "3 - CSS Only Tooltip" },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge3",
          name: "challenge3",
          component: () => import("../views/Challenge03View.vue"),
          meta: {
            previous: { path: "/challenge2", title: "2 - CSS Only Toggle" },
            next: { path: "/challenge4", title: "4 - Header Styling" },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge4",
          name: "challenge4",
          component: () => import("../views/Challenge04View.vue"),
          meta: {
            previous: { path: "/challenge3", title: "3 - CSS Only Tooltip" },
            next: {
              path: "/challenge5",
              title: "5 - Scroll up to Reveal the Footer",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge5",
          name: "challenge5",
          component: () => import("../views/Challenge05View.vue"),
          meta: {
            previous: { path: "/challenge4", title: "4 - Header Styling" },
            next: {
              path: "/challenge6",
              title: "6 - Scroll Indicator",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge6",
          name: "challenge6",
          component: () => import("../views/Challenge06View.vue"),
          meta: {
            previous: {
              path: "/challenge5",
              title: "5 - Scroll up to Reveal the Footer",
            },
            next: {
              path: "/challenge7",
              title: "7 - Animated Label",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge7",
          name: "challenge7",
          component: () => import("../views/Challenge07View.vue"),
          meta: {
            previous: {
              path: "/challenge6",
              title: "6 - Scroll Indicator",
            },
            next: {
              path: "/challenge8",
              title: "8 - Scroll into View, Top Nav",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge8",
          name: "challenge8",
          component: () => import("../views/Challenge08View.vue"),
          meta: {
            previous: {
              path: "/challenge7",
              title: "7 - Animated Label",
            },
            next: {
              path: "/challenge9",
              title: "9 - Button with a Gradient Border",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge9",
          name: "challenge9",
          component: () => import("../views/Challenge09View.vue"),
          meta: {
            previous: {
              path: "/challenge8",
              title: "8 - Scroll into View, Top Nav",
            },
            next: {
              path: "/challenge10",
              title: "10 - Horizontal Scroller with Scroll Snap",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge10",
          name: "challenge10",
          component: () => import("../views/Challenge10View.vue"),
          meta: {
            previous: {
              path: "/challenge9",
              title: "9 - Button with a Gradient Border",
            },
            next: {
              path: "/challenge11",
              title: "10 - ",
            },
            ...challengesAnim,
          },
        },
      ],
    },
  ],
});

export default router;
