import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/article/:articleId",
    name: "article",
    component: Article
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
