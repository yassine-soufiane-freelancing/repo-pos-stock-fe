import IndexKitchen from './../pages/IndexKitchen.vue'
import KitchenCompletedTickets from './../pages/KitchenCompletedTickets.vue'
import KitchenHistory from './../pages/KitchenHistory.vue'

export default [
    {
        name: 'kitchen.index',
        path: '/kitchen',
        component: IndexKitchen,
        meta: {
            layout: 'kitchen',
            title: 'Kitchen'
        }
    },
    {
        name: 'kitchen.completed',
        path: '/kitchen/completed',
        component: KitchenCompletedTickets,
        meta: {
            layout: 'kitchen',
            title: 'Kitchen Completed'
        }
    },
    {
        name: 'kitchen.history',
        path: '/kitchen/history',
        component: KitchenHistory,
        meta: {
            layout: 'kitchen',
            title: 'Kitchen History'
        }
    },
]