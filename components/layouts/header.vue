<template>
  <div
    class="
      grid
      lg:grid-cols-12
      grid-cols-2
      gap-4
      py-4
      bg-white
      items-center
      shadow
      lg:px-8
      px-2
    "
  >
    <div class="lg:col-span-2">
      <h1 class="text-2xl font-bold">KAMEN</h1>
    </div>
    <div class="lg:hidden inline ml-auto">
      <button
        class="
          p-2
          rounded-md
          focus:ring-2
          focus:ring-offset-2
          focus:ring-pink-500
          focus:outline-none
        "
        @click.prevent="state.toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <div class="col-span-7 mr-auto lg:inline-block hidden">
      <ul class="flex flex-row justify-center w-full space-x-20">
        <li>
          <NuxtLink href="#" class="flex flex-row items-center font-semibold">
            <IconHeroicons-outline:home class="mr-2 font-semibold" />
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="flex flex-row items-center font-semibold">
            <IconHeroicons-outline:film class="mr-2 font-semibold" />
            Video
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="flex flex-row items-center font-semibold">
            <IconHeroicons-outline:presentation-chart-bar
              class="mr-2 font-semibold"
            />
            Pools
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="flex flex-row items-center font-semibold">
            <IconHeroicons-outline:book-open class="mr-2 font-semibold" />
            Magazine
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="lg:col-span-3 md:col-span-6 lg:inline-block hidden ml-auto">
      <!-- search button -->
      <SearchButton class="w-72" @click.prevent="search.toggle" />
    </div>
  </div>
  <div
    :class="[state.open ? 'flex flex-col' : 'hidden']"
    class="shadow border-t bg-white divide-y divide-gray-200 lg:hidden"
  >
    <div class="p-4">
      <!-- search button -->
      <SearchButton class="w-full" @click.prevent="search.toggle" />
    </div>

    <NuxtLink
      href="#"
      class="flex flex-row items-center font-semibold hover:bg-gray-200 p-4"
    >
      <IconHeroicons-outline:home class="mr-2 font-semibold" />
      Home
    </NuxtLink>
    <NuxtLink
      href="#"
      class="flex flex-row items-center font-semibold hover:bg-gray-200 p-4"
    >
      <IconHeroicons-outline:film class="mr-2 font-semibold" />
      Video
    </NuxtLink>
    <NuxtLink
      href="#"
      class="flex flex-row items-center font-semibold hover:bg-gray-200 p-4"
    >
      <IconHeroicons-outline:presentation-chart-bar
        class="mr-2 font-semibold"
      />
      Pools
    </NuxtLink>
    <NuxtLink
      href="#"
      class="flex flex-row items-center font-semibold hover:bg-gray-200 p-4"
    >
      <IconHeroicons-outline:book-open class="mr-2 font-semibold" />
      Magazine
    </NuxtLink>
  </div>
</template>
<script setup>
import { useState } from "~~/stores/state";
import { useSearch } from "~~/stores/search";

const state = useState();
const search = useSearch();
</script>