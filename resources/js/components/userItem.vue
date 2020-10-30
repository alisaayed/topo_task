<template>
    <div>
      <div v-if="!editMode">
  <b-list-group horizontal>
    <b-list-group-item>{{email}}</b-list-group-item>
    <b-list-group-item @click="deleteUser"><button><b-icon icon="x-square-fill" variant="danger"></b-icon></button></b-list-group-item>
    <b-list-group-item @click="editUser"><button><b-icon icon="pencil-square" variant="success"></b-icon></button></b-list-group-item>
  </b-list-group>
      </div>
      <div v-if="editMode">
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-input
      :id="String(id)"
      v-model="emailUpdated"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Email"
          ></b-input>
          <b-button @click="save" variant="primary">Save</b-button>
          <b-button @click="editMode = false;" variant="danger">Cancel</b-button>
        </b-form>
      </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        editMode : false,
        emailUpdated : this.email
      }
    },
    props :{
        id : Number,
        email : String
    },
    computed : {
        getToken (){return this.$store.getters.token;},
        
    },
    methods : {
      deleteUser(){
          this.$emit('delete-item');
          axios.delete('http://localhost:8000/api/user/'+this.id,{headers:{
            'Authorization':`Bearer ${this.getToken}`
        }}).then();
      },
      editUser(){
        this.editMode=true;
      },
      save(){
        this.editMode = false;
        this.$emit('update',this.emailUpdated);
      },
      
    }
}
</script>