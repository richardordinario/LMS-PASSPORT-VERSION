<template>
    <div id="app">
        <LoginHeader v-if="!isLoggedIn"/>
        <StudentHeader v-if="isLoggedIn && authRole == 'user' "/>
        <router-view></router-view>
    </div>
</template>

<script>
    import LoginHeader from './components/views/template/LoginHeader.vue'
    import StudentHeader from './components/views/student/template/Header.vue'
    import User from './api/User'
    import Auth from './api/Provider'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            LoginHeader,
            StudentHeader
        },
        computed: {
            ...mapGetters('user',[
                'isLoggedIn',
                'authRole'
            ]),
        },
        methods: {
            provider() {
                if(localStorage.getItem('token')) {
                    // Auth.provider().then(res => {
                    //     if(res.data == 'admin') {
                            
                    //     }else if(res.data == 'teacher') {

                    //     }else {
                    //         this.$store.commit('user/AUTH_ROLE', res.data)
                    //     }
                    //     this.$store.commit('user/AUTH_ROLE', res.data)
                    // }).catch(err => {
                    //     console.log(err.response.data)
                    // })
                    User.provider().then(res=> {
                        this.$store.commit('user/AUTH_ROLE', res.data)
                    })
                }
            }
        },
        mounted() {
            this.$store.commit('user/LOGIN', !!localStorage.getItem('token')),
            this.provider()
        }
    }
</script>

<style lang="scss" scoped>

</style>