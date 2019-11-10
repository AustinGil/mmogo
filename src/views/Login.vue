<template>
  <form @submit.prevent="onSubmit" class="max-w-sm mx-auto py-6">
    <AppInput
      v-model="email"
      label="Email"
      type="email"
      class="mb-3"
      :classes="{ input: 'px-2 py-1 border-gray-400 rounded' }"
    />
    <AppInput
      label="Password"
      type="password"
      class="mb-3"
      :classes="{ input: 'px-2 py-1 border-gray-400 rounded' }"
    />
    <AppBtn>Submit</AppBtn>
  </form>
</template>

<script>
import config from "@/config";
import http from "@/utils/http";

export default {
  data: () => ({
    email: ""
  }),

  methods: {
    onSubmit() {
      const email = this.email;
      if (!email) return;
      this.$store.commit("setUser", {
        email
      });
      this.$router.push("/");
    }
  }
};
</script>

