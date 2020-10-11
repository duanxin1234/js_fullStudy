<template>
<!--底部购物车 -->
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalcount>0}">
            <i class="icon-shopping_cart"  :class="{'highlight': totalcount>0}" ></i>
          </div>
          <div class="num">
            <span class="bubble">{{totalcount}}</span>
          </div>
        </div>
      </div>
     <div class="price" :class="{'highlight': totalcount>0}" >¥{{totalprice}}</div>
    <div class="desc">另需配送费¥ {{deliveryprice}} 元</div>
        
      <div class="content-right">
    
        <div class="pay" :class="{'enough': totalprice>=minprice}" @click="pay" >{{priceDifference}}</div>

      </div>
    </div>
    <div class="ball-container">
      <div v-for="(ball,index) in balls" :key="index">
          <transition  @before-enter='beforejump' @enter="jumping" @after-enter="afterjump">
              <div class="ball" v-show="ball.show">
                <div class="inner inner-hook"></div>
              </div>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props:{
        selectfoods:{
            type:Array,
        },
          deliveryprice:{
            type:Number,
        },
           minprice:{
            type:Number,
        },

    },
    data() {
      return {
        balls:[
          {show:false},
          {show:false},
          {show:false},
          {show:false},
          {show:false},
           {show:false},
          {show:false},
          {show:false},
          {show:false}
        ],
        jumpballs:[]
      }
    },
computed: {
    totalcount(){
        let count=0
        this.selectfoods.forEach((food)=>{
            count +=food.count
        })
        return count 
    },
    totalprice(){
         let price=0
        this.selectfoods.forEach((food)=>{
            price +=food.price*food.count
        })
        return price
    },
    priceDifference(){
        if(this.totalprice === 0){
            return `￥${this.minprice}元起送`
        }else if(this.totalprice< this.minprice){
            let diffprice= this.minprice-this.totalprice
            return `还差${diffprice}元起送`
        } else{
            return "去结算"
        }
       
    }

},
created() {
 
},

methods: {
    pay(){
      if(this.totalprice <this.minprice ){
          return  
      } else{
       this.$createDialog({
        type: 'alert',
        title: '支付',
        content: `你需要支付${this.totalprice}元`,
        
      }).show()
      }
    },
    jump(el){
      // console.log(el);
  for (let i = 0; i < this.balls.length; i++) {
          const ball=this.balls[i]
          if (!ball.show ) {
            ball.show=true
            ball.el=el
            this.jumpballs.push(ball)
            return 
          }
        
      }
    },
    beforejump(el){
      console.log(el);
    let count=this.balls.length
    while(count--){
        // 拿到在下落时最后一个球
      const ball=this.jumpballs[this.jumpballs.length-1]
     if(ball.show){
        // 获取几何信息
      const rect=ball.el.getBoundingClientRect();
      
      // console.log(rect);

      // x y是等下小球要平移的量
      const x=rect.x-32
      const y=-(window.innerHeight-rect.y-22)


    el.style.display=''
    el.style.transform=`translate3d(0,${y}px,0)`
    el.style.webkitTransform=`translate3d(0,${y}px,0)`
    const inner=el.getElementsByClassName('inner-hook')[0]
    inner.style.transform=`translate3d(${x}px,0,0)`
    inner.webkitTransform=`translate3d(${x}px,0,0)`
      // console.log(el,x,y ,inner);
     }
  
    }
    },

    jumping(el,done){
      // console.log(el,done);
    el.style.transform=`translate3d(0,0,0)`
    el.style.webkitTransform=`translate3d(0,0,0)`
    const inner=el.getElementsByClassName('inner-hook')[0]
    inner.style.transform=`translate3d(0,0,0)`
    inner.webkitTransform=`translate3d(0,0,0)`
    el.addEventListener('transitionend',done)
    }, 
    // sa 执行完下落后消失
    afterjump(el){
      const  ball=this.jumpballs.shift()
      if(ball){
        ball.show=false
        el.style.display='none'
      }
    }
},
    // jump(el){
    //   for (let i = 0; i < this.balls.length; i++) {
    //       const ball=this.balls[i]
    //       if (!ball.show ) {
    //         ball.show=true
    //         ball.el=el
    //         this.jumpballs.push(ball)
    //         return 
    //       }
        
    //   }
    // },
    // beforejump(el){
    //   const ball=this.jumpballs[this.jumpballs.length-1]
    //   const rect=ball.el.getBoundingClientRect();
    //   console.log(rect);
    //   console.log(el);
    // },
    // jumping(){

    // },
    // afterjump(){

    // }



};
</script>

<style lang="stylus" scoped>

.shop-cart
    height: 100%
    .content
      display: flex
      background: rgba(7,17,27,1)
      font-size: 0
      color: grey
      .content-left
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background:  rgba(7,17,27,1)
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: black
            &.highlight
              background: blue
            .icon-shopping_cart
              line-height: 44px
              font-size: 25px
              color: grey
              &.highlight
                color: white
          .num
            position: absolute
            top: 0
            right: 0
            .bubble
              display inline-block
              padding 0 5px
              height 16px
              line-height 16px
              text-align center
              border-radius 16px
              font-family Helvetica
              font-weight 700
              font-size 12px
              color white
              background red
      .price
            display: inline-block
            vertical-align: top
            margin-top: 12px
            line-height: 24px
            padding-right: 12px
            box-sizing: border-box
            border-right: 1px solid rgba(255, 255, 255, 0.1)
            font-weight: 700
            font-size: 20px
            &.highlight
              color: white
     .desc
            display: inline-block
            vertical-align: top
            margin: 12px 0 0 12px
            line-height: 24px
            font-size: 10px
            color grey
      .content-right
        width 180px
        .pay
          margin-left 104px
          height: 48px
          line-height: 48px
          text-align: center
          font-weight: 700
          font-size: 10px
          &.not-enough
            background: grey
          &.enough
            background: green
            color: white
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: blue
          transition: all 0.4s linear

</style>