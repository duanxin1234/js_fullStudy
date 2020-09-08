import vue from "vue"
import vuex from "vuex"

vue.use(vuex)

const state = {
    count: 1
}

const mutations = {
    // 同步方法
    add(state) {
        state.count++
    },
    reduce(state) {
        state.count--
    }
}
const getters = {
    count: (state) => {
        return state.count += 100
    }
}
const actions = {
    // 异步方法，
    addAction(context) {
        setTimeout(() => {
            context.commit('add')
        }, 2000);
        console.log("xxx");
    }
}
const moduleA = {
    state,
    mutations,
    getters,
    actions
}
const moduleB = {
    state: {},


}
export default new vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})