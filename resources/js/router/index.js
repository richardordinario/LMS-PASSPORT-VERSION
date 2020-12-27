import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/views/auth/Login.vue'
import Register from '../components/views/auth/Register.vue'
import Unauthorized from '../components/views/auth/Unauthorized.vue'

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
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: Unauthorized,
        meta: {guest: true}
    },
    //student route
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {user: true},
    },
    {
        path: '/subject',
        name: 'subject',
        component: Subject,
        meta: {user: true},
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta: {user: true},
    },
    //admin route
    {
        path: '/admin/home',
        name: 'adminHome',
        component: AdminHome,
        meta: {admin: true},
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

function loggedIn() {
    return localStorage.getItem('token')
}

import authenticate from '../store/auth'
import store from '../store'


router.beforeEach((to, from, next) => {
    function roleValidation(meta) {
        if (!loggedIn()) {
            if(meta != 'guest') {
                next({ path: '/login', query: { redirect: to.fullPath } })
            }else {
                next()
            }
        }else {
            store.dispatch('user/checkAuth', authenticate.getters['authRole']).then(() => {
                if(meta == 'guest') {
                    if(authenticate.getters['authRole'] == 'user') {
                        next({ path: '/home', query: { redirect: to.fullPath } })
                    }else if(authenticate.getters['authRole'] == 'admin') {
                        next({ path: '/admin/home', query: { redirect: to.fullPath } })
                    }
                }
                else if(authenticate.getters['authRole'] != meta) {
                    next({ path: '/login', query: { redirect: to.fullPath } })
                }
                else {
                    next()
                }
            })
        }
    }

    if (to.matched.some(record => record.meta.user)) {
        const meta = 'user'
        roleValidation(meta)
    }else if(to.matched.some(record => record.meta.admin)) {
        const meta = 'admin'
        roleValidation(meta)
    }else if(to.matched.some(record => record.meta.guest)) {
        const meta = 'guest'
        roleValidation(meta)
    }else {
        next()
    }
})

export default router;
