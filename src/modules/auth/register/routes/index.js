
export default [
    {
        name: 'register',
        path: '/register',
        component: () => import('../pages/RegisterView.vue'),
        meta: {
            layout: 'app'
        }
    }
]