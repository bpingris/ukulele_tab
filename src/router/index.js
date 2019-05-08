import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "@/views/About")
    },
    {
      path: "/admin",
      component: () => import("@/views/Admin"),
      children: [
        {
          path: "",
          component: () => import("@/views/Admin/Default"),
          name: "admin"
        },
        {
          path: "chords",
          name: "admin.chords",
          component: () => import("@/views/Admin/Chords")
        }
      ]
    },
    {
      path: "/sandbox",
      name: "sandbox",
      component: () => import("@/views/Sandbox")
    }
  ]
});
