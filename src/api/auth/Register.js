import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Register {

    async register(user) {
        await Csrf.getCookie();
        return Api.post('/register', user);
    }

}

export default new Register();