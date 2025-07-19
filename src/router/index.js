// import Home from "@/views/Home.vue";
import Acoomodation from "@/views/Acoomodation.vue";
import FaQ from "@/views/FaQ.vue";
import Gallery from "@/views/Gallery.vue";
import Home2 from "@/views/Home2.vue";
import Review from "@/views/Review.vue";
import Roompage from "@/views/Roompage.vue";
// import Test from "@/views/test.vue";
// import Test2 from "@/views/test2.vue";
// import Test3 from "@/views/test3.vue";
// import Test4 from "@/views/test4.vue";
// import Test5 from "@/views/test5.vue";
import Test6 from "@/views/test6.vue";
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
    {
      path: "/room",
      name: "room",
      component: Roompage,
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/test",
    //   name: "test",
    //   component: Test,
    // },
    // {
    //   path: "/test2",
    //   name: "test2",
    //   component: Test2,
    // },
    // {
    //   path: "/test3",
    //   name: "test3",
    //   component: Test3,
    // },
    // {
    //   path: "/test4",
    //   name: "test4",
    //   component: Test4,
    // },
    // {
    //   path: "/test5",
    //   name: "test5",
    //   component: Test5,
    // },
    {
      path: "/test6",
      name: "test6",
      component: Test6,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {top : 0};
  }
  });

export default router;
