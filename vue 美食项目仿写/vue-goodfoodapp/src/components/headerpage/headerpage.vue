<template>
 <transition name="fade">
  <div class="headerpage"  >
  <!-- 上中下布局 -->

<div class="mian">

<!-- 上 -->
  <div class="header">
  <span class="header-text">{{seller.name}}</span>
  <div class="header-star"> 
        <!-- 星星组件 -->
  </div>
  </div>

  <!-- 中 -->
  <div class="content">
  <div class="link-right"></div>
  <span class="content-text">优惠信息</span>
  <div class="link-left"></div>
   </div>
  <ul>
  <li class="content-info" v-for="(item,index) in seller.supports" :key="index">
  <!-- <support-ico></support-ico> -->
  <img src="../support-ico/support-ico/discount_1@2x.png" alt="">
  <span>{{item.description}}</span>
  </li>
  </ul>
 
<!-- 下 -->

<div class="buttom">
  <div class="link-right"></div>
  <span class="buttom-text">商家公告</span>
  <div class="link-left"></div>


</div>
<span class="buttomtext">{{seller.bulletin}}</span>
</div>
<!-- 图标 -->
<div class="icon">
<i class="icon-close" @click.stop="hidden"></i>
</div>
  
  </div>
 </transition>
</template>

<script>
// import supportIco from "@/components/support-ico/v-headicon.vue"
export default {
    comments:{
        // supportIco
    },
    props:{
   seller:{
      type:Object,
    default(){
      return{}
    }
   }
},
data() {
    return {
        // img:[
        //    "../support-ico/support-ico/decrease_1@2x.png",
        //    "../support-ico/support-ico/discount_1@2x.png",
        //    "../support-ico/support-ico/guarantee_1@2x.png",
        //    "../support-ico/support-ico/invoice_1@2x.png",
        //    "../support-ico/support-ico/special_1@2x.png"

        // ]
        
    }
},

methods: {
    hidden(){
        
        this.$emit('hidden',false)
    }
},
}
</script>

<style lang="stylus" scoped>
@import '../../assets/common/stylus/mixin.styl'
@import  '../../assets/common/stylus/variable.styl'
.headerpage
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 100
    backdrop-filter blur(10px)
    background-color $color-backgroud-ss
    opacity 1
    &.fade-enter,&.fade-leave-to
        opacity 0
        background-color $color-backgroud
    &.fade-enter-active, &.fade-leave-active
        transition all 0.5s
    .icon  
      position relative
      width 50px 
      line-height 50px
      height 50px 
      margin-left 200px
      font-size 30px
        .icon-close 
            display inline-block
            width 100%
            line-height 50px
            height 100%
            font-size 30px 

    .mian
        margin 64px 64px 0 64px 
        padding-bottom 64px
        .header
            padding-left 30%
            .header-text
                margin-bottom 10px
            .header-star
                margin-top 10px
                margin-bottom 10px
        .content
             white-space nowrap
             overflow hidden
             display flex
             margin-top 40px
            .content-text
                margin 0 10px
            .link-right
                width  50%
                height 1px
                border 1px solid #000
                margin-top 4px
                
            .link-left
                display inline-block
                width  50%
                height 1px
                border 1px solid #000
                margin-top 4px
        .buttom
             white-space nowrap
             overflow hidden
             display flex
             margin-top 40px
             margin-bottom 10px
            .buttom-text
                margin 0 10px
             .link-right
                width  50%
                height 1px
                border 1px solid #000
                margin-top 4px 
            .link-left
                display inline-block
                width  50%
                height 1px
                border 1px solid #000
                margin-top 4px
        .buttomtext
            line-height 25px
            font-size 15px
            font-weight 1000

</style>