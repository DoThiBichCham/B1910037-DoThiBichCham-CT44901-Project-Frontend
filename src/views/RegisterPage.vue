<template>
    <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <h5>Register</h5>
                <!-- Username input -->
                <div class="form-outline mb-4">
                    <input v-model="user.username" type="text" class="form-control form-control-lg"/>
                    <label class="form-label" for="form3Example3">Username</label>
                  </div>
      
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input v-model="user.email" type="email" class="form-control form-control-lg"/>
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-3">
                  <input v-model="user.password" type="password" id="form3Example4" class="form-control form-control-lg"
                   />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
      
               
      
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button @click="handlerClickRegister()" type="button" class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Are ready account? <a @click="handlertGoLogin()"
                      class="link-danger">Login</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </section>
</template>

<script>
import axios from 'axios'
export default {
    name:"RegisterPage",
    data(){
      return {
        user: {
          username: "",
          email: "",
          password: ""
        }
      }
    },
    methods:{
      handlerClickRegister(){
        const data = {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password
        }
        axios.post('http://localhost:3000/api/auth/register',data)
          .then(response=>{
            if(response.status == 200){
              this.$router.push({name:'login'})
            }
          })
          .catch(error=>{
            console.log(error)
          })
      },
      handlertGoLogin(){
        this.$router.push({name: "login"})
      }
    }
}
</script>

<style scoped>
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>