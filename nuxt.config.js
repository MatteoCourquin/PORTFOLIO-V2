export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Matteo Courquin | Le Portfolio d'un Développeur Front-End !! 🚀",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Open Graph
      { property: 'og:title', content: "Matteo Courquin | Le Portfolio d'un Développeur Front-End !! 🚀" },
      { property: 'og:description', content: "Matteo Courquin | Le Portfolio d'un Développeur Front-End !! 🚀" },
      { property: 'og:url', content: 'matteo.courqu.in' },
      { property: 'og:image', content: '/ogImage.png' },
      // Google
      { name: 'google-site-verification', content: '6n81QjyK4C02a8g9mMeuhdHqnAcjhHRxsGVdgXVGQ2Y' },
      { name: 'referrer', content: 'default' },
      { name: 'description', content: "Matteo Courquin | Le Portfolio d'un Développeur Front-End !! 🚀" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
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
    'nuxt-gsap-module',
  ],

  gsap: {
    /* Module Options */
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

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
