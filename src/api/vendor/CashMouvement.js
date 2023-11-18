import Api, { ApiForm } from '@/api/Api'
import Csrf from '@/api/Csrf'

class CashMouvement {

    async create(cashMouvement) {
        await Csrf.getCookie();
        return ApiForm.post('/api/cashMouvements', cashMouvement);
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/cashMouvements' + url, options);
    }

    async all() {
        await Csrf.getCookie();
        return Api.get('api/cashMouvements');
    }

}

export default new CashMouvement();