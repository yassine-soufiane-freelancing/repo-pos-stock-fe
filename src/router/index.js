import { createRouter, createWebHistory } from 'vue-router'
import vendor from './routes/vendor'

import loginRoutes from '@/modules/auth/login/routes'
import registerRoutes from '@/modules/auth/register/routes'
import menuRoutes from '@/modules/menu/routes/index.js'

import vendorCashMovementsRoutes from '@/modules/vendor/cash/movements/routes'
import vendorCashRegisterRoutes from '@/modules/vendor/cash/register/routes'

import kitchenRoutes from '@/modules/kitchen/routes'

import adminMenuRoutes from '@/modules/admin/menu/routes'
import adminMenuItemsRoutes from '@/modules/admin/menuItems/routes'
import adminTablesRoutes from '@/modules/admin/tables/routes'
import adminUsersRoutes from '@/modules/admin/users/routes'
import adminCashRoutes from '@/modules/admin/cash/routes'
import adminStatisticsRoutes from '@/modules/admin/statistics/routes'
import adminSettingsRoutes from '@/modules/admin/settings/routes'


import IndexView from '../views/IndexView.vue'
// import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  
  // custom routes
  ...vendor,
  
  // Admin Routes
  ...adminMenuRoutes,
  ...adminMenuItemsRoutes,
  ...adminTablesRoutes,
  ...adminUsersRoutes,
  ...adminCashRoutes,
  ...adminStatisticsRoutes,
  ...adminSettingsRoutes,

  // Vendor Routes
  ...vendorCashMovementsRoutes,
  ...vendorCashRegisterRoutes,

  // Kitchen
  ...kitchenRoutes,

  // Global routes
  ...loginRoutes,
  ...registerRoutes,
  ...menuRoutes,

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
