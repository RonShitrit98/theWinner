import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "../views/home-view.vue";
import aboutView from "../views/about-view.vue";
import authView from "../views/auth-view.vue";
import userView from "../views/user-view.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/about",
      name: "about",
      component: aboutView,
    },
    {
      path: "/auth",
      name: "auth",
      component: authView,
    },
    {
      path: "/account",
      name: "account",
      component: userView,
    },
  ],
});

export default router;
