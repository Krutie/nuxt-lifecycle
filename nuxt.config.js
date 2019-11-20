const { pointsMap, icons } = require("./config/index.js");
const { I18N } = require("./config/i18n.js");
const routesData = require("./utils/routeHelper");

export default {
  /*
   ** Env Variables
   */
  env: {
    pointsMap: pointsMap,
    icons: icons
  },

  loading: "@/components/loading.vue",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt Lifecycle Hooks",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt Lifecycle Hooks"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/gsap/TimelineMax.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-80110907-2"
      }
    ]
  ],
  tailwindcss: {
    configPath: "~/config/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/pwa"],
    ["nuxt-i18n", I18N],
    "@nuxtjs/markdownit",
    "nuxt-webfontloader",
    "@nuxtjs/sitemap"
  ],
  /*
   ** Load Google font asynchronously
   */
  webfontloader: {
    google: {
      families: ["Quicksand:400,700", "Lilita+One&display=swap"]
    }
  },
  /*
   ** Generate Sitemap
   ** using same util function as
   ** used to generate dynamic routes
   */
  sitemap: {
    hostname: "https://nuxt-lifecycle.krutiepatel.com",
    routes: routesData,
    path: "/sitemap.xml",
    gzip: true,
    generate: false
  },
  /*
   ** Generate Routes
   */
  generate: {
    fallback: true,
    routes: routesData
  },
  /*
   ** PWA Configuration
   */
  pwa: {
    icon: {
      iconSrc: "~/static/icon.png",
      iconFileName: "icon.png"
    },
    manifest: {
      name: "My Awesome App",
      short_name: "best-day",
      lang: "en",
      start_url: "/index.html",
      theme_color: "#ed9a9c",
      cacheAssets: true
    }
  },
  /*
   ** Render
   */
  render: {
    bundleRendered: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
