<template>
  <div>
    Home

    <article v-for="article in articles" :key="article.id">
      <RouterLink :to="{ name: 'article', params: { articleId: article.id } }"
        ><h3>{{ article.title }}</h3>
      </RouterLink>

      <pre>{{ article }}</pre>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({
    articles: Array(10)
      .fill()
      .map((nil, index) => ({
        id: index + 1,
        title: `title ${index}`,
        format: "text",
        votes: 3,
        created: Date.now()
      }))
  })
};
</script>
