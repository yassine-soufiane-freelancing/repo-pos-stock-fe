import state from './auth.state'
import getters from './auth.getters'
import mutations from './auth.mutations';
import actions from './auth.actions';

export default {
    namespaced: true,
    name: 'auth',
    state,
    getters,
    mutations,
    actions
}