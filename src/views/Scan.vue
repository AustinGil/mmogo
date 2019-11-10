<template>
  <div class="text-center max-w-md mb-4 mx-auto">
    <p class="text-xl mb-6">
      Know someone with a QR code? Scan it here to add an article to your
      offline collection.
    </p>

    <p v-if="!videoDevices">
      Please use a device with video capture, and allow access.
    </p>

    <AppInput
      v-else
      label="Available Devices"
      type="radio"
      name="videoDevices"
      :options="
        videoDevices.map(device => ({
          value: device.deviceId,
          label: device.label
        }))
      "
      @change="selectDevice"
      class="mb-4"
      :classes="{ fieldset: 'flex' }"
    />

    <template v-if="imgSrc">
      <img :src="imgSrc" @load="onImgLoad" alt="" class="mb-4" />
      <AppBtn @click="imgSrc = ''">Remove photo</AppBtn>
    </template>

    <div v-show="imageCapture && !imgSrc">
      <video ref="video" autoplay class="mb-3"></video>

      <AppBtn v-if="imageCapture" @click="takePhoto">
        Capture photo
      </AppBtn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    videoDevices: [],
    imageCapture: null,
    imgSrc: ""
  }),

  async mounted() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    this.videoDevices = devices.filter(device => device.kind === "videoinput");
    if (!this.videoDevices.length) return;

    this.selectDevice({
      target: {
        value: this.videoDevices[0].deviceId
      }
    });
  },

  methods: {
    async onClick() {
      // alert("Just kidding. This feature hasn't been completed yet 😞.");
    },

    async selectDevice(event) {
      const constraints = {
        video: {
          //     width: {
          //       min: 1280,
          //       ideal: 1920,
          //       max: 2560
          //     },
          //     height: {
          //       min: 720,
          //       ideal: 1080,
          //       max: 1440
          //     }
          deviceId: {
            exact: event.target.value
          }
        }
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );
      const mediaStreamTrack = mediaStream.getVideoTracks()[0];
      this.imageCapture = new ImageCapture(mediaStreamTrack);

      this.$refs.video.srcObject = mediaStream;
    },

    onImgLoad() {
      URL.revokeObjectURL(this.imgSrc);
    },

    async takePhoto() {
      const blob = await this.imageCapture.takePhoto();
      this.imgSrc = URL.createObjectURL(blob);
      // this.$refs.img.onload = e => {
      //   console.log(e, this.src);
      //   URL.revokeObjectURL(this.src);
      // };
    }
  }
};
</script>

