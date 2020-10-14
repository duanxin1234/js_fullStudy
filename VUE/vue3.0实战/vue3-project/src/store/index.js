import { createStore } from 'vuex'
import * as types from "./action-type"


export default createStore({
      state: {
        planlist:[]
  },
  getters: {
    alltime: () => {
      return 0
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
