export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  pages: true,
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        language: "en-US",
      },
      {
        code: "ru",
        language: "ru-RU",
      },
    ],
    defaultLocale: "en",
    // baseUrl: "https://my-nuxt-app.com",
    lazy: true,
  },
});
