
export default [
    {
        name: 'login',
        path: '/login',
        component: () => import('./../pages/LoginView.vue'),
        meta: {
            layout: 'app'
        }
    }
]