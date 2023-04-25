<template>
    <section class="content-section bg-primary text-white">
        <div class="container px-4 px-lg-5 text-center">
            <!-- <h2 class="mb-4">The buttons below are impossible to resist...</h2>
            <a class="btn btn-xl btn-light me-4" href="#!">Click Me!</a> -->
            <a class="btn btn-xl btn-dark" @click="handlerClickLogout()">Logout</a>
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name:"CallToActionApp",
    methods:{
        handlerClickLogout(){
            this.delete_cookie('token')
            this.UPDATE_AUTH(false)
            this.$router.push({name: "login"})
        },
        delete_cookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
        ...mapMutations(['UPDATE_AUTH'])
    }
}
</script>

<style>

</style>