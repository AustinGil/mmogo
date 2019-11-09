<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>

    <img v-if="article.image" :src="article.image" alt="" />

    <!-- <pre>{{ article }}</pre> -->

    <AppBtn @click="onDownload">Save for offline</AppBtn>

    <RouterLink :to="{ name: 'article-edit', params: { articleId } }">
      Edit
    </RouterLink>
  </div>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

export default {
  props: {
    articleId: {
      type: [Number, String],
      required: true
    }
  },

  data: () => ({
    article: null
  }),

  async mounted() {
    this.$store.commit("addLoader");
    this.article = await http.get(`${config.db.articles}/${this.articleId}`);
    this.$store.commit("removeLoader");
  },

  methods: {
    onDownload() {
      // const articles = JSON.parse(localStorage.getItem("articles") || "{}");
      // articles[this.articleId] = this.article;
      // localStorage.setItem("articles", JSON.stringify(articles));
    }
  }
};
</script>
