import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MapSelector from "../components/MapSelector.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MapSelector,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
