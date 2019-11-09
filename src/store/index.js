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
    setOffline(state, article) {
      state[article._id] = article;
    }
  },
  actions: {
    saveOffline({ commit }, article) {
      console.log(article);
      // localStorage.setItem("articles", JSON.stringify(articles));
      // commit('increment')
    }
  },
  modules: {}
});
