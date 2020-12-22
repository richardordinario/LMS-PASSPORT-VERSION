<template>
    <div>
        <header class="flex bg-orange-500 mb-10">
            <div class="container mx-auto">
                <div class="flex item-center justify-between px-4 py-4">
                    <div class="flex item-center">
                        <span class="text-white">LMS</span>
                    </div>
                <div class="flex item-center space-x-6">
                        <a href="#" @click="logout" class="text-white">Logout</a>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import User from '../../../../api/User'
    import authenticate from '../../../../store/auth'

    export default {
        methods: {
            logout() {
                User.logout().then(res => {
                    localStorage.removeItem('token')
                    this.$store.commit('user/LOGIN', false)
                    authenticate.commit('AUTH_ROLE', null)
                    this.$router.push('/login')
                })
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>
