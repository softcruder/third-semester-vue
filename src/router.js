import { createRouter, createWebHistory } from "vue-router";
import RepositoriesList from "./components/RepositoriesList.vue";
import RepositoryDetails from "./components/RepositoryDetails.vue";
import NotFound from "./components/NotFound.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    alias: ["/home"],
  },
  {
    path: "/repositories",
    name: "RepositoriesList",
    component: RepositoriesList,
  },
  {
    path: "/repository/:name",
    name: "RepositoryDetails",
    component: RepositoryDetails,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;