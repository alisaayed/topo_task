import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/',
    name: 'welcome',
    component: () => import('../components/welcome.vue'),
    
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/dashboard.vue'),
    children : [
      {
        path: '/Users',
        name: 'Users',
        component: () => import('../components/Users.vue')
        
      },
      {
        path: '/Groups',
        name: 'Groups',
        component: () => import('../components/Groups.vue')
      }
    ]

  },
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
