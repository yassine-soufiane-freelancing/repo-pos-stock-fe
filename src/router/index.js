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
import adminStaffRoutes from '@/modules/admin/staff/routes'
import adminCashRoutes from '@/modules/admin/cash/routes'

import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/dashboard',
    name: 'dashboard/index',
    component: AboutView,
    meta: {
      layout: 'dashboard'
    }
  },

  // custom routes
  ...vendor,

  // Admin Routes
  ...adminMenuRoutes,
  ...adminMenuItemsRoutes,
  ...adminTablesRoutes,
  ...adminStaffRoutes,
  ...adminCashRoutes,

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
