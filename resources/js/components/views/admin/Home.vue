<template>
    <div v-if="user">
        Admin Home
    </div>
</template>

<script>
    import authenticate from '../../../store/auth'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                role: null
            }
        },
        computed: {
            ...mapState('user',{
                user: state => state.auth.user
            }),
        },
        mounted() {
            this.role = authenticate.state.role
        }
    }
</script>

<style lang="sass" scoped>

</style>
