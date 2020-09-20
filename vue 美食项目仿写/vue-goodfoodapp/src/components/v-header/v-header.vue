<template>
  <div class="header">
    <div class="content-warrper">
      <!-- 左中右布局 -->
      <!-- 左 -->
      <div class="head-portrait">
        <img
          width="64"
          height="64"
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1845442432,2642394481&fm=26&gp=0.jpg"
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
          <span class="name">粥品香坊</span>
        </div>

        <div class="middletext">蜂鸟专送/38分送达</div>

        <div class="undertext">
          <img
          width="25"
          height="15"
            src="./brand@2x.png"
            alt
          />
          <span>在线支付满28元减5</span>
        </div>
      </div>

      <!-- 右 -->
      <div class="rigthttext">
        <span class="header_number">5个</span>
      </div>
    </div>
  </div>
</template>






<script>
export default {









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
    .content-warrper
        position relative
        display flex
        align-items center
        padding 24px 12px  12px 20px
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

                   
</style>