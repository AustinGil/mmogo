<template>
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
      /> -->

      <AppInput v-model="form.content" label="Content" type="textarea" />

      <AppBtn type="submit">Save</AppBtn>
    </form>
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
      // format: "",
      content: "",
      categories: []
    },
    categories: [
      {
        label: "Sustainability",
        value: "sustainability"
      },
      {
        label: "Agriculture",
        value: "agriculture"
      },
      {
        label: "Enterprise",
        value: "enterprise"
      },
      {
        label: "Livestock",
        value: "livestock"
      },
      {
        label: "Waste Disposal",
        value: "waste-disposal"
      },
      {
        label: "Conservation",
        value: "conservation"
      }
    ]
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
