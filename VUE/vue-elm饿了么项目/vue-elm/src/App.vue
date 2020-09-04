<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <!-- header 组件 -->
    <div class="tab">
        <div class="tab-wrapper">
          <router-link to="/">goods</router-link>
        </div>
        <div class="tab-wrapper">
          <router-link to="/comment">comment</router-link>
        </div>
        <div class="tab-wrapper">
          <router-link to="/seller">seller</router-link>
        </div>
    </div>
   <div class="page">
    <router-view :data="seller" />
   </div>
  </div>
</template>

<script>
import VHeader from "@/components/v-header/v-header.vue";
import { getSeller } from "@/api";
import qs from "query-string";

export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id,
      },
    };
  },
  created() {
    this._getSeller();
  },
  methods: {
    _getSeller() {
      getSeller({
        id: this.seller.id,
      }).then((seller) => {
        this.seller = Object.assign({}, this.seller, seller);
        // console.log(this.seller);
      });
    },
  },
  components: {
    VHeader,
  },
};
</script>>

<style lang="stylus" scoped>
.page
  position fixed
  top 162px
  left 0
  bottom 0
  right 0
.tab
  width 100%
  height 50px
  line-height 50px
  display flex
  .tab-wrapper
    flex 1
    text-align center
    color #666666
    a
      display block
      width 100%
    .router-link-exact-active
      color red
      border-bottom 2px solid red


    
</style>
