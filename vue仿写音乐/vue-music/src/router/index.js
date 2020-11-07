import Vue from 'vue'
import VueRouter from 'vue-router'
const search =()=> import('@/views/search')
const recom = () => import('@/views/recom')
const singer = () => import('@/views/singer')
const rank = () => import('@/views/rank')
const rankinfo=()=> import('@/views/rankinfo.vue') 
const recominfo=()=> import('@/views/recominfo.vue') 
Vue.use(VueRouter)

const routes = [
  // 默认跳转页面
  {
    path: '/',
    redirect:'/recom'
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/recom',
    name: 'recom',
    component: recom,
   
  },
  {
    path: '/singer',
    name: 'singer',
    component: singer
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank,
  
  },
  {
    path: '/rankinfo/:id',
    name: 'rankinfo',
    component: rankinfo,
  
  },
    {
    path: '/recominfo/:id',
    name: 'recominfo',
    component: recominfo,
  
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
export default router
