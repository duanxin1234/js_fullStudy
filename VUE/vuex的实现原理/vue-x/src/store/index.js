import Vue from 'vue'
import Vuex from "./myVuex"  //vuex 里面有个store类的

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  // computed 计算属性
  getters: {
    getCount: state => state.count * 100
  },
// 方法
  mutations: {
    reducecount: () => {
      
    }
  },
  actions: {
    getreducecount(context,num) {
      context.commit(reducecount,num)
}

  },
  modules: {
  }
})
