<template>
    <div>
        Student Home
    </div>
</template>

<script>
    import User from '../../../api/User'
    import authenticate from '../../../store/auth'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                role: null,
                isSidebarOpen: true,
                isSearchBoxOpen: false
            }
        },
        computed: {
            ...mapState('user',{
                user: state => state.auth.user
            }),
        },
        methods: {
            toggleSidbarMenu() {
                this.isSidebarOpen = !this.isSidebarOpen
            }
        },
        mounted() {
            User.auth().then(res => {
                this.$store.commit('user/AUTH_USER', res.data.data)
            }),
             this.role = authenticate.state.role
        }
    }
</script>

<style lang="scss" scoped>

</style>
