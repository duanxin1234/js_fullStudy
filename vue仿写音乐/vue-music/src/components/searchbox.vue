<template>
  <div class="search-box">
    <div class="boxclocor">
        <i class="iconfont">&#xe616;</i>
        <!--v-model 双向数据绑定 -->
        <input ref="query"  class="input" type="text" :placeholder="placeholder" id="" v-model="query"> 
        <i class="iconfont box" v-show="query"  @click="onDelete">&#xe61a;</i>
    </div>
  </div>
</template>

<script>
import {debounce} from "@/common/debounce.js"
export default {
    props:{
        placeholder:{
            type:String,
            default:"搜索歌曲，歌手"
        },
      
    },
  data() {
      return {
        //   空字符也是false
          query:''
      }
  }, 
  methods: {
      onDelete(){
          this.query=''
      },
    //   失去聚焦 bulr
      bulr(){
          this.$refs.query.bulr()
      },
      setquery(query){
          this.query=query
      }

  }, 

// 监听input 里面是否实时变化 
// watch: {
//    query(newquery,oldquery){
//      console.log(newquery,oldquery);  
    
//    } 
// },
// created(){
//    debounce(this.query,300)
// }

created() {
    this.$watch('query',debounce((newquery,oldquery)=>{
       
        // 不在子组件上发起接口请求 在父级上
         this.$emit('query',newquery)  
        console.log(newquery,oldquery)
    },300))
  
},
}
</script>

<style lang="stylus" scoped>
@import '../assets/function.styl';
@font-face {
  font-family: 'iconfont';  /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.eot');
  src: url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.woff') format('woff'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.svg#iconfont') format('svg');
}
.search-box
    
    align-items center
    height px2rem(36)
  
    margin px2rem(20) px2rem(20)
    
    .boxclocor
        align-items center 
        display flex
        background #2f3054
        border-radius 10px
        .iconfont
            margin px2rem(10) px2rem(2) 
            font-size 18px
            color #6b6a6a
            line-height px2rem(20)  
            background #2f3054
        .input
            flex 1
            margin px2rem(10) px2rem(5)
            line-height px2rem(20)
            background #2f3054
            color #ffffff
            font-size 14px
            outline 0
        .box
            margin-right px2rem(4)
        
    

</style>