import state from './kitchen.state'
import getters from './kitchen.getters'
import mutations from './kitchen.mutations';
import actions from './kitchen.actions';

export default {
    namespaced: true,
    name: 'kitchen',
    state,
    getters,
    mutations,
    actions
}