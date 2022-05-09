<template>
  <div class="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
    <div
      class="
        mt-10
        py-10
        mx-auto
        max-w-7xl
        text-center
        flex flex-col
        divide-y divide-pink-700/50
        lg:px-0
        px-4
      "
    >
      <div class="grid grid-cols-12 gap-4 py-10">
        <div class="md:col-span-8 col-span-12 mb-6 md:mb-0">
          <div class="text-left">
            <h1 class="text-4xl font-medium">What is Kamen Theme ?</h1>
            <p class="mt-4 text-md text-pink-100">
              Kamen theme is built using nuxt, kamen theme is one of the themes
              for post modules.
            </p>
          </div>
        </div>
        <div class="md:col-span-4 col-span-12 place-self-center">
          <ul class="flex flex-row space-x-8">
            <li>
              <a href="https://facebook.com/rixzkl" target="blank">
                <IconMdi:facebook-box class="text-[3em]" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rixzkl" target="blank">
                <IconMdi:twitter-box class="text-[3em]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/rizkhal" target="blank">
                <IconMdi:github-box class="text-[3em]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 py-10">
        <div
          class="
            md:col-span-4
            mt-8
            md:mt-0
            col-span-12
            text-left
            md:row-end-1
            row-end-3
          "
        >
          <h1 class="text-4xl mb-2 font-bold">Kamen Theme</h1>
          <p class="">
            &copy; {{ new Date().getFullYear() }} Kamen Theme - Lamaau
          </p>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div class="grid grid-cols-3 gap-4 text-left">
            <ul
              class="md:col-span-1 col-span-full"
              v-for="(item, index) in Array.from({ length: 3 })"
              :key="index"
            >
              <h1 class="pb-4 font-bold">QUICK LINK</h1>
              <li
                v-for="(item, index) in Array.from({ length: 4 })"
                :key="index"
                class="mt-2"
              >
                <a href="#" class="hover:text-gray-200 transition-all"
                  >Link {{ ++index }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>