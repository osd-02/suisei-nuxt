require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'suisei-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/flamelink',
    // { src: '~/plugins/localStorage.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/dotenv', '@nuxtjs/axios'],

  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          main: '#93a9d1',
          sub: '#9395d1',
          primary: '#fffc79',
          secondary: '#ccc8bf',
          accent: '#bdd3e2',
          warning: '#aa9e32',
          success: '#0f4c81',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: function (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty',
      }
    },
    transpile: ['vee-validate', 'date-utils'],
  },

  plugins: ['@/plugins/flamelink', '@/plugins/vee-validate'],

  env: {
    APP_ID: process.env.APP_ID,
    API_KEY: process.env.API_KEY,
    FLAMELINK_API_KEY: process.env.FLAMELINK_API_KEY,
    FLAMELINK_AUTH_DOMAIN: process.env.FLAMELINK_AUTH_DOMAIN,
    FLAMELINK_PROJECT_ID: process.env.FLAMELINK_PROJECT_ID,
    FLAMELINK_STORAGE_BUCKET: process.env.FLAMELINK_STORAGE_BUCKET,
    FLAMELINK_MESSAGE_SENDER_ID: process.env.FLAMELINK_MESSAGE_SENDER_ID,
    FLAMELINK_APP_ID: process.env.FLAMELINK_APP_ID,
    FLAMELINK_MEASUREMENT_ID: process.env.FLAMELINK_MEASUREMENT_ID,
  },
}
