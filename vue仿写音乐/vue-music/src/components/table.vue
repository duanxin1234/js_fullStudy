<template>
  <div class="table">
  <router-link class="tab-item" to="/recom">推荐</router-link>
   <router-link class="tab-item" to="/singer">歌手</router-link>
    <router-link class="tab-item" to="/rank">排行</router-link>
     <router-link class="tab-item" to="/search">搜索</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/function.styl';
.table  
    display flex
    justify-content space-around
    margin-top  px2rem(15)
    height  px2rem(30)
    text-align center
    .tab-item
        line-height px2rem(30)
        font-size   px2rem(15)
        color black 
        &.router-link-active
            border-bottom 2px solid red





</style>