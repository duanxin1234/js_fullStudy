<template>
  <div class="app">
  <!-- 头部组件 -->
  <v-header></v-header>

  <router-view/>
  </div>
</template>

<script>
import vHeader from "@/components/v-header/v-header" ;
//index   可以自动取消
import  {getSeller} from "@/api/index.js"


export default {
  components:{
  vHeader
  },

  data() {
    return {
      seller:{}
    }
  },

  // 生命周期页面创造后
  created() {
    this._getseller()
  },


//方法
  methods: {
    _getseller(){
      getSeller({
        id:'1'
      }).then((seller)=>{
        console.log(seller);
      })
    }
  },

}
</script>

<style lang="stylus" scoped>


</style>