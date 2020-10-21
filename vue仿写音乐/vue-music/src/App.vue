<template>
  <div id="app" >
   <Header @showmenu="showmenu"></Header>
  <!-- 弹出菜单组件 -->
   <Menu v-show="show" @noobscure='reduce'></Menu>
   <!-- 标签栏table -->
    <Table></Table>
<!-- keep-alive 缓存页面 -->
  <keep-alive> 
    <router-view/>
  </keep-alive>
    <!-- 全局播放音乐组件 -->
    <Play></Play>
  </div>
</template>

<script>
import Header from "@/components/header.vue"
import Menu from "@/components/menu.vue"
import Table from '@/components/table.vue'
import Play from '@/components/play.vue'

export default {
  data() {
    return {
      show:false
    }
  },
  components:{
    Header,
    Menu,
    Table,
    Play
  },
  methods: {
    showmenu(){
      this.show=true
    },
    reduce(){
      this.show=false
    }
  },
 
}
</script>


<style lang="stylus" scoped>
*
  margin 0
  padding 0
#app
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  background-image linear-gradient(#87CEFA, #6B238E )
  overflow hidden
  

</style>
