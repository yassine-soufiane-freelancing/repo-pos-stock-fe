import { LOGIN, LOGOUT } from "./auth.mutations"


export default {
    login: ({commit}, payload) => {
        commit(LOGIN, payload)
    },

    logout: ({commit}) => {
        commit(LOGOUT)
    }
}