// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Server-only (never exposed to the client)
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Lasting Memory — An Agentic Life Vault',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#09090f' },
        {
          name: 'description',
          content:
            'Preserve who you are, not just what you made. An AI-guided life vault that captures your stories, values, and wisdom — and shares them with the people who matter.',
        },
        { property: 'og:title', content: 'Lasting Memory' },
        {
          property: 'og:description',
          content: 'Preserve who you are, not just what you made.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://lastingmemory.com' },
        { property: 'og:site_name', content: 'Lasting Memory' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lasting Memory' },
        {
          name: 'twitter:description',
          content: 'Preserve who you are, not just what you made.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap',
        },
      ],
    },
  },
})
