// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/texts/texts.scss',
    '~/assets/fonts/fonts.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/texts/vars.scss" as *;'
        }
      }
    }
  },
  app: {
    baseURL: '/grinder-settings-app',
  }
},


)
