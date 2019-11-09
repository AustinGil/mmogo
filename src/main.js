import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueOffline from "vue-offline";

Vue.use(VueOffline);

Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-console
  Vue.prototype.$log = console.log;
}

// Components
const globals = require.context("@/components/global", false, /.*\.vue$/);
globals.keys().forEach(fileName => {
  const exported = globals(fileName);
  const config = exported.default || exported;

  const name = config.name || fileName.replace(/^\.\/(.*)\.\w+$/, "$1");

  Vue.component(name, config);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
