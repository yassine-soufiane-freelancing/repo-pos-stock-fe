import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalConfig from './plugins/global'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Icon } from '@iconify/vue';
import '@/assets/css/app.css'

// components
import Popup from '@/common/components/global/AppPopup.vue';
import Loading from '@/common/components/global/AppLoading.vue';

loadFonts()

createApp(App)

  // Register global component
  .component('icon', Icon)
  .component('popup', Popup)
  .component('loading', Loading)

  // Register plugins
  .use(router)
  .use(store)
  .use(vuetify)
  .use(globalConfig)

  // Mount the app
  .mount('#app')
