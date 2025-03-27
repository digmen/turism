export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/",
  },
  sitemap: {
    hostname: "https://awesomekyrgyztravel.com",
    i18n: true,
    exclude: ["/admin/**"],
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date(),
    },
  },
  css: ["@/assets/css/main.css"],
  pages: true,
  modules: ["@nuxtjs/i18n", "@nuxtjs/sitemap"],
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
  runtimeConfig: {
    public: {
      host: "0.0.0.0",
      port: 3000,
    },
  },
});
