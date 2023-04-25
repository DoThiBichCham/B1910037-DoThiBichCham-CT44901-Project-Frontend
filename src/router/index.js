import { createRouter, createWebHistory } from 'vue-router'
import mainLayout from '../layouts/mainLayout.vue'


import HomePage from '../views/main/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const routes = [
    { 
      path: '/home', 
      component: HomePage,
      name: "home",
      meta: {
        layout: mainLayout
      }
    },
    { 
      path: '/', 
      component: LoginPage,
      name: "login",
    },
    { 
      path: '/register', 
      component: RegisterPage,
      name: "register"
    }
  ]



  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })


  

export default router