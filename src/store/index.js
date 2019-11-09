import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaderCount: 0,
    offline: JSON.parse(localStorage.getItem("articles") || "{}")
  },
  mutations: {
    addLoader(state) {
      state.loaderCount++;
    },
    removeLoader(state) {
      state.loaderCount--;
    },
    setOffline(state, nextState) {
      state.offline = nextState;
    }
  },
  actions: {
    saveOffline({ state, commit }, article) {
      const nextState = { ...state.offline, [article._id]: article };
      localStorage.setItem("articles", JSON.stringify(nextState));
      commit("setOffline", nextState);
    },
    removeOffline({ state, commit }, article) {
      const nextState = { ...state.offline };
      delete nextState[article._id];
      localStorage.setItem("articles", JSON.stringify(nextState));
      commit("setOffline", nextState);
    }
  },
  modules: {}
});
