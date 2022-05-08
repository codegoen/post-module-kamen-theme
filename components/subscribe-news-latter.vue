<template>
  <div>
    <label for="subs" class="font-semibold">Subscribe news latter</label>
    <div class="flex items-stretch w-full relative mt-2 space-x-1">
      <input
        type="text"
        class="
          p-2
          w-px
          border-2
          relative
          flex-shrink flex-grow flex-auto
          rounded-lg
          border-gray-300
          bg-white
          focus:outline-none focus:ring-2 focus:ring-pink-500
        "
      />
      <div class="flex">
        <button
          class="
            flex
            items-center
            leading-normal
            px-4
            whitespace-no-wrap
            text-grey-dark text-sm
            bg-pink-500
            rounded-lg
            focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
          "
        >
          <IconHeroicons-outline:mail class="text-2xl text-pink-200" />
        </button>
      </div>
    </div>
  </div>
</template>