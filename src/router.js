import {createRouter, createWebHistory} from 'vue-router'
import TopsView from "@/views/TopsView";
import SearchView from "@/views/SearchView";
import MoviesView from "@/views/MoviesView";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
