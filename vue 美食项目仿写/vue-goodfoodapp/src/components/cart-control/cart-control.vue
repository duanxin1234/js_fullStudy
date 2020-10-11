<template>
  <div class="cart-control">
<!-- 减号-->
   <transition name="move" >
        <div class="cart-decrease" >
             <span class="inner icon-remove_circle_outline" @click="reduce" v-show="food.count>=1"></span>
         </div>
   </transition>
   <div class="div" v-show="food.count >=1">
    {{food.count }}
   </div>
    <!-- 加号-->
    <div class="cart-count">
    <span class="cart-add icon-add_circle" @click="add"></span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        food:{
            type:Object
        }
    },
data() {
    return {
        count:0
    }
},
methods: {
    add(event){
        if(! this.food.count){
            // 在food下面加个count 属性值 $set
            this.$set(this.food,'count',1)
        }else{
            this.food.count++
        }
        // console.log(event);
        this.$emit('add',event.target)
    },
    reduce(){
         if(! this.food.count){
            this.$set(this.food,'count',1)
        }else{
            this.food.count--
        }
    }
},

}
</script>

<style lang="stylus" scoped>
.cart-control
    display flex
    align-items center
    .cart-decrease
        display inline-block
        padding  6px
        opacity 1
        .inner
            display inline-block
            line-height 24px
            font-size  24px
            color blue
            transition all 0.4s linear 
            transform rotate(0)
            &.move-enter , &.move-leave-to
                opacity 0
                transform  translate3d(24px,0,0)
                .inner
                    transform rotate(180deg)
    .cart-count
        width 24px
        line-height 25px
        font-size 10px
        text-align center
        .cart-add
            display inline-block
            padding 6px
            line-height 25px
            font-size 24px
            color blue

        

            
        

        


</style>