import { UPDATE_TICKET } from './kitchen.mutations';

export default {
    'update-ticket': ({commit}, payload) => {
        commit(UPDATE_TICKET, payload)
    }
}