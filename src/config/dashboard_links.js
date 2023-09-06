export default [
    {
        id: 1,
        name: 'Dashboard',
        icon: 'carbon:dashboard',
        to: 'dashboard/index',
        hasChildren: false
    },
    {
        id: 2,
        name: 'Menu',
        icon: 'fluent:food-24-filled',
        hasChildren: true,
        module: 'menu',
        children: [
            {
                id: 1,
                name: 'Liste menus',
                to: 'admin.menus.index',
                module: 'menu'
            },
            {
                id: 2,
                name: 'Ajouter une menu',
                to: 'admin.menus.create',
                module: 'menu'
            },
            {
                id: 3,
                name: 'Ajouter un élément',
                to: 'admin.menus.items.create',
                module: 'menu'
            }
        ]
    },
    {
        id: 4,
        name: 'Staff',
        icon: 'fluent:people-team-16-filled',
        hasChildren: true,
        module: 'staff',
        children: [
            {
                id: 1,
                name: 'Liste Staff',
                to: 'admin.staff.index',
                module: 'staff'
            }
        ]
    },
    {
        id: 5,
        name: 'Caisse',
        icon: 'mdi:cash-register',
        hasChildren: true,
        module: 'cash',
        children: [
            {
                id: 1,
                name: 'Movements d\'argents',
                to: 'admin.cash.movements.index',
                module: 'cash'
            }
        ]
    },
    {
        id: 6,
        name: 'Tables',
        icon: 'ic:round-table-bar',
        hasChildren: true,
        module: 'tables',
        children: [
            {
                id: 1,
                name: 'Liste tables',
                to: 'admin.tables.index',
                module: 'tables'
            }
        ]
    },
]