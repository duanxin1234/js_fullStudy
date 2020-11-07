const state = {
    cur: 0,  //歌曲id
    list: []  //歌单
},
const mutations = {
    queryDataM(state, payload) {
        let {
            id,
            data
        } = payload
        state.cur = id
        if (data) {
            state.list.push(data)
        }
    },

}
const actions = {
    queryDataA({ state, commit }, id) {
        let res = state.list.find(item => {
            return parseInt(item.id) === parseInt(id);

        })
        if (res) {
            commit('queryDataM', {
                id
            });
            return
        }
    }
}
export default {
    state,
    mutations,
    actions

}