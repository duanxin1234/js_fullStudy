<template>
  <div class="header">
    <div class="header-left">
         <i class="iconfont" @click.stop="upmenu">&#xe672;</i>
    </div>
  <div class="header-content">magicmusic</div>
    <div class="header-right">
        <i class="iconfont">&#xe6dd;</i>
    </div>
  </div>
</template>

<script>

export default {


methods: {

    upmenu(){
        this.$emit("showmenu",false)
    }
},


}
</script>

<style  lang="stylus" scoped>
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

.header
    display flex
    justify-content space-between
    margin px2rem(10)
    
    .header-left
        .iconfont
            display inline-block
            width px2rem(50)
            height px2rem(50)
            line-height px2rem(50)
            font-size px2rem(30)
         
    .header-content
        
        height px2rem(50)
        line-height px2rem(50)
        font-size px2rem(18) 
        font-weight 1000

    .header-right      
        .iconfont
            display inline-block
            width px2rem(50)
            height px2rem(50)
            line-height px2rem(50)
            font-size px2rem(40)
           

</style>