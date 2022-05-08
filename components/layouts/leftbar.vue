<template>
  <div class="flex flex-col">
    <PageTitle title="Category" class="mb-8" />
    <ul class="flex flex-col bg-white p-3 rounded-2xl shadow">
      <li
        v-for="(item, index) in Array.from({ length: 5 })"
        :key="index"
        class="my-2"
      >
        <a
          href="#"
          class="font-semibold text-gray-800 hover:text-pink-500 transition-all"
          >Politics {{ index }}</a
        >
      </li>
    </ul>
  </div>
</template>
