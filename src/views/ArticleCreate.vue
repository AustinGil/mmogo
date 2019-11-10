<template>
  <main>
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

        <AppBtn type="submit" style=" margin-left: auto;">Save</AppBtn>
      </form>
    </div>
  </main>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

export default {
  data: () => ({
    form: {
      title: "",
      image: "",
      content: "",
      categories: []
    },
    categories: config.categories
  }),

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
      const user = this.$store.state.user;

      this.$store.commit("addLoader");
      await http.post(config.db.articles, {
        json: {
          ...this.form,
          author: user && user.email
        }
      });
      this.$store.commit("removeLoader");
    }
  }
};
</script>
