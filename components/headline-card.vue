<template>
  <div class="bg-white rounded-2xl p-3 shadow">
    <img
      src="~/assets/images/congres.jpeg"
      alt="Congres"
      class="object-cover w-full h-[30em] rounded-2xl"
    />
    <div class="px-6 pt-6">
      <div class="flex flex-row m-3">
        <Label text="congress" />

        <ul class="ml-auto flex flex-row space-x-10 text-xl font-bold">
          <li>1.5m</li>
          <li>35k</li>
          <li>35k</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row items-center px-6 pb-6">
      <div>
        <h1 class="mt-4 text-4xl font-semibold leading-relaxed">
          Dems see one last chance to boost public support for impeachment
        </h1>
      </div>
      <div class="ml-auto w-64">
        <button
          class="
            w-full
            p-4
            text-xl
            bg-pink-500
            text-pink-200
            rounded-md
            font-semibold
          "
        >
          Read Later
        </button>
      </div>
    </div>
  </div>
</template>