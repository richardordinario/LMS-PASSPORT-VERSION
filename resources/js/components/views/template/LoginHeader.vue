<template>
    <div>
        <header class="flex bg-orange-500 mb-10">
            <div class="container mx-auto">
                <div class="flex item-center justify-between px-4 py-4">
                    <div class="flex item-center">
                        <span class="text-white">LMS</span>
                    </div>
                <div class="flex item-center space-x-6">
                        <router-link to="/login"><a href="#" class="text-white">Login</a></router-link>
                        <router-link to="/register"><a href="#" class="text-white">Register</a></router-link>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>

</style>