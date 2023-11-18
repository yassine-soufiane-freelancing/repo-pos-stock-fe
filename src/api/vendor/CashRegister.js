import Api, { ApiForm } from '@/api/Api'
import Csrf from '@/api/Csrf'

class CashRegister {

    async create(cashRegister) {
        await Csrf.getCookie();
        return ApiForm.post('/api/cashRegisters', cashRegister);
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/cashRegisters' + url, options);
    }

    async all() {
        await Csrf.getCookie();
        return Api.get('api/cashRegisters');
    }

}

export default new CashRegister();