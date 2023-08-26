import { createStore } from 'vuex'

// Layouts
import vendorLayout from '@/layouts/vendor/store'

// Modules
import auth from '@/modules/auth/login/store'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    'vendor-layout': vendorLayout,
    'auth': auth,
  }
})
