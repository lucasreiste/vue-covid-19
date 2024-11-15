export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'COVID-19 DATA TRACKER',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios'
  ],

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  //       headers: {
  //         'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
  //         'x-rapidapi-key': '37d24df367msh5417f397e90ad84p171f31jsn761294a9732a'
  //       }
  //     }
  //   }
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

  // hooks: {
  //   render: {
  //     async before({
  //       nuxt: {
  //         server: { app }
  //       }
  //     }) {
  //       await server.start()
  //       await server.applyMiddleware({ app, path: '/api' })
  //       console.log('🚀 ApolloServer ready at /api')
  //     }
  //   }
  // }
}
