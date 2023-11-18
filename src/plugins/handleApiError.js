
const ApiErrorHandler = {
    install(app) {
        
        app.config.globalProperties.$handleApiError = function(err) {
            const code = err?.response?.data?.code;
            const message = err?.response?.data?.message;
            let type = 'danger'
            let body = "Something wrong happened. Try again"
            let alert = true
            const errors = ['VALIDATION_ERROR', 'NOT_ACTIVE_ERROR', 'INVALID_CREDENTIALS', 'PERMISSION_DENIED'];

            if (errors.includes(code)) {
                alert = false;
            }

            if (err.code == "ERR_NETWORK") {
                body = 'Network error. Check your connection'
            }
            
            if(message == "Unauthenticated.") {
                body = "Vous étes pas connecté !";
                logout(app)
            }


            switch (code) {
                case 'NOT_ALLOWED':
                    body = 'Your are not allowed to this resources'
                break;

                case 'ERROR':
                    body = err?.response?.data.message
                break;

                case 'NOT_AUTHENTICATED':
                    body = 'Your session expired'

                    logout(app)
                break;
                
                case 'NOT_FOUND':
                    alert = false;
                    app.config.globalProperties.$router.push({ name: '404' })
                    break;
                    
                case 'RELOAD':
                    alert = false;
                    location.reload(true);
                break;
                    
                case 'HIDE_APP':
                    alert = false;
                    document.getElementById('app').innerHTML = ''
                break;

                default:
                    break;
            }

            alert ? app.config.globalProperties.$alert({ type, body }) : '';
            return err
        }
    }
}

export default ApiErrorHandler;


const logout = (app) => {
    setTimeout(() => {
        app.config.globalProperties.$store.dispatch('auth/logout')
        app.config.globalProperties.$router.push('/login')
    }, 2000)
}