<template>
  <div
    class="
      grid grid-cols-12
      gap-4
      py-4
      bg-white
      items-center
      shadow
      lg:px-8
      px-2
    "
  >
    <div class="lg:col-span-2 col-span-6">
      <h1 class="text-2xl font-bold">KAMEN</h1>
    </div>
    <div class="col-span-7 mr-auto lg:inline-block hidden">
      <ul class="flex flex-row justify-center w-full space-x-20">
        <li>
          <NuxtLink href="#" class="flex flex-row items-center">
            <IconHeroicons-outline:home class="mr-2" />
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="flex flex-row items-center">
            <IconHeroicons-outline:film class="mr-2" />
            Video
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="flex flex-row items-center">
            <IconHeroicons-outline:presentation-chart-bar class="mr-2" />
            Pools
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="flex flex-row items-center">
            <IconHeroicons-outline:book-open class="mr-2" />
            Magazine
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="lg:col-span-3 md:col-span-6 lg:inline-block hidden ml-auto">
      <HeaderSearch />
    </div>
  </div>
</template>