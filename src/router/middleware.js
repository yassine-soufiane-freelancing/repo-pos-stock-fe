import store from '@/store'
export default function (to) {

    // Changing page title
    document.title = to.meta?.title + ' | App'
    
    // handle if user is not logged
    if (!store.getters['user/isLoggedIn']) {
        if (to.path == '/login') {
            return true
        }

        return { name: 'login' }
    }

    // handle if user is logged and want to show login
    if (to.path == '/login') {
        return { name: '404' }
    }

    return true
}