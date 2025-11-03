import { createApp } from 'vue'

import App from '@/renderer/App.vue'
import i18n from '@/renderer/plugins/i18n'
import pinia from '@/renderer/plugins/pinia'
import vuetify from '@/renderer/plugins/vuetify'
import router from '@/renderer/router'

// Add API key defined in contextBridge to window object type
declare global {
  interface Window {
    mainApi?: any
  }
}

const app = createApp(App)

app.use(vuetify).use(i18n).use(router).use(pinia)

app.mount('#app')
