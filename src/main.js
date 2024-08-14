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

// Handle the redirect before setting up the router
router.isReady().then(() => {
  const redirectPath = sessionStorage.getItem('redirect');
  if (redirectPath) {
    sessionStorage.removeItem('redirect');
    router.push(redirectPath).catch(error => {
      if (error.name !== 'NavigationDuplicated') {
        throw error;
      }
    });
  }

// Global components
import AppContainer from './components/layout/container/AppContainer.vue'
import AppButton from './components/layout/button/AppButton.vue'

const pinia = createPinia()

createApp(App)
  .component('AppContainer', AppContainer)
  .component('AppButton', AppButton)
  .use(router)
  .use(pinia)
  .use(mdiVue, {
    icons: mdijs
  })
  .mount('#app')
