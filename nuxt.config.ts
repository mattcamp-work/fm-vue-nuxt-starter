import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import Aura from '@primeuix/themes/aura'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const siteName = process.env.NUXT_PUBLIC_SITE_NAME || 'Nuxt Starter'
const siteDescription =
  process.env.NUXT_PUBLIC_SITE_DESCRIPTION ||
  'Nuxt 4 starter with Tailwind CSS, PrimeVue, Pinia, and baseline SEO metadata.'
const siteSocialImage = process.env.NUXT_PUBLIC_SOCIAL_IMAGE || '/social-card.svg'
const absoluteSocialImage = new URL(siteSocialImage, siteUrl).toString()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@primevue/nuxt-module'],
  css: [
    '~/assets/scss/main.scss',
    'primeicons/primeicons.css'
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: siteName,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'theme-color', content: '#0f172a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: absoluteSocialImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteName },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: absoluteSocialImage }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription,
      socialImage: siteSocialImage
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }
  }
})
