<template>
  <div id="app">
    <!-- <router-view /> -->
    <v-header>
      <i class="iconfont" slot="left-icon" >&#xe649;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe617;</i>
    </v-header>

    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import sideBar from "@/components/sidebar.vue"
import Header from "@/components/header.vue";
export default {
  components: {
    "v-header": Header,
    "v-sidebar":sideBar
  },
};
</script>

<style lang="stylus" >
@font-face {
  font-family: 'iconfont'; /* project id 2052935 */
  src: url('//at.alicdn.com/t/font_2052935_7e982wz5ct8.eot');
  src: url('//at.alicdn.com/t/font_2052935_7e982wz5ct8.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_2052935_7e982wz5ct8.woff2') format('woff2'), url('//at.alicdn.com/t/font_2052935_7e982wz5ct8.woff') format('woff'), url('//at.alicdn.com/t/font_2052935_7e982wz5ct8.ttf') format('truetype'), url('//at.alicdn.com/t/font_2052935_7e982wz5ct8.svg#iconfont') format('svg');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
