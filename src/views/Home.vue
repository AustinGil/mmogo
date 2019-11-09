<template>
  <div>
    <table class="catagorys">
      <tr>
        <td>c1</td>
        <td>c2</td>
        <td>c3</td>
        <td>c4</td>
      </tr>
      <tr>
        <td>c1</td>
        <td>c2</td>
        <td>c3</td>
        <td>c4</td>
      </tr>
    </table>

    <article v-for="article in articles" :key="article.id">
      <RouterLink :to="{ name: 'article', params: { articleId: article._id } }">
        <div class="artical">
          <table>
            <tr>
              <td class="title">{{ article.title }}</td>
              <td class="notes">
                post id: {{ article.id }}
                <br />
                date: {{ article.created }}
              </td>
            </tr>
            <tr>
              <td class="post" colspan="2">
                {{ article.format }}
              </td>
            </tr>
          </table>
        </div>
      </RouterLink>
    </article>
  </div>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

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
  }),

  async mounted() {
    this.$store.commit("addLoader");
    this.articles = await http.get(config.db.articles);
    this.$store.commit("removeLoader");
  }
};
</script>

<style scoped>
.artical {
  display: block;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  padding: 5px;
  background: lightgray;
}
.title {
  width: 300px;
  text-align: left;
  font-size: 14pt;
  color: darkslategrey;
}
.notes {
  width: 100px;
  text-align: right;
  font-size: 6pt;
}
.post {
  column-span: all;
  padding: 5px 0px;
}

.catagorys {
  margin-left: auto;
  margin-right: auto;
}
.catagorys td {
  height: 100px;
  width: 100px;
  text-align: center;
  vertical-align: middle;
}
.catagorys td:hover {
  background: #eee;
}
</style>
