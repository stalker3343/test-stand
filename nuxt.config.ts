// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require("path");
const siteMetaInfo = {
  name: "Afterlogic Works! We do code. Premium outsource for your precious projects.",
  description:
    "AfterLogic Corporation is a Newark, Delaware based technology corporation since 2002. Our areas of specialization are collaboration systems and email software development.",
};

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
    "@hypernym/nuxt-gsap",
    "nuxt-svgo",
    "nuxt-viewport",
  ],
  viewport: {
    breakpoints: {
      sm: 340,
      md: 640,
      lg: 1024,
      xl: 1440,
      xxl: 1920,
    },

    defaultBreakpoints: {
      desktop: "xl",
      mobile: "sm",
      tablet: "lg",
    },

    fallbackBreakpoint: "xl",
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  telemetry: false,

  app: {
    baseURL: "/test-stand/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: siteMetaInfo.name,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: siteMetaInfo.description,
        },
        {
          name: "keywords",
          content:
            "software development, outsource development, custom development, web application, emeil software, collaboration system development",
        },
        { charset: "utf-8" },
        // og
        {
          property: "og:site_name",
          content: "Afterlogic Works",
        },

        {
          property: "og:url",
          content: "https://afterlogic.works/",
        },
        {
          property: "og:image",
          content: "/favicon/android-chrome-512x512.png",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: siteMetaInfo.name,
        },
        {
          property: "og:description",
          content: siteMetaInfo.description,
        },
        // twitter
        {
          name: "twitter:title",
          content: siteMetaInfo.name,
        },
        {
          name: "twitter:description",
          content: siteMetaInfo.description,
        },
        {
          name: "twitter:image",
          content: "/favicon/android-chrome-512x512.png",
        },
      ],
      script: [
        {
          async: true,
          defer: true,
          src: `https://www.google.com/recaptcha/api.js?render=${process.env.VITE_CAPTCHA_CLIENT}`,
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
            '<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=1077884&fmt=gif">',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      VITE_CAPTCHA_CLIENT: process.env.VITE_CAPTCHA_CLIENT,
    },
  },
  css: ["@/assets/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/global.scss" as *;`,
        },
      },
    },
  },
  hooks: {
    "build:manifest": (manifest) => {
      // find the app entry, css list
      const css = manifest["node_modules/nuxt/dist/app/entry.js"]?.css;
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith("entry")) css.splice(i, 1);
        }
      }
    },
  },

  nitro: {
    // output: {
    //   publicDir: path.join(__dirname, "dist"),
    // },
  },
});
