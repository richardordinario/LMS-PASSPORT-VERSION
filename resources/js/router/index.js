import vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/views/auth/Login.vue'
import Register from '../components/views/auth/Register.vue'
import Home from '../components/views/student/Home.vue'

vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router