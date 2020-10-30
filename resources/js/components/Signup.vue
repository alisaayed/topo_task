<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" v-model="name" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" v-model="password_confirmation" class="form-control form-control-lg" />
            </div>

            <button type="submit" @click.prevent="onSubmit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return   {
                
                    name : '',
                    email : '',
                    password : '',
                    password_confirmation : ''
                
            }
        },
        methods:{
            onSubmit(){
                const formdata = {
                    name : this.name,
                    email : this.email,
                    password : this.password,
                    password_confirmation : this.password_confirmation
                                    }
                console.log("on submit exec");
                axios.post('http://localhost:8000/api/register',formdata)
                .then((res)=>console.log(res.data.token))
                .catch((err)=>console.log(err));
            }
        }
        
    }
</script>