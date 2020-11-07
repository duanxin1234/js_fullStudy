import { findIndex } from '@/common/debounce.js'

const state = {
    playList: [],
    currentIndex: -1,
    playing: false,
    full: false
}
const getters = {
    currentsong: state => state.playList[state.currentIndex] || {}
}

const mutations = {
    //设置播放列表
    setselectpalylist(state, playlist) {
        state.playList = playlist
    },
    // 设置播放音乐的顺序
    setselectpalyindex(state, index) {
        state.currentIndex = index
    },
    //设置是否全屏播放
    setselectpalyfull(state, status) {
        state.full = status
    },
    //设置当前正在播放的歌曲
    setselectpalying(state, status) {
        state.playing = status
    }
}
const actions = {
    selectpalysong({ commit, state }, song) {
        let playlist = state.playList.slice()
        let currentIndex = state.currentIndex
        // 查找当前播放列表中是否有此刻点击想要播放的歌
        let fpIndex = findIndex(playlist, song)
        if (fpIndex > -1) {
            currentIndex = fpIndex
        } else {
            playlist = [...playlist, song]
            currentIndex = playlist.length - 1
        }
        commit('setselectpalylist', playlist)
        commit('setselectpalyindex', currentIndex)
        commit('setselectpalyfull', true)
        commit('setselectpalying', true)
    }
}

export default {
    state,
    getters,
    mutations,
    actions

}