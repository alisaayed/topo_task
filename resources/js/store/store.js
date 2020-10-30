import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        is_logged : false,
        is_admin : false,
        token : ''
  
    },
    mutations: {
        switchIsLogged:(state)=>{
            state.is_logged = !state.is_logged;
        },

        switchIsAdmin: (state,payload)=>{
            state.is_admin = !state.is_admin&&payload;
        },

        setToken : (state,payload)=>{
            state.token = payload ;
        }
  
    },
    actions: {
  
    },
    getters: {
        is_admin : state => state.is_admin ,
        is_logged : state => state.is_logged,
        token : state => state.token
    }
  })