import { defineNuxtConfig } from "nuxt";
import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // auto import component
  component: true,

  // meta
  meta: {
    title: "Kamen Theme",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Kamen Theme",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // css
  css: ["~/assets/css/tailwind.css"],

  // build
  build: {
    transpile: ["@headlessui/vue"],
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },

  // build modules
  buildModules: ["unplugin-icons/nuxt", "@nuxtjs/svg", "@pinia/nuxt"],

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
    ],
  },
});
