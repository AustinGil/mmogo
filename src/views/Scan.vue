<template>
  <div class="text-center max-w-md mb-4 mx-auto">
    <p class="text-xl mb-6">
      Know someone with a QR code? Scan it here to add an article to your
      offline collection.
    </p>

    <AppBtn v-if="!imageCapture" @click="onClick" class="text-4xl"
      >Open Scanner</AppBtn
    >

    <AppBtn v-else @click="takePhoto" class="text-4xl">Capture photo</AppBtn>

    <img ref="img" src="" alt="" />
  </div>
</template>

<script>
export default {
  data: () => ({
    imageCapture: null
  }),

  methods: {
    async onClick() {
      // alert("Just kidding. This feature hasn't been completed yet 😞.");

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            exact: "environment"
          }
        }
      });
      const mediaStreamTrack = mediaStream.getVideoTracks()[0];
      this.imageCapture = new ImageCapture(mediaStreamTrack);
    },

    async takePhoto() {
      const imageCapture = this.imageCapture;
      const blob = await imageCapture.takePhoto();

      this.$refs.img.src = URL.createObjectURL(blob);
      this.$refs.img.onload = () => {
        URL.revokeObjectURL(this.src);
      };
    }
  }
};
</script>

