<template>
 <span class="support-ico" :class="iconcount" >

 </span>
</template>

<script>
export default {
name:'support-ico',
props:{
   size:{
       type:Number
   },
    type:{
        type:Number
    }
},
computed: {
    iconcount(){
        const classMap=["reduce","Discount","special","invoice","ensure"]
        return `icon-${this.size} ${classMap[this.type]}`
    }
},


}
</script>

<style lang="stylus" scoped>
@import '../../assets/common/stylus/mixin.styl'
.support-ico
    display inline-block
    background-repeat no-repeat
.icon-1
    width 12px
    height 12px
    background-size 12px 12px
    &.reduce
        bg-image("decrease_1")
    &.Discount
        bg-image("discount_1")
    &.special
        bg-image("special_1")
    &.invoice
        bg-image("invoice_1")
    &.ensure
        bg-image("guarantee_1")
.icon-2
    width 16px
    height 16px
    background-size 16px 16px
    &.reduce
        bg-image("decrease_2")
    &.Discount
        bg-image("discount_2")
    &.special
        bg-image("special_2")
    &.invoice
        bg-image("invoice_2")
    &.ensure
        bg-image("guarantee_2")
.icon-3
    width 16px
    height 16px
    background-size 16px 16px
    &.reduce
        bg-image("decrease_3")
    &.Discount
        bg-image(".discount_3")
    &.special
        bg-image("special_3")
    &.invoice
        bg-image("invoice_3")
    &.ensure
        bg-image("guarantee_3")
.icon-4
    width 16px
    height 16px
    background-size 16px 16px
    &.reduce
        bg-image("decrease_4")
    &.Discount
        bg-image("discount_4")
    &.special
        bg-image("special_4")
    &.invoice
        bg-image("invoice_4")
    &.ensure
        bg-image("guarantee_4")



</style>