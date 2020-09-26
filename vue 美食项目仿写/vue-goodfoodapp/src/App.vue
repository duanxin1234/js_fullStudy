<template>
  <div class="app">
    <!-- 头部组件 -->
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-wrapper" >
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/discuss">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/store">商家</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import vHeader from "@/components/v-header/v-header";
//index   可以自动取消
import { getSeller } from "@/api/index.js";
//引入 query-string
import qs from "query-string";

export default {
  components: {
    vHeader,
  },

  data() {
    return {
      seller: {
        id: qs.parse(location.search).id,
      },
    };
  },

  // 生命周期页面创造后
  created() {
    this._getseller();
  },

  //方法
  methods: {
    _getseller() {
      getSeller({
        id: this.seller.id,
      }).then((res) => {
        // console.log(res);
        //将拿到的信息res 传递给子组件
        // this.seller=res
        //对象的融合
        this.seller = Object.assign({}, res, this.seller);
        // console.log(this.seller);
      });
    },
  },
};
</script>

<style lang="stylus" scoped>

.tab
  width 100%
  display flex
  .tab-wrapper
    flex 1
    text-align center
    padding 15px 0
    a
        width 100%
        display inline-block
    .router-link-exact-active
        color red
        border-bottom 2px solid red

</style>