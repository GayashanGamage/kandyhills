// import Home from "@/views/Home.vue";
import Acoomodation from "@/views/Acoomodation.vue";
import Blog from "@/views/Blog.vue";
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
import Test7 from "@/views/test7.vue";

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
      path: "/accomodation/:roomid",
      name: "roomdetails",
      component: Roompage,
      props: true,
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
    //   path: "/room",
    //   name: "room",
    //   component: Roompage,
    //   children : {
    //     path: ":id",
    //     name: "roomdetails",
    //     component: Roompage,
    //   }
    // },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
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
    {
      path: "/test7",
      name: "test7",
      component: Test7,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if(!to.hash){
      return {top : 0};
    }
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  }
  });

export default router;
