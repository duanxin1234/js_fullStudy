import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../css/reset.styl'
import '../css/plugin.styl'

import {toast} from "@/common/plugin.js"
Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
