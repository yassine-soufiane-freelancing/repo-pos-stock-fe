import state from './ticket.state'
import getters from './ticket.getters'
import mutations from './ticket.mutations';
import actions from './ticket.actions';

export default {
    namespaced: true,
    name: 'ticket',
    state,
    getters,
    mutations,
    actions
}