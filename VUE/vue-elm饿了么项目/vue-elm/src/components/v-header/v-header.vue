<template>
  <!-- 一个template 只能跟装一个容器 -->
  <div class="header" @click="showdetali">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <support-ico :size="1" :type="seller.supports[0].type"></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt width="100%" height="100%" />
    </div>
    <header-detail :seller="seller" v-show="ditvs" @hide="hidedetail"></header-detail>
  </div>
</template>

<script>
import SupportIco from "@/components/support-ico/support-ico";
import HeaderDetail from "@/components/header-detail/header-detail";
export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      ditvs: false,
    };
  },

  methods: {
    showdetali() {
      this.ditvs = true;
    },
    hidedetail(e) {
      this.ditvs = false;
    },
  },
  created() {
    setTimeout(() => {
      console.log(this.seller);
    }, 1000);
  },
  components: {
    SupportIco,
    HeaderDetail,
  },
};
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

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background: $color-background-sss;
    }
  }

  .background {
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
