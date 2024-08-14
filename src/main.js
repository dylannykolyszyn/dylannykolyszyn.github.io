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

const pinia = createPinia()

createApp(App)
  .component('AppContainer', AppContainer)
  .use(router)
  .use(pinia)
  .use(mdiVue, {
    icons: mdijs
  })
  .mount('#app')
