<template>
  <div
    @click.prevent="$emit('open')"
    class="
      h-10
      text-sm
      bg-white
      rounded-lg
      items-center
      flex flex-row
      cursor-pointer
      hover:bg-gray-200
      border-2 border-gray-300
      focus:outline-none focus:ring-2 focus:ring-pink-500
    "
  >
    <IconRi:search-line class="text-gray-600 h-4 w-4 fill-current ml-3" />
    <span class="ml-2 font-medium text-gray-400">Quick Search...</span>
    <!-- when using keyboardShortcut we have warning on log: compile mismatch -->
    <!-- <span class="ml-auto mr-3 font-bold">{{ keyboardShortcut }}</span> -->
    <span class="ml-auto mr-3 font-bold bg-gray-300 rounded-md text-gray-600 p-1">⌘K</span>
  </div>
</template>
<script>
export default {
  emits: ["open"],
};
</script>