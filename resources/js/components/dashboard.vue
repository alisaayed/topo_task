<template>
    <div>
     <br><br>   
    <b-button v-b-toggle.sidebar-no-header>Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item @click="hide"><router-link to="/Users">Users</router-link></b-nav-item>
              <b-nav-item @click="hide"><router-link to="/Groups">Groups</router-link></b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
    
    
}
</script>

<style  scoped>

</style>