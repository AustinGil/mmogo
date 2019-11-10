<template>
  <main>
    <div>
      <form @submit.prevent="onSubmit">
        <AppInput v-model="form.title" label="Title" />

        <AppInput v-model="form.image" label="Image (url)" type="url" />

        <AppInput
          v-for="{ label, value } in categories"
          :key="value"
          :label="label"
          type="checkbox"
          :value="value"
          :checked="form.categories.includes(value)"
          @change="onToggleCategory"
        />

        <!-- <AppInput
        v-model="form.title"
        label="Format"
        type="radio"
        :options="formats"
        />-->

        <AppInput v-model="form.content" label="Content" type="textarea" />

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
      // format: "",
      content: "",
      categories: []
    },
    categories: config.categories
    // formats: [
    //   {
    //     label: "Text",
    //     value: "text"
    //   },
    //   {
    //     label: "How-to",
    //     value: "howTo"
    //   }
    // ]
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
      this.$store.commit("addLoader");
      await http.post(config.db.articles, {
        json: this.form
      });
      this.$store.commit("removeLoader");
    }
  }
};
</script>

<style lang="scss">
form {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
input,
textarea,
select {
  border: 1px solid;
}
input[type="radio"],
input[type="checkbox"] {
  width: initial;
}
</style>
