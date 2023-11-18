import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalConfig from './plugins/global'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Icon } from '@iconify/vue';
import ApiErrorHandler from './plugins/handleApiError'
import '@/assets/css/app.css'

// components
import Popup from '@/common/components/global/AppPopup.vue';
import Loading from '@/common/components/global/AppLoading.vue';
import Button from '@/common/components/global/AppButton.vue';

loadFonts()

createApp(App)

  // Register global component
  .component('icon', Icon)
  .component('popup', Popup)
  .component('loading', Loading)
  .component('a-button', Button)

  // Register plugins
  .use(router)
  .use(store)
  .use(vuetify)
  .use(globalConfig)
  .use(ApiErrorHandler)

  // Mount the app
  .mount('#app')
