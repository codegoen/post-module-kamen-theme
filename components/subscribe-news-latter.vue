<template>
  <div>
    <label for="subs" class="font-semibold">Subscribe news latter</label>
    <div class="flex items-stretch w-full relative mt-2 space-x-1">
      <input
        type="text"
        class="
          w-px
          border-2
          px-2
          py-3
          relative
          flex-shrink flex-grow flex-auto
          rounded
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
            rounded-md
            focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
          "
        >
          <IconHeroicons-outline:mail class="text-2xl text-pink-200" />
        </button>
      </div>
    </div>
  </div>
</template>