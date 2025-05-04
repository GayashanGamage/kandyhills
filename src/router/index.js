import Home2 from "@/views/Home2.vue";
import HomeView from "@/views/HomeView.vue";
import Test from "@/views/Test.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      name: "home2",
      component: Home2,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});

export default router;
