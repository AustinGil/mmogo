<template>
  <div v-if="article">
    <h1 class="text-4xl mb-3">{{ article.title }}</h1>

    <ul
      v-if="article.categories && article.categories.length"
      class="flex flex-wrap mb-4"
    >
      <li v-for="category in article.categories" :key="category">
        <RouterLink
          :to="{
            name: 'home',
            query: { category }
          }"
          class="app-btn rounded m-1 px-2 py-1 text-xs"
          >{{ getCategoryLabel(category) }}</RouterLink
        >
      </li>
    </ul>

    <img
      v-if="article.image && isOffline"
      src="/img/offline-img.svg"
      alt
      width="900"
      height="600"
      class="mb-4"
    />
    <img v-else-if="article.image" :src="article.image" alt="" class="mb-4" />

    <p v-if="article.content" class="mb-4 whitespace-pre-wrap">
      {{ article.content }}
    </p>

    <div
      class="rate grid grid-2-columns@md grid-gap justify-right pb-8 max-w-xs mx-auto"
    >
      <button @click="vote('up')">
        <img src="/img/icons-mmogo/original/thumb.png" alt="up vote" />
      </button>
      <button @click="vote('down')">
        <img src="/img/icons-mmogo/original/thumb-down.png" alt="down vote" />
      </button>
    </div>

    <template v-if="$store.state.downloads[articleId]">
      <AppBtn @click="$store.dispatch('removeDownload', article)" class="mr-2"
        >Remove</AppBtn
      >

      <AppBtn @click="showQr = !showQr" class="app-btn mr-2 rounded px-4 py-2"
        >Share</AppBtn
      >
    </template>

    <AppBtn
      v-else
      @click="$store.dispatch('saveDownload', article)"
      class="mr-2"
      >Download</AppBtn
    >

    <template v-if="isAuthor">
      <RouterLink
        :to="{ name: 'article-edit', params: { articleId } }"
        class="app-btn mr-2 rounded px-4 py-2"
        >Edit</RouterLink
      >

      <AppBtn @click="onDelete">Delete</AppBtn>
    </template>

    <div v-show="showQr" class="qr-wrapper grid text-center mt-6 mb-6">
      <p class="max-w-sm text-xl mb-5">
        Have your friends scan this QR code to import the article.
      </p>
      <div ref="qrcode"></div>
    </div>
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
    article: null,
    showQr: false
  }),

  computed: {
    isAuthor() {
      const user = this.$store.state.user;
      if (!user) return false;

      const author = this.article && this.article.author;

      return user.email === author;
    }
  },

  async mounted() {
    if (this.isOffline) {
      this.article = this.$store.state.downloads[this.articleId];
    } else {
      this.$store.commit("addLoader");
      this.article = await http.get(`${config.db.articles}/${this.articleId}`);
      this.$store.commit("removeLoader");
    }

    this.$nextTick(() => {
      const article = this.article;
      const maxLength = 300;
      const length = Math.min(article.content.length, maxLength);
      let content = article.content.slice(0, length);
      if (length === maxLength) {
        content += "...";
      }
      new QRCode(
        this.$refs.qrcode,
        JSON.stringify({
          ...article,
          content
        })
      );
    });
  },

  methods: {
    getCategoryLabel(category) {
      const match = config.categories.find(item => {
        return item.value === category;
      });
      return match.label;
    },

    vote(direction) {
      alert(
        `Thank you for your "${direction}" vote. We appreciate the feedback.`
      );
    },

    async onDelete() {
      this.$store.commit("addLoader");
      this.article = await http.delete(
        `${config.db.articles}/${this.articleId}`
      );
      this.$store.commit("removeLoader");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.qr-wrapper {
  justify-items: center;
}
</style>
