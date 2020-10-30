<template>
    <div>
        <div v-if='!$store.getters.is_logged' class="vue-tempalte">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" @click.prevent="onSubmit" class="btn btn-dark btn-lg btn-block">Sign In</button>

        </form>
    </div>
    <h1 v-if='$store.getters.is_logged'>You are Logged in</h1>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                email : '',
                password : ''
            }
        },
        methods: {
            onSubmit(){
                const formdata = {
                    email : this.email,
                    password : this.password,
                    password_confirmation : this.password
                                    }
                
                axios.post('http://localhost:8000/api/login',formdata)
                .then((res)=>{  this.$store.commit('switchIsLogged');
                                this.$store.commit('switchIsAdmin',Boolean(res.data.user.is_admin));
                                this.$store.commit('setToken',res.data.token);})
                .catch((err)=>console.log(err));
            }
        }
    }
</script>