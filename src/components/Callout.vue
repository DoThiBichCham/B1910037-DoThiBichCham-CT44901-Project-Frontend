<template>
    <section class="callout">
        <div class="container px-4 px-lg-5 text-center">
            <h2 class="mx-auto mb-5">
                Manager
                <em>Image</em>
                Your
            </h2>
            <!-- <input class="btn btn-primary btn-xl" type="file" id="formFileMultiple" multiple /> -->
            <input  type="file"
                    @change="uploadFile"
                    ref="file"
                    class="btn btn-primary btn-xl" id="exampleFormControlFile1">
                    <br>
                    <span v-if="error_image" class="text-danger">Vui lòng nhập ảnh</span>
                    <br>
            <button @click="handlerClickSubmit()" class="btn btn-sm btn-danger">Submit</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { mapActions } from "vuex"
import store from '@/store'
export default {
    name:"CalloutApp",
    data(){
        return{
            image:"",
            error_image:false
        }
    },
    methods:{
        uploadFile() {
            this.image = this.$refs.file.files[0];
            console.log(this.image)
        },
        validate(){
            if(this.image.name == undefined){
                this.error_image = true
            }else{
                this.error_image = false
            }
        },
        handlerClickSubmit(){
            this.validate()
            axios.post('http://localhost:3000/api/upload', { file: this.image },
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        })
            .then(response=>{
                if(response.status == 200){
                    const data = {
                        name : this.image.name
                    }
                    axios.post('http://localhost:3000/api/image',data)
                        .then(response=>{
                            if(response.status == 200){
                                this.image = ""
                                this.getListImage()
                            }
                        })
                        .catch(error=>{
                            console.log(error)
                        })
                }
            })
            .catch(error=>{
                console.log(error)
            })
        }
        ,
        ...mapActions(['getListImage']),
        getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
        },
    },
    created(){
        this.getListImage()
        const token = this.getCookie('token')
        let isAuth = false
        if(token != ""){
            isAuth = true
        }
        store.commit('UPDATE_AUTH', isAuth)
    }
}
</script>

<style>

</style>