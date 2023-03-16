import Vue from "vue";
import Router from "vue-router";
import TopsView from "@/views/TopsView";
import SearchView from "@/views/SearchView";
import MoviesView from "@/views/MoviesView";

Vue.use(Router);

export default new Router({
  //mode: 'history',
  base: process.env.NODE_ENV === "development" ? "/" : "/vue-movies/",
  routes: [
    {
      path: "/",
      redirect: { name: "tops" }
    },
    {
      path: "/tops",
      name: "tops",
      component: TopsView
    },
    {
      path: "/search",
      name: "search",
      component: SearchView
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView
    },
    {
      path: "/*",
      redirect: { name: "tops" }
    }
  ]
});