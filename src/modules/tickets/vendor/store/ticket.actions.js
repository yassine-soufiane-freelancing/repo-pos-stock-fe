import { 
    ADD_ITEM, 
    SET_CURRENT_TICKET, 
    SET_CURRENT_CLIENT, 
    SET_ITEMS, 
    SET_MODE, 
    SET_TABLE, 
    EMPTY_TICKET,
    ADD_TICKET
} from "./ticket.mutations"


export default {
    'add-item': ({commit}, payload) => {
        commit(ADD_ITEM, payload)
    },

    'add-ticket': ({commit}, payload) => {
        commit(ADD_TICKET, payload)
    },

    'set-current-ticket': ({commit}, payload) => {
        commit(SET_CURRENT_TICKET, payload)
    },

    'set-current-client': ({commit}, payload) => {
        commit(SET_CURRENT_CLIENT, payload)
    },
    
    'set-items': ({commit}, payload) => {
        commit(SET_ITEMS, payload)
    },

    'set-mode': ({commit}, payload) => {
        commit(SET_MODE, payload)
    },

    'set-table': ({commit}, payload) => {
        commit(SET_TABLE, payload)
    },

    'empty-ticket': ({commit}, payload) => {
        commit(EMPTY_TICKET, payload)
    },

}