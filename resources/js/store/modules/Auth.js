import Api from '../../api/Api'

const state = {
    role: null
}
const getters = {
    authRole(state) {
        return state.role
    }
}

const actions = {
    async checkAuth({ commit }, state) {
        try {
            const response = await Api().get('/api/'+state.role+'/user')
            console.log(response.data)
        } catch (error) {
            commit('AUTH_ROLE', null)
            localStorage.removeItem('token')
        }
    }
}

const mutations = {
    AUTH_ROLE(state, payload) {
        state.role = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}

