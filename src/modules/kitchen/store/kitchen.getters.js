export default {
    tickets: (state) => state.tickets,
    active: (state) => state.tickets.filter(i => i.status != 'completed'),
    completed: (state) => state.tickets.filter(i => i.status == 'completed'),
}