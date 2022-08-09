export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Matteo Courquin | Le Portfolio d'un Développeur Frontend !! 🚀",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Open Graph
      { property: 'og:title', content: "Matteo Courquin | Le Portfolio d'un Étudiant actif !! 🚀" },
      { property: 'og:description', content: "Étudiant à l'IIM, je ne cesse de monter en compétences ! 🎓  Venez faire un tour sur mon Portfolio. ✅  Mes réalisations sont à la fin ! 👀" },
      { property: 'og:url', content: 'matteo.courqu.in' },
      // { property: 'og:image', content: '[...]' }
      // Google
      { name: 'google-site-verification', content: '6n81QjyK4C02a8g9mMeuhdHqnAcjhHRxsGVdgXVGQ2Y' },
      { name: 'referrer', content: 'origine' },
      { name: 'description', content: "Étudiant à l'IIM, je ne cesse de monter en compétences ! 🎓  Venez faire un tour sur mon Portfolio. ✅  Mes réalisations sont à la fin ! 👀" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Canonical
      { rel: 'canonical', href: 'https://matteo.courqu.in' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxt/image',
  ],

  styleResources: {
    scss: [
      // add more scss files here
      '~assets/scss/main.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
