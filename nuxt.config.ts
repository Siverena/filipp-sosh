import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    images: fileURLToPath(new URL('./assets/img', import.meta.url)),
    scss: fileURLToPath(new URL('./assets/scss', import.meta.url)),
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
  },
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/sosh/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [{}],
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue'],
    },
    {
      path: '~/elements',
      pathPrefix: false,
      extensions: ['.vue'],
    },
    {
      path: '~/icons',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  build: {
    transpile: ['primevue'],
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  pages: true,
  css: [
    '~/assets/scss/main.scss',
    'primevue/resources/themes/lara-light-indigo/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
  ],
  router: {
    options: {},
  },
});
