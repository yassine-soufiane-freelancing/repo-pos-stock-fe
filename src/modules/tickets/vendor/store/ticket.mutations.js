
export const SET_CURRENT_TICKET = 'SET_CURRENT_TICKET';
export const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const EMPTY_TICKET = 'EMPTY_TICKET';


export default {

    SET_CURRENT_TICKET: (state, payload) => {
        state.currentTicket = payload;
    },

    ADD_ITEM: (state, payload) => {
        state.currentTicket.items.push(payload);
    },

    SET_ITEMS: (state, payload) => {
        state.currentTicket.items = payload;
    },

    SET_CURRENT_CLIENT: (state, payload) => {
        state.currentClient = payload;
    },

    EMPTY_TICKET: (state) => {
        state.currentClient = {
                full_name: '',
                phone: '',
                email: '',
                address: ''
        }

        state.currentTicket = {
            items: [],
            mode: 1
        }

    }

}