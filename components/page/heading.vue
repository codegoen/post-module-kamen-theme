<template>
  <div
    :class="{ 'flex justify-between items-center': rightText }"
    class="relative mb-[2em]"
  >
    <h1 class="text-3xl font-semibold">
      {{ title }}
    </h1>
    <span class="h-[6px] w-20 bg-pink-500 absolute -bottom-2" />

    <NuxtLink
      href="#"
      v-show="rightText"
      class="text-md font-semibold text-gray-600"
    >
      {{ rightText }}
    </NuxtLink>
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