export const UPDATE_TICKET = 'UPDATE_TICKET';

export default {
    UPDATE_TICKET: (state, payload) => {
        console.log(payload);
        state.tickets = state.tickets.map(i => i.id == payload.id ? payload : i);
    }
}