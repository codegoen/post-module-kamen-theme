<template>
  <PageWrapper>
    <template #main>
      <div>
        <PageHeading title="Todays Headlines" />

        <CardPost size="lg" />
      </div>
    </template>
    <template #rightbar>
      <div>
        <PageHeading title="Sports News" right-text="See All" />

        <div class="flex flex-col space-y-4">
          <SubscribeNewsLatter class="mb-4" />

          <CardPost
            v-for="(item, index) in Array.from({ length: 2 })"
            :key="index"
            size="sm"
          />
        </div>
      </div>
    </template>
  </PageWrapper>
</template>