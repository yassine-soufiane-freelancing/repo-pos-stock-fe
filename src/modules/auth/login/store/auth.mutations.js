export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export default {

    LOGIN: (state, payload) => {
        state.user = payload;
        state.isLoggedIn = true
    },

    LOGOUT: (state) => {
        state.isLoggedIn = false;
        state.user = null;
    }
}