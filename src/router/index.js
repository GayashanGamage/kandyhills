// import Home from "@/views/Home.vue";
import Acoomodation from "@/views/Acoomodation.vue";
import FaQ from "@/views/FaQ.vue";
import Gallery from "@/views/Gallery.vue";
import Home2 from "@/views/Home2.vue";
import Review from "@/views/Review.vue";
import Roompage from "@/views/Roompage.vue";
import Test from "@/views/test.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home2",
      component: Home2,
    },
    {
      path: "/accomodation",
      name: "accomodation",
      component: Acoomodation,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaQ,
    },
    {
      path: "/reviews",
      name: "review",
      component: Review,
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home,
    // },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/room",
      name: "room",
      component: Roompage,
    },
  ],
});

export default router;
