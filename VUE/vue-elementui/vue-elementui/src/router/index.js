import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import home from "../views/home.vue"
import user from "../views/user.vue"
import user2 from "../views/user2.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    // 路由里面的子路由 2级路由 在home里面生存
    children: [
      {
        path: "user", //2级路由 不需要加/
        component: user
      },
      {
        path: "user2", //2级路由 不需要加/
        component: user2
      }
    ]

  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
