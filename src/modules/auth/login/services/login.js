import Login from "@/api/auth/Login";


export const login = (app) => {
    const user = {
        email: app.email,
        password: app.password
    }

    if(!validate(app, user)) return false;

    app.loading = true
    Login.login(user)
    .then(success, fails)
    .finally(() => app.loading = false)
}


const success = ({data}) => {
    if(data.code != 'SUCCESS') return false;

    console.log('Logged in');
}


const fails = (error) => {
    console.log(error);
    console.log('Failed in');
}


const validate = (app, user) => {

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