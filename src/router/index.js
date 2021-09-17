import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/diagnosis",
    name: "Diagnosis",
    component: () =>
      import(/* webpackChunkName: "Diagnosis" */ "../views/Diagnosis"),
  },
  {
    path: "/diagnosisConfirm",
    name: "Diagnosis Confirm",
    component: () =>
      import(/* webpackChunkName: "diagnosisConfirm" */ "../components/diagnosis/diagnosisConfirm"),
  },
  {
    path: "/diagnosisBody",
    name: "Diagnosis Body",
    component: () =>
      import(/* webpackChunkName: "diagnosisBody" */ "../components/diagnosis/diagnosisBody"),
  },
  {
    path: "/diagnosisProbability",
    name: "diagnosis Probability",
    component: () =>
      import(/* webpackChunkName: "diagnosisProbability" */ "../components/diagnosis/diagnosisProbability"),
  },
  {
    path: "/diagnosisResult",
    name: "diagnosis Probability",
    component: () =>
      import(/* webpackChunkName: "diagnosisResult" */ "../components/diagnosis/diagnosisResult"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
