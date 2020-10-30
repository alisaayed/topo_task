<template>
    <div>
        <div v-if="!switchView">
        <b-button @click="addGroup" variant="outline-primary">Add Group</b-button>
        <b-input
            v-model="groupName"
            class="mb-2 mr-sm-2 mb-sm-0"
             placeholder="Group Name"
          ></b-input>
        <h1>Groups List</h1>
        <b-list-group>
        
            <b-list-group-item button v-for="(item,index) in groupsList" @click="viewGroup(index)" :key="item.id">
                {{item.name}} 
                <b-button @click="deleteGroup(index)"><b-icon icon="x-square-fill" variant="danger"></b-icon></b-button>
            </b-list-group-item>
        </b-list-group>
        </div>
        <div v-if="switchView" >
            <h1>{{groupsList[groupIndex].name}}</h1>
            <b-list-group>
               <b-list-group-item v-for="(item,index) in usersInGroup" :key="item.id">
                   {{item.email}}
                   <b-button @click="deleteUserFromGroup(index)"><b-icon icon="x-square-fill" variant="danger"></b-icon></b-button>
                   </b-list-group-item> 
            </b-list-group>
            <br><br>
            <h2>add user</h2>
            <b-form-select v-model="selected" :options="getUsersNotiN"></b-form-select>
            <b-button @click="addUserToGroup">Add user</b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            groupsList : [],
            switchView : false,
            groupName:'',
            groupIndex : 0,
            usersInGroup :[],
            allUsers : [],
            selected : undefined

        }
    },
    computed : {
        getToken (){return this.$store.getters.token;},
        getUsersNotiN(){return this.allUsers
        .filter(x=>!this.getUsersId.includes(x.id))
        .map(item => ({value : item.id, text : item.email}))
        },
        getUsersId(){return this.usersInGroup.map(x=>x.id)},
        getUserSelceted(){return this.getUsersNotiN.find}
    },
    created(){
        axios.get('http://localhost:8000/api/group',{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>this.groupsList=res.data);
    },
    methods : {
        addGroup(){
            axios.post('http://localhost:8000/api/group',{name : this.groupName},{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>{this.groupsList.push(res.data);this.groupName=''});
        },
        deleteGroup($index){
            axios.delete('http://localhost:8000/api/group/'+this.groupsList[$index].id,{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>{this.groupsList.splice($index,1)});
        },
        viewGroup($index){
            this.switchView = true;
            this.groupIndex = $index;
            //
            axios.get('http://localhost:8000/api/group/'+this.groupsList[$index].id+'/user',{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>this.usersInGroup=res.data.map(item=>({ id : item.id, email : item.email })));
            //
            axios.get('http://localhost:8000/api/user',{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>this.allUsers=res.data.map(item=>({ id : item.id, email : item.email })));
        },
        deleteUserFromGroup($index){
             axios.delete('http://localhost:8000/api/group/'+this.groupsList[this.groupIndex].id+'/user/'+this.usersInGroup[$index].id,{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>{this.usersInGroup.splice($index,1)});
        },
        addUserToGroup(){
            axios.put('http://localhost:8000/api/group/'+this.groupsList[this.groupIndex].id+'/user/'+this.selected,{},
            {headers:{
            'Authorization':`Bearer ${this.getToken}`,
            'Content-Type': 'application/json'
        }}).then((res)=>{axios.get('http://localhost:8000/api/group/'+this.groupsList[this.groupIndex].id+'/user',{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then((res)=>this.usersInGroup=res.data.map(item=>({ id : item.id, email : item.email })));});
        }
        
    }
}
</script>