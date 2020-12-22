<template>
    <div id="app">
        <LoginHeader v-if="!isLoggedIn"/>
        <!-- <StudentHeader v-if="$gate.isUser()"/> -->
        <StudentHeader v-if="isLoggedIn"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import LoginHeader from './components/views/template/LoginHeader.vue'
    import StudentHeader from './components/views/student/template/Header.vue'
    import User from './api/User'
    import authenticate from './store/auth'
    // import Auth from './api/Provider'
    // import {globalStore} from './app'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                // role: this.$gate.isUser(),
                // role:  globalStore.role
            };
        },
        components: {
            LoginHeader,
            StudentHeader
        },
        computed: {
            ...mapGetters('user',[
                'isLoggedIn'
            ]),
        },
        methods: {
        },
        mounted() {
            this.$store.commit('user/LOGIN', !!localStorage.getItem('token'))
            // this.$store.dispatch('user/checkAuth', authenticate.getters['authRole'])
            // console.log(this.role)

        }
    }
</script>

<style lang="scss" scoped>

</style>
