<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper clear-fix">
        <div class="detail-mai">
          <h1 class="name" @click.stop="set">{{seller.name}}</h1>
          <div class="star-wrapper">
            <!-- 星星组件 -->
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="supports-items" v-for="(item,index) in seller.supports" :key="index">
              <support-ico :size="2" :type="item.type"></support-ico>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <div class="content">{{seller.bulletin}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from "@/components/support-ico/support-ico";
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
      sss: true,
    };
  },
  methods: {
    set() {
      this.$emit("hide", false);
    },
  },
  components: {
    SupportIco,
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.header-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow: auto;
  backdrop-filter: blur(10px);
  opacity: 1;
  color: $color-white;
  background: $color-background-s;

  &.fade-enter, &.fade-leave-to {
    opacity: 0;
    background: $color-background;
  }

  &.fade-enter-active, &.fade-leave-active {
    transition: all 0.5s;
  }

  .detail-wrapper {
    display: inline-block;
    width: 100%;
    min-height: 100%;
  }

  .detail-mai {
    margin-top: 64px;
    padding-bottom: 64px;

    .name {
      line-height: 16px;
      text-align: center;
      font-size: $fontsize-large;
      font-weight: 700;
    }

    .star-wrapper {
      margin-top: 18px;
      text-align: center;
      padding: 2px 0;
    }

    .title {
      display: flex;
      width: 80%;
      margin: 28px auto 24px auto;

      .line {
        flex: 1;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        top: -6px;
      }

      .text {
        padding: 0 12px;
        font-weight: normal;
        font-size: $fontsize-medium;
      }
    }

    .supports {
      width: 80%;
      margin: 0 auto;

      &-item {
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }

        .text {
          line-height: 16px;
          margin-right: 6px;
          font-size: $fontsize-small;
        }
      }
    }

    .bulletin {
      width: 80%;
      margin: 0 auto;

      .content {
        margin-top: 10px;
      }
    }
  }
}
</style>