// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require("path");

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    // "vue-scrollto/nuxt",
    "@vee-validate/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Open+Sans": [800],
          Onest: [300, 400, 500, 600, 700, 800],
          Inter: true,
          // Raleway: { wght: [100, 400], ital: [100] },
        },
      },
    ],
  ],
  telemetry: false,
  app: {
    head: {
      title: "Afterlogic",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          async: true,
          defer: true,
          src: "https://www.google.com/recaptcha/api.js?render=%VITE_CAPTCHA_CLIENT%",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],

      noscript: [
        // <noscript>JavaScript is required</noscript>
        {
          children:
            '<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=1077884&fmt=gif" />',
        },
      ],
    },
  },
  css: ["@/assets/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/global.scss";`,
        },
      },
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
  },
});
