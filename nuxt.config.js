import pt from 'vuetify/src/locale/pt';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - acedia-web',
    title: 'acedia-web',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/prevent-nuxt-error-page.ts',
    '~/plugins/axios.ts',
    '~/plugins/sweet-alert.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/vuetify/variables.scss'],
    treeShake: true,
    lang: {
      locales: {
        pt: pt,
      },
      current: 'pt',
    },
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#57b349',
          // background: '#d8d8d8',
          'light-gray': '#d3d3d3',
        },
        dark: {
          primary: '#3f9a31',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        },
      },
    },
  },

  i18n: {
    locales: [
      {
        code: 'ptBR',
        file: 'pt-BR.json',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ptBR',
    strategy: 'no_prefix',
  },

  toast: {
    position: 'bottom-left',
    duration: 4000,
    keepOnHover: true,
    iconPack: 'mdi',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
