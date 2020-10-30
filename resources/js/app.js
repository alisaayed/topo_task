window.Vue = require('vue');

import App from './App.vue';
import router from './router';
import store from "./store/store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});