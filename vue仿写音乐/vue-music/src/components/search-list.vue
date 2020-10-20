<template>
  <div class="search-list" v-show="searches.length">
     <ul class="serch-table">
       <li class="serch-item"  v-for="item in searches" :key="item">
              <span class="text">{{item}}</span>
                <i class="iconfont" @click.stop="Deleteone(item)">&#xe61a;</i>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
     props:{
    searches:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
data() {
    return {
        
    }
},
methods: {
    Deleteone(item){
        this.$emit('delete',item)
    }
},
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.eot');
  src: url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.woff') format('woff'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2127578_q0efvj5ylg.svg#iconfont') format('svg');
}
.serch-table
  .serch-item
        margin 13px 10px
        overflow hidden
        .text
           padding 1px 3px
           line-height 20px
           font-size 15px
           float left
           color black
           margin 0 6px
           color #666666
           background-color  #2f3054
           border-radius 6px
        .iconfont
              float right 
              margin 0 5px   
              color white
                    
          
</style>