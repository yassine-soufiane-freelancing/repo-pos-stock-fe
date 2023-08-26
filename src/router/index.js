import { createRouter, createWebHistory } from 'vue-router'
import loginRoutes from '@/modules/auth/login/routes'
import menuRoutes from '@/modules/menu/routes/index.js'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...loginRoutes,
  ...menuRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
