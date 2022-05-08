<template>
  <div class="flex flex-col">
    <PageHeading title="Category" />

    <ul class="flex flex-col bg-white rounded-2xl shadow">
      <li
        v-for="(item, index) in Array.from({ length: 5 })"
        :key="index"
        class="p-3 border-b"
      >
        <div class="flex flex-row justify-between items-center">
          <a
            href="#"
            class="
              font-semibold
              text-gray-800
              hover:text-pink-500
              transition-all
            "
          >
            Politics
          </a>
          <span class="bg-pink-500 text-pink-200 px-2 rounded-md">
            {{ ++index }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
