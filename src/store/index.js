import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    disease:"",
    checkedNames:"",
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getDisgnosisResult: (state) => {
      return {
        diagnosisResult: state.disease,
      };
    },
    getSymptoms: (state) => {
      return {
        checkedNames: state.checkedNames,
      };
    },
  },
});
