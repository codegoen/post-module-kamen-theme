<template>
  <div class="bg-white rounded-2xl p-3 shadow">
    <img
      src="~/assets/images/video1.jpg"
      class="object-cover w-full rounded-2xl"
      :class="{ 'h-[30em]': size === 'lg', 'h-[13em]': size === 'sm' }"
    />
    <div
      class="px-2 pt-2"
      :class="{
        'md:px-6 md:pt-6': size === 'lg',
        'md:px-2 md:pt-6': size === 'sm',
      }"
    >
      <div
        class="
          flex
          mt-4
          flex-col
          space-y-4
          justify-between
          md:flex-row md:space-y-0 md:mt-0
        "
      >
        <div>
          <span
            class="
              px-3
              py-1
              rounded-xl
              bg-pink-200
              uppercase
              text-pink-500
              font-bold
            "
          >
            Congress
          </span>
        </div>

        <ul
          class="flex flex-row space-x-4"
          :class="{
            'md:space-x-8': size == 'lg',
            'md:space-x-2': size == 'sm',
          }"
        >
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
          <li :class="{ 'lg:hidden inline': size == 'sm' }">
            <button class="text-xl font-bold flex flex-row items-center">
              <IconHeroicons-outline:share class="mr-2 text-gray-500" />
              35k
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      :class="{
        'flex sm:flex-row flex-col space-y-4 items-center md:px-6 md:pb-6 px-3 pb-3':
          size == 'lg',
      }"
    >
      <div class="mt-8">
        <NuxtLink
          to="/posts/1"
          class="
            hover:text-pink-500
            transition-all
            font-semibold
            leading-relaxed
          "
          :class="{ 'lg:text-3xl md:text-2xl text-xl': size == 'lg' }"
        >
          Dems see one last chance to boost public support for impeachment
        </NuxtLink>
      </div>
      <div
        class="ml-auto"
        :class="{ 'md:w-64 w-full': size == 'lg', 'w-full mt-4': size == 'sm' }"
      >
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
            focus:ring-2
            focus:ring-offset-2
            focus:ring-pink-500
            focus:ring-offset-current
          "
        >
          Read Later
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "lg", // lg and sm
    },
  },
};
</script>