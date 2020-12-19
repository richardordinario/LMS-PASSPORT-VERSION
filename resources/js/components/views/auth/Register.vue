<template>
    <main class="sm:container sm:mx-auto sm:max-w-lg">
        <div class="w-full">
            <section class="flex flex-col bg-white shadow-lg rounded-b-md">
                <header class="bg-gray-700 border-b text-gray-200 py-4 rounded-t-md px-6 font-bold">
                    Register Page
                </header>
                <form class="w-full space-y-4 px-10 py-6" @submit.prevent="register">
                    <div class="flex flex-wrap">
                        <label for="" class="block text-gray-700 text-md font-bold mb-2 sm:mb-4">
                            Name
                        </label>
                        <input type="text" class="border py-2 px-2 rounded-md w-full"  v-model="form.name">
                    </div>
                    <div class="flex flex-wrap">
                        <label for="" class="block text-gray-700 text-md font-bold mb-2 sm:mb-4">
                            Email
                        </label>
                        <input v-model="form.email" type="email" class="border py-2 px-2 rounded-md w-full">
                    </div>
                    <div class="flex flex-wrap">
                        <label for="" class="block text-gray-700 text-md font-bold mb-2 sm:mb-4">
                            Password
                        </label>
                        <input v-model="form.password" type="password" class="border py-2 px-2 rounded-md w-full">
                    </div>
                    <div class="flex flex-wrap">
                        <label for="" class="block text-gray-700 text-md font-bold mb-2 sm:mb-4">
                            Confirm Password
                        </label>
                        <input v-model="form.password_confirmation" type="password" class="border py-2 px-2 rounded-md w-full">
                    </div>
                     <div class="flex flex-wrap">
                        <button type="submit"
                            class="w-full select-none whitespace-no-wrap p-2 rounded-md
                            text-base leading-normal no-underline text-gray-100 bg-blue-500
                            hover:bg-blue-700 sm:py-2">
                                Register
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </main>
</template>

<script>
    import User from '../../../api/User'

    export default {
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },
                errors: []
            }
        },
        methods: {
            register() {
               User.register(this.form).then(res => {
                   this.$router.push('/login')
               }).catch(err => {
                   this.errors = err.response.data.errors
               })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>