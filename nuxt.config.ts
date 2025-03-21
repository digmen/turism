export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/",
  },
  css: ["@/assets/css/main.css"],
  pages: true,
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    defaultLocale: "en",
    // baseUrl: "https://my-nuxt-app.com",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ru",
        iso: "ru",
        name: "Russian",
        file: "ru.json",
      },
    ],
  },
});
