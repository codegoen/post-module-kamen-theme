<template>
  <PageWrapper>
    <template #main>
      <div>
        <PageHeading title="Todays Headlines" />

        <CardPost size="lg" />
      </div>

      <PageHeading title="Videos" right-text="See All" />

      <div class="grid gap-4 mt-4 md:grid-cols-2 grid-cols-1">
        <CardVideo
          v-for="(item, index) in Array.from({ length: 4 })"
          :key="index"
        />
      </div>
    </template>
  </PageWrapper>
</template>