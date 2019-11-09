<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>

    <pre>{{ article }}</pre>
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
  }
};
</script>
