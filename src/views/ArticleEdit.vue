<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput
        v-model="form.title"
        label="Title"
        class="mb-3"
        :classes="{ input: 'px-2 py-1 border-gray-400 rounded' }"
        required
      />

      <AppInput
        v-model="form.image"
        label="Image (url)"
        type="url"
        class="mb-3"
        :classes="{ input: 'px-2 py-1 border-gray-400 rounded' }"
        required
      />

      <fieldset class="mb-3">
        <legend>Categories</legend>
        <AppInput
          v-for="{ label, value } in categories"
          :key="value"
          :label="label"
          type="checkbox"
          :value="value"
          :checked="form.categories.includes(value)"
          @change="onToggleCategory"
        />
      </fieldset>

      <AppInput
        v-model="form.content"
        label="Content"
        type="textarea"
        rows="6"
        class="mb-3"
        :classes="{ input: 'px-2 py-1 border-gray-400 rounded' }"
        required
      />

      <AppBtn type="submit">Save</AppBtn>
      <RouterLink to="/" class="app-btn rounded px-4 py-2">Back</RouterLink>
    </form>
    {{ $route }}
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
    form: {
      title: "",
      image: "",
      content: "",
      categories: []
    },
    categories: config.categories
  }),

  async mounted() {
    this.$store.commit("addLoader");
    this.form = await http.get(`${config.db.articles}/${this.articleId}`);
    this.form.categories = this.form.categories || [];
    this.$store.commit("removeLoader");
  },

  methods: {
    onToggleCategory({ target }) {
      const value = target.value;
      const index = this.form.categories.indexOf(value);
      if (index >= 0) {
        this.form.categories.splice(index, 1);
      } else {
        this.form.categories.push(value);
      }
    },

    async onSubmit() {
      this.$store.commit("addLoader");
      await http.put(`${config.db.articles}/${this.articleId}`, {
        json: this.form
      });
      this.$store.commit("removeLoader");
    }
  }
};
</script>

<style lang="scss">
input,
textarea,
select {
  border: 1px solid;
  width: 100%;
}
input[type="radio"],
input[type="checkbox"] {
  width: initial;
}
</style>
