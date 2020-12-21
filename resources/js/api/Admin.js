import Api from './Api'

export default {
    register(form) {
        return Api().post('/api/admin/register',form)
    },
    login(form) {
        return Api().post('/api/admin/login',form)
    },
    logout() {
        return Api().post('/api/admin/logout')
    },
    auth() {
        return Api().get('/api/admin/user')
    }
}