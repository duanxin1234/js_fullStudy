<template>
  <div class="header" @click.stop="show" >
    <div class="content-warrper">
      <!-- 左中右布局 -->
      <!-- 左 -->
      <div class="head-portrait">
        <img
          width="64"
          height="64"
          :src="seller.avatar"
          alt
        />
      </div>
      <!-- 中 -->
      <div class="middletext">
        <div class="uptext">
          <img
            width="20"
            height="10"
            class="img"
            src="./brand@2x.png"
            alt
          />
          <span class="name">{{seller.name}}</span>
        </div>

        <div class="middletext">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <!-- 判断是否存在seller.supports-->
        <div class="undertext" v-if="seller.supports"> 
       
      <!-- icon图标组件-->
           <img
            width="20"
            height="10"
            class="img"
            src="@/components/support-ico/support-ico/decrease_1@2x.png"
            alt
          />
          <span>{{seller.supports[0].description}}</span>
        </div>
      </div>

      <!-- 右 -->
      <div class="rigthttext">
        <span class="header_number" v-if="seller.supports">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 公告栏 -->
    <div class="notice">
    <img src="./bulletin@2x.png" width="15px"  height="15px" alt="">
    <span class="notice-title">{{seller.bulletin}}</span>
    <i class="icon-keyboard_arrow_right"></i>
    </div>


    <!-- 背景图片 -->
    <div class="bg">
    <img  width="100%"  height="100%" :src="seller.avatar" alt="">
    </div>

     <header-page :seller="seller" v-show="showpage" @hidden='hidden'></header-page>
  </div>

</template>






<script>
import headerPage from "@/components/headerpage/headerpage.vue" ;
export default {
components:{
  headerPage
  },
 
  //接收
props:{
   seller:{
      type:Object,
    default(){
      return{
      }
    }
   }
},

data() {
  return {
     showpage:false
    
  }
},

created() {
  setTimeout(() => {
    // console.log(this.seller);
    
  }, 1000);
},
methods: {
  show(){
    this.showpage=true
  },
  hidden(e){
    this.showpage=e
  }
},







};
</script>







<style lang="stylus" scoped>
@import '../../assets/common/stylus/mixin.styl'
@import  '../../assets/common/stylus/variable.styl'
.header
    overflow hidden
    position relative
    color $color-white
    background-color $color-backgroud-ss
    .bg
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        z-index -1
        filter blur(10px)
    .notice
        position relative
        background-color  $color-backgroud-sss
        display flex 
        text-align center
        padding 0 8px
        .notice-title
            margin-left  5px
            line-height 20px
            font-size 10px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis  


    .content-warrper
        position relative
        display flex
        align-items center
        padding 24px 12px  24px 20px
        .head-portrait
            flex 0 0 64px
            width 64px
            margin-right  16px
            img 
                border-radius 5px   

        .middletext
            .uptext
                margin-bottom 8px
                img
                    border-radius 2px
                    background-size 30px 18px
                    background-repeat no-repeat
                span 
                    font-weight 1000
                    margin-left 8px
            .middletext
                margin-bottom 8px
                line-height 12px
                font-size 12px  
            .undertext
                display flex
                align-items center
                img
                    border-radius 2px
                    background-repeat no-repeat
                span 
                  line-height 12px
                  font-size 10px  
                  text-align center  
        .rigthttext
            position absolute
            top 65px
            right 30px
            width 36px
            height 16px
            background-color $color-backgroud-ss
            border-radius 10px
            text-align center

            .header_number
                margin-left 5px
                line-height 5px
                font-size 5px
            .icon-keyboard_arrow_right
                font-size 5px
                line-height 5px
                   
</style>