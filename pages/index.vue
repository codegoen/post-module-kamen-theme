<template>
  <div class="bg-gray-100">
    <Banner v-if="show" @toggle="show = !show" />

    <LayoutsHeader />

    <div
      class="
        px-2
        mt-6
        gap-0
        pb-24
        min-h-screen
        lg:gap-4 lg:px-8
        grid grid-cols-12
      "
    >
      <LayoutsLeftbar
        class="lg:col-span-2 lg:row-end-1 row-end-7 col-span-12 lg:mt-0 mt-6"
      />
      <div class="lg:col-span-7 col-span-12">
        <div class="flex flex-col space-y-8">
          <Headline />

          <div>
            <PageTitle title="Videos" right-text="See All" />

            <div class="grid gap-4 mt-4 md:grid-cols-2 grid-cols-1">
              <VideoCard
                v-for="(item, index) in Array.from({ length: 4 })"
                :key="index"
              />
            </div>
          </div>
        </div>
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