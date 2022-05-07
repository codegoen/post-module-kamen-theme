<template>
  <div
    class="rounded-xl bg-pink-200 uppercase text-pink-500 font-bold"
  >
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>