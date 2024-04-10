// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./layers/ui-pro"],

  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts"],

  devtools: { enabled: true },

  typescript: {
    strict: false,
  },

  ssr: false,

  app: {
    head: {
      title: "Nuxt3 x GitHub Pages",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Master UPV cup" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "es-Es",
      },
    },
    baseURL: "/",
  },

  ui: {
    icons: ["heroicons", "simple-icons", "mdi"],
  },

  content: {
    documentDriven: true,
    experimental: {
      clientDB: true,
    },
  },
});
