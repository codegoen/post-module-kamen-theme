<template>
  <div class="bg-white rounded-2xl p-3 shadow">
    <img
      src="~/assets/images/congres.jpeg"
      alt="Congres"
      class="object-cover w-full h-[30em] rounded-2xl"
    />
    <div class="md:px-6 md:pt-6 px-2 pt-2">
      <div
        class="
          flex
          md:flex-row md:space-y-0 md:mt-0
          flex-col
          space-y-4
          mt-4
          items-center
          justify-between
        "
      >
        <div>
          <div class="px-3 py-1 rounded-xl bg-pink-200 uppercase text-pink-500 font-bold">
            Congress
          </div>
        </div>

        <ul class="flex flex-row space-x-2 md:space-x-8">
          <li>
            <button class="text-xl font-bold flex flex-row items-center">
              <IconHeroicons-outline:eye class="mr-2 text-gray-500" />
              1.5m
            </button>
          </li>
          <li>
            <button class="text-xl font-bold flex flex-row items-center">
              <IconHeroicons-outline:chat-alt-2 class="mr-2 text-gray-500" />
              35k
            </button>
          </li>
          <li>
            <button class="text-xl font-bold flex flex-row items-center">
              <IconHeroicons-outline:share class="mr-2 text-gray-500" />
              35k
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex sm:flex-row flex-col space-y-4 items-center md:px-6 md:pb-6 px-3 pb-3">
      <div>
        <h1
          class="
            mt-4
            lg:text-3xl
            md:text-2xl
            text-xl
            font-semibold
            leading-relaxed
          "
        >
          Dems see one last chance to boost public support for impeachment
        </h1>
      </div>
      <div class="ml-auto md:w-64 w-full">
        <button
          class="
            w-full
            px-[14px]
            py-[10px]
            text-xl
            rounded-md
            bg-pink-500
            font-semibold
            text-pink-200
            focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-current
          "
        >
          Read Later
        </button>
      </div>
    </div>
  </div>
</template>