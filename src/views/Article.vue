<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    article: null
  }),

  async mounted() {
    // fetch article
    this.article = await Promise.resolve({
      id: this.articleId,
      title: "some title"
    });
  }
};
</script>
