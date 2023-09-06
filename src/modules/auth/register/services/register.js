import Register from "@/api/auth/Register";


export const register = (app) => {
    const user = {
        name: app.name,
        email: app.email,
        password: app.password,
        password_confirmation: app.password
    }

    if(!validate(app, user)) return false;

    app.loading = true
    Register.register(user)
    .then(res => success(app, res))
    .catch(err => fails(app, err))
    .finally(() => app.loading = false)
}


const success = (app, res) => {

    switch (res.status) {
        case 201:
            app.$alert({
                type: 'success',
                body: 'Your account has been created.'
            })
        break;

        case 302:
            app.$alert({
                type: 'success',
                body: 'You are already logged in.'
            })
        break;
    
        default:
            break;
    }
}


const fails = (app, error) => {
    switch (error.response?.status) {
        case 406:
            app.$alert({
                type: 'info',
                body: 'You are already logged in.'
            });
        break;

        case 422:
            var errors = error.response.data.errors;
            for(const key in errors) {
                app.errors[key] = errors[key][0]
            }
        break;
    
        default:
            break;
    }
}


const validate = (app, user) => {

    if(!user.name) {
        app.errors.name = 'Name field is required'
        return false;
    }

    if(!user.email) {
        app.errors.email = 'Email field is required'
        return false;
    }

    if(!user.password) {
        app.errors.password = 'Password field is required'
        return false;
    }

    return true;
}