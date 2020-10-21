import Vue from 'vue'
import VueRouter from 'vue-router'
const search =()=> import('@/views/search')
const recom = () => import('@/views/recom')
const singer = () => import('@/views/singer')
const rank = () => import('@/views/rank')


Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/recom',
    name: 'recom',
    component: recom
  },
  {
    path: '/singer',
    name: 'singer',
    component: singer
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
