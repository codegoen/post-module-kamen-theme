<template>
  <div :class="{ 'flex justify-between items-center': rightText }">
    <h1 class="text-3xl font-semibold">{{ title }}</h1>
    <span v-show="rightText" class="text-sm text-gray-600">{{ rightText }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    rightText: {
      type: String,
      default: null,
    },
  },
};
</script>