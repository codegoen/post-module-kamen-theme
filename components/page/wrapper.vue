<template>
  <div class="bg-gray-100">
    <div
      class="px-2 mt-6 gap-0 min-h-screen lg:gap-4 lg:px-8 grid grid-cols-12"
    >
      <!-- left bar -->
      <div
        class="lg:col-span-2 lg:row-end-1 row-end-7 col-span-12 lg:mt-0 mt-6"
      >
        <slot name="leftbar">
          <PageLeftbar />
        </slot>
      </div>

      <!-- center main -->
      <div class="lg:col-span-7 col-span-12">
        <div class="flex flex-col space-y-8">
          <slot name="main" />
        </div>
      </div>

      <!-- right bar -->
      <div class="lg:col-span-3 col-span-12 lg:mt-0 mt-6">
        <slot name="rightbar">
          <PageRightbar />
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>