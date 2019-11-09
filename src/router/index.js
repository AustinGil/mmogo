import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Article from "@/views/Article.vue";
import ArticleCreate from "@/views/ArticleCreate.vue";
import ArticleEdit from "@/views/ArticleEdit.vue";

Vue.use(VueRouter);

const RouterView = { render: h => h("router-view") };

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/article",
    component: RouterView,
    children: [
      {
        path: "new",
        name: "article-create",
        component: ArticleCreate
      },
      {
        path: ":articleId",
        component: RouterView,
        props: true,
        children: [
          {
            path: "",
            name: "article",
            component: Article,
            props: true
          },
          {
            path: "edit",
            name: "article-edit",
            component: ArticleEdit,
            props: true
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
