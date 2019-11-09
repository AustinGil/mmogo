<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-model="form.title" label="Title" />

      <AppInput v-model="form.image" label="Image (url)" type="url" />

      <AppInput
        v-for="{ label, value } in categories"
        :key="value"
        v-model="form.category"
        :label="label"
        type="checkbox"
        :value="value"
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
  data: () => ({
    form: {
      title: "",
      image: "",
      // format: "",
      content: "",
      category: ""
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

  methods: {
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
