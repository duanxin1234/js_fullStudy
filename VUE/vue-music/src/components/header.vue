<template>
  <div class="header">
    <div class="header-icon" @click="menuShow">
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <slot name="content"></slot>
    </div>
    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    menuShow() {},
  },
};
</script>

<style lang="stylus" >
@import '../assets/css/function.styl';

html, body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}

.header {
  height: px2rem(88);
  line-height: px2rem(88);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: px2rem(30);

  &-icon {
    flex: 0 0 px2rem(88);
    margin-top: px2rem(6);

    .iconfont {
      font-size: px2rem(48);
    }
  }
}
</style>