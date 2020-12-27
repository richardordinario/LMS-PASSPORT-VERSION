import Api from '../../api/Api'
import authenticate from '../auth'
import router from '../../router'

const state = {
    auth: {
        login: false,
        user: [],
        check: authenticate.getters['role']
    },
    loading: false,
}
const getters = {
    isLoggedIn(state) {
        return state.auth.login
    },
    isLoading(state) {
        return state.loading
    }
}

const actions = {
    async checkAuth({ commit }, payload) {
        try {
            const response = await Api().get('/api/'+payload+'/user')
            console.log(response.data)
        } catch (error) {
            authenticate.commit('AUTH_ROLE', null)
            localStorage.removeItem('token')
            commit('LOGIN', false)
            router.push('/login')
        }
    },
    async logout({ commit }, payload) {
        try {
            const response = await Api().get('/api/'+payload+'/user')
            console.log(Array.isArray(response.data))
        } catch (error) {
            authenticate.commit('AUTH_ROLE', null)
            localStorage.removeItem('token')
            commit('LOGIN', false)
            router.push('/login')
        }
    },
}

const mutations = {
    LOGIN(state, payload) {
        state.auth.login = payload,
        state.auth.user = []
    },
    AUTH_USER(state, payload) {
        state.auth.user = payload
    },
    LOADING(state, payload) {
        state.loading = payload
    },
    AUTH_CHECK(state) {
        if(state.auth.user.length > 0) {

        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

