<template>
    <div id="app">
        <div v-if="isLoading"
            class="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50"
            style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)" >
            Loading.....
        </div>
        <router-view v-if="!isLoggedIn"></router-view>
        <StudentMain v-if="isLoggedIn && role=='user' "/>
    </div>
</template>

<script>
    import LoginHeader from './components/views/template/LoginHeader.vue'
    import StudentHeader from './components/views/student/template/Header.vue'
    import StudentMain from './components/views/student/template/Main.vue'
    import User from './api/User'
    import authenticate from './store/auth'
    // import Auth from './api/Provider'
    // import {globalStore} from './app'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                sidebarOpen: false,
                isSearchBoxOpen: false,
            };
        },
        components: {
            LoginHeader,
            StudentHeader,
            StudentMain
        },
        computed: {
            ...mapGetters('user',[
                'isLoggedIn',
                'isLoading'
            ]),
            role: function() {
                return authenticate.getters['authRole']
            }
        },
        methods: {

        },
        mounted() {
            this.$store.commit('user/LOGIN', !!localStorage.getItem('token'))
            console.log(this.role)
        }
    }
</script>

<style lang="scss" scoped>

</style>
