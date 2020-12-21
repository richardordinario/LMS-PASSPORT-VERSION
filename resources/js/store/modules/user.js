import Api from '../../api/Api'

const state = {
    auth: {
        login: false,
        user: [],
        role: null
    }
}
const getters = {
    isLoggedIn(state) {
        return state.auth.login
    },
    authRole(state) {
        return state.auth.role
    }
}

const actions = {
    async getAuth({ commit }) {
        const response = await Api().get('/api/provider')
        commit('AUTH_ROLE', response.data)
    }    
}

const mutations = {
    LOGIN(state, payload) {
        state.auth.login = payload,
        state.auth.user = []
        state.auth.role = null
    },
    AUTH_USER(state, payload) {
        state.auth.user = payload
    },
    AUTH_ROLE(state, payload) {
        state.auth.role = payload
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

