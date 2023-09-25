import { createStore } from 'vuex'

// Layouts
import vendorLayout from '@/layouts/vendor/store'

// Modules
import auth from '@/modules/auth/login/store'
import alert from './modules/alert'
import dashboard from '@/layouts/dashboard/store'
import ticket from '@/modules/tickets/vendor/store'
import kitchen from '@/modules/kitchen/store'


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
    'alert': alert,
    'dashboard': dashboard,
    'ticket': ticket,
    'kitchen': kitchen
  }
})
