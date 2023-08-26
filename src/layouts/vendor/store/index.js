const initialState = {
    drawer: true,
    rail: true
}

export default {
    namespaced: true,
    name: 'vendor-layout',

    state: initialState,

    getters: {
        drawer: state => state.drawer,
        rail: state => state.rail
    },

    mutations: {
        SET_DRAWER: (state, payload) => {
            state.drawer = payload
        },

        SET_RAIL: (state, payload) => {
            state.rail = payload
        }
    },
    
    actions: {
        setDrawer: ({commit}, payload) => {
            commit('SET_DRAWER', payload)
        },

        setRail: ({commit}, payload) => {
            commit('SET_RAIL', payload)
        }
    }
}