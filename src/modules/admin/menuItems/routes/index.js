import IndexMenuItems from '../pages/IndexMenuItems';
import CreateMenuItem from '../pages/CreateMenuItem';

export default [
    {
        name: 'admin.menus.items.index',
        path: '/admin/menus',
        component: IndexMenuItems,
        meta: {
            title: 'Liste menu',
            layout: 'dashboard'
        }
    },

    {
        name: 'admin.menus.items.create',
        path: '/admin/menus/create',
        component: CreateMenuItem,
        meta: {
            title: 'Ajouter élément de menu',
            layout: 'dashboard'
        }
    }
]