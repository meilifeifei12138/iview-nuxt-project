export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '南京桔加',
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.jpeg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['view-design/dist/styles/iview.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/view-ui', '@/plugins/font-awesome', '@/plugins/postcss-pxtorem'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-fontawesome', 'nuxt-viewport'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
