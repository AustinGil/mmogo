<template>
  <div>
    <h3 v-if="!articles.length" class="text-center">No articles.</h3>

    <RouterLink
      v-for="article in articles"
      :key="article.id"
      :to="{ name: 'article', params: { articleId: article._id } }"
    >
      <article class="md:flex justify-between mb-3 p-3 bg-gray-300">
        <h3 class="pr-3">{{ article.title }}</h3>
        <small class="text-right">
          post id: {{ article._id }}
          <br />
          date: {{ article._createdOn }}
        </small>
      </article>
    </RouterLink>
  </div>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

export default {
  computed: {
    articles() {
      return Object.values(this.$store.state.downloads);
    }
  }
};
</script>

