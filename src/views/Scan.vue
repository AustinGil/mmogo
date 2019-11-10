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

    <AppBtn v-if="imageCapture" @click="takePhoto" class="mb-6"
      >Capture photo</AppBtn
    >

    <!-- <video ref="video" autoplay></video> -->

    <img ref="img" src="" alt="" />
  </div>
</template>

<script>
export default {
  data: () => ({
    videoDevices: [],
    selectedDevice: null,
    imageCapture: null
  }),

  async mounted() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    this.videoDevices = devices.filter(device => device.kind === "videoinput");
    console.log(this.videoDevices);
  },

  methods: {
    async onClick() {
      // alert("Just kidding. This feature hasn't been completed yet 😞.");
    },

    async selectDevice(event) {
      // const found = this.videoDevices.find(device => {
      //   return device.label === event.target.value;
      // });
      // if (!found) return;
      // this.selectedDevice = found;

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

      // this.$refs.video.srcObject = stream;
      //   video.play();
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

