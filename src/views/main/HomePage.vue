<template>
    <section class="content-section" id="portfolio">
        <div class="container px-4 px-lg-5">
            <div class="content-section-heading text-center">
                <h3 class="text-secondary mb-0">Portfolio</h3>
                <h2 class="mb-5">Recent Projects</h2>
            </div>
            <div class="row gx-0">
                <div v-for="image in list_image" :key="image._id" class="col-lg-6">
                    <a class="portfolio-item" href="#!">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="h2">{{ image.name }}</div>
                                <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                                <button @click="handlerDelete(image._id)" class="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                        <img class="img-fluid" :src="'http://localhost:3000/images/'+image.name" alt="..." />
                    </a>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
import store from '@/store'
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name:"HomePage",
    computed:{
        list_image(){
            return store.state.list_image
        }
    },
    methods:{
        handlerDelete(id){
            axios.delete('http://localhost:3000/api/image/'+id)
                .then(response=>{
                    if(response.status == 200 ){
                        this.getListImage()
                    }
                })
        },
        ...mapActions(['getListImage'])
    }
}
</script>

<style>

</style>