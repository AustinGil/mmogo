<template>
  <div class="text-center max-w-md mb-4 mx-auto">
    <p class="text-xl mb-6">
      Know someone with a QR code? Scan it here to add an article to your
      offline collection.
    </p>
    <AppBtn @click="onClick" class="text-4xl">Open Scanner</AppBtn>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert("Just kidding. This feature hasn't been completed yet 😞.");
    }
  }
};
</script>

