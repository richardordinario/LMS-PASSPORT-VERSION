import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/views/auth/Login.vue'
import Register from '../components/views/auth/Register.vue'

//student component
import Home from '../components/views/student/Home.vue'
import Subject from '../components/views/student/Subject.vue'
import Account from '../components/views/student/Account.vue'

//admin component
import AdminHome from '../components/views/admin/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {guest: true}
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {guest: true}
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {guest: true}
    },
    //student route
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {usersAuth: true},
        children:[
            {
                path: '/subject',
                name: 'subject',
                component: Subject,
                meta: {usersAuth: true},
            },
            {
                path: '/account',
                name: 'account',
                component: Account,
                meta: {usersAuth: true},
            },
        ]
    },
    //admin route
    {
        path: '/admin/home',
        name: 'adminHome',
        component: AdminHome,
        meta: {usersAuth: true},
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

import { provider } from '../api/Provider'
import store from '../store'
import Api from '../api/Api'


function loggedIn() {
    return localStorage.getItem('token')
}

// function auth() {
//     getAuth()
//     return store.getters['user/authRole']
// }
// function getAuth() {
//     return store.dispatch('user/getAuth')
// }
// console.log(provider())

router.beforeEach((to, from, next) => {
    console.log(store.state.user.auth.role)
    if (to.matched.some(record => record.meta.usersAuth)) {
        if (!loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }else {
            if(store.state.user.auth.role == 'user') {
                next({
                    path: '/home',
                    query: { redirect: to.fullPath }
                })
            }else if(store.state.user.auth.role == 'admin') {
                next({
                    path: '/admin/home',
                    query: { redirect: to.fullPath }
                })
            }else {
                next()
            }
        }
    }else if(to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            if(store.state.user.auth.role == 'user') {
                next({
                    path: '/home',
                    query: { redirect: to.fullPath }
                })
            }else if(store.state.user.auth.role == 'admin') {
                next({
                    path: '/admin/home',
                    query: { redirect: to.fullPath }
                })
            }else {
                next()
            }
           
        }
        else {
            next()
        }
    }else {
        next() // make sure to always call next()!
    }
})

export default router;