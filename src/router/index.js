import Vue from "vue";
import VueRouter from "vue-router";
import Magnifier from "../views/magnifier";
import Home from "../views/home";
import CheckIn from '../views/checkIn';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/magnifier",
    component: Magnifier
  },
  {
    path: "/checkIn",
    component: CheckIn
  }
];

const router = new VueRouter({
  routes
});

export default router;
