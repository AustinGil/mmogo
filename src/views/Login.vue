<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-model="email" label="Email" type="email" />
      <AppInput label="Password" type="password" />
      <AppBtn>Submit</AppBtn>
    </form>
  </div>
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

