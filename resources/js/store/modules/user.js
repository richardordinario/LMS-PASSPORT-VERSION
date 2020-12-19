import Api from '../../api/Api'

const state = {
    auth: {
        login: false,
        user: [],
    }
}
const getters = {
    isLoggedIn(state) {
        return state.auth.login
    }
}

const actions = {}

const mutations = {
    LOGIN(state, payload) {
        state.auth.login = payload
    },
    AUTH_USER(state, payload) {
        state.auth.user = payload
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

