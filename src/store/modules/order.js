const initialState = {
    order: null
}

export default {
    namespaced: true,
    name: 'order',

    state: initialState,

    getters: {
        order: state => state.order
    },

    mutations: {
        SET_ORDER: (state, payload) => {
            state.order = payload
        },
    },

    actions: {
        setOrder: ({commit}, payload) => {
            commit('SET_ORDER', payload)
        }
    }
}