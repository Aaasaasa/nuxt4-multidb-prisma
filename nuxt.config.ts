// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    '@sidebase/nuxt-prisma',
    '@nuxtjs/eslint-module',
    '@nuxt/devtools'
  ],

  ui: {
    icons: ['mdi', 'simple-icons']
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'de', name: 'Deutsch' }
    ]
  },

  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/session', method: 'get' }
      },
      pages: {
        login: '/auth/login'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      }
    }
  },

  prisma: {
    client: {
      connectionType: 'multiple'
    }
  },

  runtimeConfig: {
    redisUrl: process.env.REDIS_URL,
    wordpressApi: process.env.API_BASE_URL,
    dbPrefix: process.env.DB_PREFIX,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL
    }
  },

  typescript: {
    typeCheck: true,
    strict: true
  }
})