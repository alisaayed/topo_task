<template>
<div >
    <router-link to='/signup'><b-button variant="outline-primary">Add user</b-button></router-link> 
    <h1>Users List</h1>
    <div v-for="(item,index) in usersList" :key="item.id"> 
        <user-item  :id="item.id" 
                    :email="item.email" 
                    @delete-item="deleteItem(index)"
                    @update="updateItem($event,index)">
        </user-item>
     </div>
</div>
    
</template>

<script>
import userItem from './userItem.vue'
import axios from 'axios'
export default {
    created(){
        axios.get('http://localhost:8000/api/user',{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>this.usersList=res.data);
        
        
    },
    data(){
        return {
            
            usersList : [],
            
        }
    },
    computed : {
        getToken (){return this.$store.getters.token;}
    },
   components : {
       userItem
   } ,
   methods:{
       deleteItem($index){
           this.usersList.splice($index,1);
           
       },
       updateItem(event,index){
           this.usersList[index].email = event;
           axios.put('http://localhost:8000/api/user/'+this.usersList[index].id,
                      this.usersList[index],
                      {headers:{
                        'Authorization':`Bearer ${this.getToken}`,
                        'Content-Type': 'application/json'
                  }}).then((res)=>console.log(res));
           
       }
   }
    
}
</script>

<style scoped>

</style>