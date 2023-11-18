import IndexCashMovements from './../pages/IndexCashMovements';
import CreateCashMovement from './../pages/CreateCashMovement';

export default [
    {
        name: 'vendor.cash-movements.index',
        path: '/vendor/cash-movements',
        component: IndexCashMovements,
        meta: {
            layout: 'vendor',
            title: 'Mouvements'
        }
    },


    {
        name: 'vendor.cash-movements.create',
        path: '/vendor/cash-movements/create',
        component: CreateCashMovement,
        meta: {
            layout: 'vendor',
            title: 'Ajouter mouvement'
        }
    },


]