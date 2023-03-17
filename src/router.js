import { createRouter, createWebHistory } from "vue-router";
import RepositoriesList from "./components/RepositoriesList.vue";
import RepositoryDetails from "./components/RepositoryDetails.vue";
import NotFound from "./components/NotFound.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
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
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;