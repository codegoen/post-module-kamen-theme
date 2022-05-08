<template>
  <div class="bg-gray-100">
    <Banner v-if="show" @toggle="show = !show" />

    <LayoutsHeader />
    <div
      class="min-h-screen grid grid-cols-12 lg:gap-4 gap-0 mt-6 lg:px-8 px-2"
    >
      <LayoutsLeftbar
        class="lg:col-span-2 lg:row-end-1 row-end-7 col-span-12 lg:mt-0 mt-6"
      />
      <div class="lg:col-span-7 col-span-12">
        <Headline />
      </div>
      <LayoutsRightbar class="lg:col-span-3 col-span-12 lg:mt-0 mt-6" />
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