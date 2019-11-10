<template>
  <main>
    <div>
      <table class="catagorys">
        <tr>
          <td>
            <img src="\img\icons-mmogo\original\009-timber.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\010-tractor.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\011-cow.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\012-mushroom.svg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="\img\icons-mmogo\original\013-presentation.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\014-drill.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\015-fruits.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\016-tourists.svg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="\img\icons-mmogo\original\017-mortar.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\001-log.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\002-trowel.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\003-hen.svg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="\img\icons-mmogo\original\004-growth.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\005-investment.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\006-recycle-bin.svg" />
          </td>
          <td>
            <img src="\img\icons-mmogo\original\007-pollution.svg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="\img\icons-mmogo\original\008-wooden.svg" />
          </td>
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
                <td class="post" colspan="2">{{ article.format }}</td>
              </tr>
            </table>
          </div>
        </RouterLink>
      </article>
    </div>
  </main>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

export default {
  props: {
    filter: String
  },

  data: () => ({
    articles: []
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
.catagorys img {
  height: 75px;
  width: 75px;
  margin-left: auto;
  margin-right: auto;
}
</style>
