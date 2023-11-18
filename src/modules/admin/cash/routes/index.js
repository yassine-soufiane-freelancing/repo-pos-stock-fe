import IndexCashMovements from '../pages/IndexCashMovements'

export default [
    {
        name: 'admin.cash.movements.index',
        path: '/admin/cash/movements',
        component: IndexCashMovements,
        meta: {
            title: 'Movements d\'argents',
            layout: 'dashboard',
        }
    }
]