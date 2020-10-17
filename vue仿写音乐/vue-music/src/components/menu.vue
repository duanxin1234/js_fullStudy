<template>
  
    <transition  >
        <div class="menu">
            <div class="header">
                <div class="header-info">
                    <img class="img" src="../assets/1.jpg" alt="">
                    <div>
                        <span class="name">DX</span>
                    </div>
                 </div>
              <ul class="ul">
                <li class="li"  @click="showtoast">
                    <router-link class="link" to="use">
                      <i class="iconfont">&#xebac;</i>
                      <span class="name-info" >个人中心</span>
                    </router-link>
                      <router-link class="link" to="musicvocie">
                      <i class="iconfont">&#xe615;</i>
                      <span class="name-info">音效调整</span>
                    </router-link>
                      <router-link class="link" to="timeoff">
                      <i class="iconfont">&#xe7fa;</i>
                      <span class="name-info">定时关闭</span>
                    </router-link>
                      <router-link class="link" to="listen">
                      <i class="iconfont">&#xe610;</i>
                      <span class="name-info">听歌识区</span>
                    </router-link>
                      <router-link class="link" to="help">
                      <i class="iconfont">&#xe64a;</i>
                      <span class="name-info">帮助</span>
                    </router-link>
                      <router-link class="link" to="setup">
                      <i class="iconfont">&#xe611;</i>
                      <span class="name-info">设置</span>
                    </router-link>
                </li>
              </ul>
            </div>
            <div class="obscure" @click="obscure"></div>
        </div>
        
    </transition>
 
</template>

<script>

export default {
 data() {
     return {
        
     }
 },
 methods: {
     obscure(){
         this.$emit("noobscure",false)
     },
     showtoast(){
    // 难点   手写 轻提示框架 sss
     this.$toast('该功能暂未开放...')
     }
 },
 computed: {
     
 },
}
</script>

<style lang="stylus" scoped>
@import '../assets/function.styl';
@font-face {
  font-family: 'iconfont';  /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_bps6g3ol79e.eot');
  src: url('//at.alicdn.com/t/font_2127578_bps6g3ol79e.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2127578_bps6g3ol79e.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2127578_bps6g3ol79e.woff') format('woff'),
  url('//at.alicdn.com/t/font_2127578_bps6g3ol79e.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2127578_bps6g3ol79e.svg#iconfont') format('svg');
}

.menu
    position absolute
    top 0
    bottom 0
    left 0
    z-index 101
    
    width px2rem(200)
    background-color black
    
    .obscure
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        height 100%
        margin-left 200px
        
        background rgba(0,0,0,0.4)
        
        z-index 100
    .header
        margin  40px auto
        width  px2rem(150)
        .header-info
           
            margin 0 auto
            text-align center
            .img 
                display inline-block
                width px2rem(80)
                height px2rem(80)
                font-size px2rem(80)
                border-radius 50%
            div
                 .name   
                    font-size px2rem(20)
                    line-height px2rem(20)
                    color white
    .ul 
        .li
            .link 
                display flex
                margin-top px2rem(30)
                margin-left px2rem(20)
                .iconfont
                    font-size px2rem(18)
                    display inline-block
                    margin-right  px2rem(10) 
                    color white
                .name-info
                    font-size px2rem(15)
                    line-height px2rem(18)
                    color white   
                
</style>