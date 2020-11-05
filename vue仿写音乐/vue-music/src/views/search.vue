<template>
  <div class="search">
    <div class="search-box-warrper">
      <search-box @query='onquery'></search-box>
      <hr/>
      <!-- 热门搜索-->
      <div class="shortcut-wrapper" ref='shortcutWrapper' v-show="!query">
          <scroll class="sortc" ref="shortcut">

              <div class="hot-key">
                  <h1 class="title">热门搜索</h1>
                  <ul class="ul">
                    <li class="item" v-for="(item,index) in hotkey" :key="index">
                      <span>{{item.first}}</span>
                    </li>
                  </ul>
              </div>
              <div class="search-history" v-show="searchhistory.length" >
                 <h1 class="title">
                  <span>搜索历史</span>
                  <i class="iconfont" @click="clearhistory">&#xe65d;</i>
                 </h1>
                 <!-- 搜索历史 组件 -->
                <search-list :searches='searchhistory'  @delete='deletehistory'></search-list>
              </div>
          </scroll>
      </div>
      
      <!-- 搜索栏搜索结果列表组件 -->
      <div class="search-result" v-show='query' >
          <search-result :query='query' @select="saveselect"></search-result>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from '@/components/scroll.vue'
import searchBox from '@/components/searchbox.vue'
import {searchMixin} from '@/common/mixinx.js'
import api from '@/api/index.js'
import searchList from '@/components/search-list.vue'
import {mapGetters,mapActions} from "vuex"
import searchResult from '@/components/search-result.vue'
export default {
  // 代码扩展minxins
  mixins:[searchMixin],
 
  data() {
    return {
      hotkey:[],
      searchmessage:true,
      
    
    }
  },
  watch: {
    query(newquery){
      if(newquery){
          setTimeout(() => {
            // 父组件直接调用子组件
            this.$refs.shortcut.refresh()
          }, 20);
      }
    }
  },
  computed: {
    ...mapGetters(['searchhistory'])
  },
  components:{
    searchBox,
    scroll,
    searchList,
    searchResult
  },
  methods: {
    ...mapActions(['deletehistory','clearhistory','savetest','selectpalysong']),
    //获取热门搜索
   _getHotky(){
      api.HotSearchKey().then((res)=>{
        // console.log(res);
        this.hotkey=res.result.hots.slice(0,10)

      })
   },
   saveselect(item){

     //保存历史记录
    console.log(item,item);
     this.savetest(this.query)
     //播放音乐
     this.selectpalysong(item)
   }
   
  
  

  },
  created() {
    this._getHotky()
   
  },
}
</script>

<style  lang="stylus" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.eot');
  src: url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.woff') format('woff'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.svg#iconfont') format('svg');
}
hr
  border-bottom 1px solid black
.shortcut-wrapper
    .sortc
      .hot-key
        .title
          font-weight 1000
          margin 15px 10px 
          color black 
        .ul
          .item
            text-align center
            display inline-block
            margin 5px 10px
            line-height 25px
            font-size 15px
            background-color  #2f3054
            color #666666
            border-radius 8px
            span 
              margin 0 3px
      .search-history
        .title
          overflow hidden
          margin-top 20px
          
          span  
            float left 
            font-weight 1000
            margin 15px 10px
            color black 
          .iconfont
            float right  
            font-weight 1000
            margin 15px 10px
            line-height 18px
            font-size 18px     
      
</style>