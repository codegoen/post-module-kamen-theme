<template>
  <div class="bg-gray-100">
    <!-- page banner -->
    <PageBanner v-if="show" @toggle="show = !show" />

    <!-- page header -->
    <PageHeader />

    <!-- slot -->
    <slot />

    <PageFooter />
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>