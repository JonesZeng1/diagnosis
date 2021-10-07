import Vue from "vue";
import VueRouter from "vue-router";
import Diagnosis from "../views/Diagnosis.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Diagnosis",
    component: Diagnosis,
  },
  // {
  //   path: "/diagnosis",
  //   name: "Diagnosis",
  //   component: () =>
  //     import(/* webpackChunkName: "Diagnosis" */ "../views/Diagnosis"),
  // },
  {
    path: "/diagnosisConfirm",
    name: "Diagnosis Confirm",
    component: () =>
      import(/* webpackChunkName: "diagnosisConfirm" */ "../components/diagnosis/diagnosisConfirm"),
  },
  {
  path: "/diagnosisBodySelect",
  name: "Diagnosis Body Select",
  component: () =>
    import(/* webpackChunkName: "diagnosisBodySelect" */ "../components/diagnosis/diagnosisBodySelect"),
  },
  {
    path: "/diagnosisProbability",
    name: "diagnosis Probability",
    component: () =>
      import(/* webpackChunkName: "diagnosisProbability" */ "../components/diagnosis/diagnosisProbability"),
  },
  {
    path: "/diagnosisResult",
    name: "diagnosis Result",
    component: () =>
      import(/* webpackChunkName: "diagnosisResult" */ "../components/diagnosis/diagnosisResult"),
  },
  {
    path: "/diagnosisLoading",
    name: "diagnosis Loading",
    component: () =>
      import(/* webpackChunkName: "diagnosisLoading" */ "../components/diagnosis/diagnosisLoading"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
