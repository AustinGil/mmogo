import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaderCount: 0
  },
  mutations: {
    addLoader(state) {
      state.loaderCount++;
    },
    removeLoader(state) {
      state.loaderCount--;
    }
  },
  actions: {},
  modules: {}
});
