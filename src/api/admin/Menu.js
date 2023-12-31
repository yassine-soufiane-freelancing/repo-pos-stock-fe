import Api, { ApiForm } from '@/api/Api'
import Csrf from '@/api/Csrf'

class Menu {

    async create(menu) {
        await Csrf.getCookie();
        return ApiForm.post('/api/menus', menu);
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/menus' + url, options);
    }

    async all() {
        await Csrf.getCookie();
        return Api.get('api/menus/all');
    }

}

export default new Menu();