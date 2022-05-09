<template>
  <div class="flex flex-wrap justify-center">
    <div class="card-zoom w-full h-[15em]">
      <div class="bg-black/30 rounded-xl w-full h-full absolute z-10" />
      <div
        class="card-zoom-image" id="bg"
      ></div>
      <div
        class="
          absolute
          card-zoom-content
          scale-90
          z-10
          bg-black/30
          rounded-full
        "
      >
        <IconIc:baseline-play-circle-filled
          class="text-gray-100 text-[3em] cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script>
import bg from "~/assets/images/video1.jpg";

export default {
  computed: {
    thumbnailURL() {
      return { backgroundImage: bg };
    },
  },
};
</script>
<style lang="css">
  #bg {
    background-image: url('~/assets/images/video1.jpg');
  }
</style>