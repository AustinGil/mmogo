<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>
        Title
        <input v-model="title" type="text" />
      </label>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

export default {
  data: () => ({
    title: ""
  }),

  methods: {
    async onSubmit() {
      this.$store.commit("addLoader");
      await http.post(config.db.articles, {
        json: {
          title: this.title
        }
      });
      this.$store.commit("removeLoader");
    }
  }
};
</script>
