import SettingsGeneralPage from './../pages/SettingsGeneralPage'
import SettingsOwnerPage from './../pages/SettingsOwnerPage'
import SettingsTaxPage from './../pages/SettingsTaxPage'

export default [
    {
        name: 'admin.settings.general',
        path: '/admin/settings/general',
        component: SettingsGeneralPage,
        meta: {
            title: 'Paramètres Général',
            layout: 'dashboard',
        }
    },
    {
        name: 'admin.settings.owner',
        path: '/admin/settings/owner',
        component: SettingsOwnerPage,
        meta: {
            title: 'Paramètres Propriétaire',
            layout: 'dashboard',
        }
    },
    {
        name: 'admin.settings.tax',
        path: '/admin/settings/tax',
        component: SettingsTaxPage,
        meta: {
            title: 'Paramètres taxes',
            layout: 'dashboard',
        }
    },
]