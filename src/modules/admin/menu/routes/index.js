import IndexMenu from '../pages/IndexMenu';
import CreateMenu from '../pages/CreateMenu';

export default [
    {
        name: 'admin.menus.index',
        path: '/admin/menus',
        component: IndexMenu,
        meta: {
            title: 'Liste menu',
            layout: 'dashboard'
        }
    },

    {
        name: 'admin.menus.create',
        path: '/admin/menus/create',
        component: CreateMenu,
        meta: {
            title: 'Ajouter une Menu',
            layout: 'dashboard'
        }
    }
]