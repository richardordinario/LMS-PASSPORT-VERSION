<template>
    <div>
        Home
    </div>
</template>

<script>
    import User from '../../../api/User'
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                user: state => state.auth.user
            })
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