<template>
  <PageWrapper>
    <template #main>
      <div>
        <PageHeading title="Todays Headlines" />

        <div class="flex flex-col space-y-8">
          <CardPost size="lg" />

          <Content />
        </div>
      </div>
    </template>
    <template #rightbar>
      <div>
        <PageHeading title="Related News" right-text="See All" />

        <div class="flex flex-col space-y-4">
          <SubscribeNewsLatter class="mb-4" />

          <CardPost
            v-for="(item, index) in Array.from({ length: 4 })"
            :key="index"
            size="sm"
          />
        </div>
      </div>
    </template>
  </PageWrapper>
</template>