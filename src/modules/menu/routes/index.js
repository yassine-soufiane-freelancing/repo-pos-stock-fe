
export default [
    {
        name: 'vendor/menu',
        path: '/vendor/menu',
        component: () => import('../pages/IndexMenus.vue'),
        meta: {
            layout: 'vendor'
        }
    }
]