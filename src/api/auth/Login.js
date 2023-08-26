import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Login {

    async login(user) {
        await Csrf.getCookie();
        return Api.post('api/auth/login', user);
    }

}

export default new Login();