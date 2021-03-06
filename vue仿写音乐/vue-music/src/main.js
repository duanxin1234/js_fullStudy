import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import '../css/reset.styl'
import '../css/plugin.styl'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';



import { toast } from "@/common/plugin.js"
Vue.use(toast)
Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,  //this.$route this.$router
  store,   //this.$store
  render: h => h(App)
}).$mount('#app')
