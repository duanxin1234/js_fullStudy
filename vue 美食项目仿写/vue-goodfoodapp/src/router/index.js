import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: () => import('@/views/goods.vue')
  },
  {
    path: '/discuss',
    name: 'discuss',
    component: () => import('@/views/discuss.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
