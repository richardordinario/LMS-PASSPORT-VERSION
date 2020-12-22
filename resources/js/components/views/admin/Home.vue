<template>
    <div v-if="role=='admin'">
        Admin Home
    </div>
</template>

<script>
    import authenticate from '../../../store/auth'

    export default {
        data() {
            return {
                role: null
            }
        },
        computed: {

        },
        mounted() {
            this.role = authenticate.state.role
        }
    }
</script>

<style lang="sass" scoped>

</style>
