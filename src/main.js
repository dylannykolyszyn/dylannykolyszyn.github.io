// Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// App
import App from './views/App.vue'

// Plugins
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

// Styles
import './assets/base.css'

// Plugin files
import router from './router/router.js'

// Global components
import AppContainer from './components/layout/container/AppContainer.vue'
import AppButton from './components/layout/button/AppButton.vue'

const pinia = createPinia()

let app = createApp(App)
  .component('AppContainer', AppContainer)
  .component('AppButton', AppButton)
  .use(router)
  .use(pinia)
  .use(mdiVue, {
    icons: mdijs
  })

router.isReady().then(() => {
  const redirectPath = sessionStorage.getItem('redirect')
  if (redirectPath) {
    sessionStorage.removeItem('redirect')
    router.push(redirectPath).catch((error) => {
      if (error.name !== 'NavigationDuplicated') {
        console.error(error)
      }
    })
  }

  app.mount('#app')
})
