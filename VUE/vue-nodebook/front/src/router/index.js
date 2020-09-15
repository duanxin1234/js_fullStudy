import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarNotes',
    component: () => import("@/views/StarNotes.vue"),
    meta: {
      title: '舔狗日记'
    },
  },

    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: () => import("@/views/StarBanner.vue"),
     
  },
    
  {
    path: '/starlogin',
    name: 'starlogin',
    component: () => import("@/views/starlogin.vue"),
   
} 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
