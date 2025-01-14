import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
              title: "11 - Vertical Text with Outline",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge11",
          name: "challenge11",
          component: () => import("../views/Challenge11View.vue"),
          meta: {
            previous: {
              path: "/challenge10",
              title: "10 - Horizontal Scroller with Scroll Snap",
            },
            next: {
              path: "/challenge12",
              title: "12 - Same HTML, Different CSS",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge12",
          name: "challenge12",
          component: () => import("../views/challenge12/Challenge12View.vue"),
          meta: {
            previous: {
              path: "/challenge11",
              title: "11 - Vertical Text with Outline",
            },
            next: {
              path: "/challenge13",
              title: "13 - Three-State Toggle",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge13",
          name: "challenge13",
          component: () => import("../views/Challenge13View.vue"),
          meta: {
            previous: {
              path: "/challenge12",
              title: "12 - Same HTML, Different CSS",
            },
            next: {
              path: "/challenge14",
              title: "14 - Corner Ribbon",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge14",
          name: "challenge14",
          component: () => import("../views/Challenge14View.vue"),
          meta: {
            previous: {
              path: "/challenge13",
              title: "13 - Three-State Toggle",
            },
            next: {
              path: "/challenge15",
              title: "15 - Highlight Text",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge15",
          name: "challenge15",
          component: () => import("../views/Challenge15View.vue"),
          meta: {
            previous: {
              path: "/challenge14",
              title: "14 - Corner Ribbon",
            },
            next: {
              path: "/challenge16",
              title: "16 - Custom Scroll Bar",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge16",
          name: "challenge16",
          component: () => import("../views/Challenge16View.vue"),
          meta: {
            previous: {
              path: "/challenge15",
              title: "15 - Highlight Text",
            },
            next: {
              path: "/challenge17",
              title: "17 - CSS Only Brackets",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge17",
          name: "challenge17",
          component: () => import("../views/Challenge17View.vue"),
          meta: {
            previous: {
              path: "/challenge16",
              title: "16 - Custom Scroll Bar",
            },
            next: {
              path: "/challenge18",
              title: "18 - Skeleton Loading Image",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge18",
          name: "challenge18",
          component: () => import("../views/Challenge18View.vue"),
          meta: {
            previous: {
              path: "/challenge17",
              title: "17 - CSS Only Brackets",
            },
            next: {
              path: "/challenge19",
              title: "19 - News Layout with Container Queries",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge19",
          name: "challenge19",
          component: () => import("../views/challenge19/Challenge19View.vue"),
          meta: {
            previous: {
              path: "/challenge18",
              title: "18 - Skeleton Loading Image",
            },
            next: {
              path: "/challenge20",
              title: "20 - Frosted Glass Effect",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge20",
          name: "challenge20",
          component: () => import("../views/Challenge20View.vue"),
          meta: {
            previous: {
              path: "/challenge19",
              title: "19 - News Layout with Container Queries",
            },
            next: {
              path: "/challenge21",
              title: "21 - Theme Switcher",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge21",
          name: "challenge21",
          component: () => import("../views/Challenge21View.vue"),
          meta: {
            previous: {
              path: "/challenge20",
              title: "20 - Frosted Glass Effect",
            },
            next: {
              path: "/challenge22",
              title: "22 - Equal Column Layout",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge22",
          name: "challenge22",
          component: () => import("../views/Challenge22View.vue"),
          meta: {
            previous: {
              path: "/challenge21",
              title: "21 - Theme Switcher",
            },
            next: {
              path: "/challenge23",
              title: "23 - Animated Hamburger Menu",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge23",
          name: "challenge23",
          component: () => import("../views/Challenge23View.vue"),
          meta: {
            previous: {
              path: "/challenge22",
              title: "22 - Equal Column Layout",
            },
            next: {
              path: "/challenge24",
              title: "24 - Stacked Cards",
            },
            ...challengesAnim,
          },
        },
        {
          path: "/challenge24",
          name: "challenge24",
          component: () => import("../views/Challenge24View.vue"),
          meta: {
            previous: {
              path: "/challenge23",
              title: "23 - Animated Hamburger Menu",
            },
            ...challengesAnim,
          },
        },
      ],
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
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: "/",
    },
  ],
});

export default router;
