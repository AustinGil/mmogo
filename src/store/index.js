import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loaderCount: 0,
    downloads: JSON.parse(localStorage.getItem("articles") || "{}")
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addLoader(state) {
      state.loaderCount++;
    },
    removeLoader(state) {
      state.loaderCount--;
    },
    setDownloads(state, nextState) {
      state.downloads = nextState;
    }
  },
  actions: {
    saveDownload({ state, commit }, article) {
      const nextState = { ...state.downloads, [article._id]: article };
      localStorage.setItem("articles", JSON.stringify(nextState));
      commit("setDownloads", nextState);
    },
    removeDownload({ state, commit }, article) {
      const nextState = { ...state.downloads };
      delete nextState[article._id];
      localStorage.setItem("articles", JSON.stringify(nextState));
      commit("setDownloads", nextState);
    }
  },
  modules: {}
});
