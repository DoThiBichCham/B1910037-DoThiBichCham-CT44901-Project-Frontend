import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      list_image:[],
      isAuth: false,
    }
  },
  mutations: {
    GET_LIST_IMAGE(state,data){
      state.list_image = data
    },
    UPDATE_AUTH(state,auth){
      state.isAuth = auth
    }
  },
  actions: {
    async getListImage({commit}){
     try{
      const response = await axios.get('http://localhost:3000/api/image')
     
      commit('GET_LIST_IMAGE',response.data)
     }catch(error){
      console.log('Loi action getListImage')
     }
    }
  }
})


export default store