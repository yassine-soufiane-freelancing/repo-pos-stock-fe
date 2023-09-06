import Api, { ApiForm } from '@/api/Api'
import Csrf from '@/api/Csrf'

class MenuItem {

    async create(menuItem) {
        await Csrf.getCookie();
        return ApiForm.post('/api/items', menuItem);
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/items' + url, options);
    }

}

export default new MenuItem();