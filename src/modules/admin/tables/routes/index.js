import IndexTables from '../pages/IndexTables'

export default [
    {
        name: 'admin.tables.index',
        path: '/admin/tables',
        component: IndexTables,
        meta: {
            title: 'Liste tables',
            layout: 'dashboard',
        }
    }
]