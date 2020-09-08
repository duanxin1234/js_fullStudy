<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2102560265,1665037801&fm=26&gp=0.jpg"
          alt
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊</span>
        </div>
        <div class="description">蜂鸟转送/38分钟送达</div>
        <div class="support">
          <img class="support-ico" src="./brand@2x.png" alt />
          <span class="text">在线支付满28减29</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">5个</span>
      </div>
      <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text"> 阿斯加德哈等哈就都会尽快哈空间说的哈健康带回家卡的很健康带回家卡的黄金卡的话</span>
      </div>
    </div>
    <div class="backgroud">
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2102560265,1665037801&fm=26&gp=0.jpg"
        alt
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header {
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;

  .content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;

    .avatar {
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;

      img {
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: $fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: $fontsize-small;
      }

      .support {
        display: flex;
        align-items: center;

        &-ico {
          margin-right: 4px;
        }

        .text {
          line-height: 12px;
          font-size: $fontsize-small-s;
        }
      }
    }
  }

  .backgroud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>
