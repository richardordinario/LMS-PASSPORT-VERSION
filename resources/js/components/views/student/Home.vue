<template>
    <div>
        Home
        <h1>{{user.name}}</h1>
        <h1></h1>
        <router-link to="/subject">Subject</router-link>
        <router-link to="/account">Account</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import User from '../../../api/User'
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState('user',{
                user: state => state.auth.user
            }),
        },
        mounted() {
            User.auth().then(res => {
                this.$store.commit('user/AUTH_USER', res.data)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
