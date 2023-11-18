import IndexCashRegister from './../pages/IndexCashRegister';
import CreateCashRegister from './../pages/CreateCashRegister';

export default [
    {
        name: 'vendor.cash-register.index',
        path: '/vendor/cash-register',
        component: IndexCashRegister,
        meta: {
            layout: 'vendor',
            title: 'Register'
        }
    },


    {
        name: 'vendor.cash-register.create',
        path: '/vendor/cash-register/create',
        component: CreateCashRegister,
        meta: {
            layout: 'vendor',
            title: 'Ajouter register'
        }
    },


]