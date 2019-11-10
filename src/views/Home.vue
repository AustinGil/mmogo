<template>
  <div>
    <div class="grid grid-3-columns@md grid-2-columns@sm pb-8">
      <button
        v-for="category in categories"
        :key="category.value"
        @click="setCategory(category.value)"
        class="p-3"
      >
        <img :src="category.icon" class="icon" />
        {{ category.label }}
      </button>
    </div>

    <article v-for="article in filtered" :key="article.id">
      <RouterLink :to="{ name: 'article', params: { articleId: article._id } }">
        <div class="artical">
          <table>
            <tr>
              <td class="title">{{ article.title }}</td>
              <td class="notes">
                post id: {{ article._id }}
                <br />
                date: {{ article._created }}
              </td>
            </tr>
            <tr>
              <td class="post" colspan="2">{{ article.format }}</td>
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
  props: {
    search: String
  },

  data: () => ({
    articles: [],
    categories: config.categories,
    category: ""
  }),

  computed: {
    filtered() {
      const { search, category } = this;
      return this.articles.filter(article => {
        if (search) {
          const text = (article.title + article.content).toLowerCase();
          if (!text.includes(search.toLowerCase())) {
            return false;
          }
        }
        if (category) {
          const categories = article.categories || [];
          return categories.includes(category);
        }
        return true;
      });
    }
  },

  async mounted() {
    this.category = this.$route.query.category;

    this.$store.commit("addLoader");
    this.articles = await http.get(config.db.articles);
    this.$store.commit("removeLoader");
  },

  methods: {
    setCategory(category) {
      const currentCategory = this.category;
      category = currentCategory === category ? undefined : category;
      this.category = category;
      this.$router.push({ name: "home", query: { category } });
    }
  }
};
</script>

<style scoped>
.artical {
  display: block;
  width: 550px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  padding: 5px;
  background: lightgray;
}
.title {
  width: 400px;
  text-align: left;
  font-size: 14pt;
  color: darkslategrey;
}
.notes {
  width: 150px;
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
.icon {
  height: 75px;
  width: 75px;
  margin-left: auto;
  margin-right: auto;
}
</style>
