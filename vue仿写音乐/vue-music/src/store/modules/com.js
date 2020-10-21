const state = {
    // 公共属性
    show: false,
    searchhistory:[]
}

const getters = {
    show: state => state.show,
    searchhistory: state=> state.searchhistory
}

const mutations = {
    test(state,status) {
        state.show=status
    },
    setdeletehistory(state, index) {
        
        state.searchhistory.splice(index,1)
    },
    setclearhistory(state) {
        state.searchhistory=[]
       
    },
    tests(state,item) {
        state.searchhistory=item
    }
}

const actions = {
    setshow(context,status) {
        context.commit('test',status)
    },
    deletehistory(context,index) {
        context.commit('setdeletehistory',index)
    },
    clearhistory(context) {
        context.commit('setclearhistory')
    },
    savetest({ commit, state }, query) {
        let searchhistory = [query, ...state.searchhistory.slice()]
        searchhistory = [...new Set(searchhistory)]
        commit('tests',searchhistory)
    }
}

export default {
    state,
    getters,
    mutations,
    actions


}