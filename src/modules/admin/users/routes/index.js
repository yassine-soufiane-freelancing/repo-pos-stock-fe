import IndexUsers from '../pages/IndexUsers'
import CreateUser from '../pages/CreateUser'

export default [
    {
        name: 'admin.users.index',
        path: '/admin/users',
        component: IndexUsers,
        meta: {
            title: 'Liste Utilisateurs',
            layout: 'dashboard',
        }
    },

    {
        name: 'admin.users.create',
        path: '/admin/users/create',
        component: CreateUser,
        meta: {
            title: 'Ajouter un Utilisateurs',
            layout: 'dashboard',
        }
    }
]