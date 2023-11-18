const initialState = {
    drawer: true,
    rail: true,

    sidebar: 'index-options',
    available_options: ['index-options', 'index-ticket']
}

export default {
    namespaced: true,
    name: 'vendor-layout',

    state: initialState,

    getters: {
        drawer: state => state.drawer,
        rail: state => state.rail,

        sidebar: state => state.sidebar
    },

    mutations: {
        SET_DRAWER: (state, payload) => {
            state.drawer = payload
        },

        SET_RAIL: (state, payload) => {
            state.rail = payload
        },

        SET_SIDEBAR: (state, payload) => {
            state.sidebar = state.available_options.includes(payload) ? payload : 'index-options'
        }
    },
    
    actions: {
        setDrawer: ({commit}, payload) => {
            commit('SET_DRAWER', payload)
        },

        setRail: ({commit}, payload) => {
            commit('SET_RAIL', payload)
        },

        'set-sidebar': ({commit}, payload) => {
            commit('SET_SIDEBAR', payload)
        }
    }
}