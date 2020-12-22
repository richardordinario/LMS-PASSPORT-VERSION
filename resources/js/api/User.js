import Api from './Api'

export default {
    register(form) {
        return Api().post('/api/register',form)
    },
    login(form) {
        return Api().post('/api/login',form)
    },
    logout() {
        return Api().get('/api/logout')
    },
    auth() {
        return Api().get('/api/user/user')
    },
    provider() {
        return Api().get('/api/provider')
    }
}
