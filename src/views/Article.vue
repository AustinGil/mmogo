<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>

    <img v-if="article.image" :src="article.image" alt="" />

    <p v-if="article.content">{{ article.content }}</p>

    <template v-if="$store.state.offline[articleId]">
      <AppBtn @click="$store.dispatch('saveOffline', article)">
        Update offline
      </AppBtn>

      <AppBtn @click="$store.dispatch('removeOffline', article)">
        Remove offline
      </AppBtn>
    </template>

    <AppBtn v-else @click="$store.dispatch('saveOffline', article)">
      Save for offline
    </AppBtn>

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
  }
};
</script>
