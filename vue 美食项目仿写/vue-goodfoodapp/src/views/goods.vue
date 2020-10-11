<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <!-- 左右联动 -->
      <cube-scroll-nav :side="true" :data="goods" :options="scrolloption" v-if="goods.length">
        <!-- 左侧导航栏 -->
        <template slot="bar" slot-scope="props">
          <cube-scroll-nav-bar
            direction="vertical"
            :current="props.current"
            :labels="props.labels"
            :txts="bartxts"
          >
            <!-- 左侧单个框内容 -->
            <i slot-scope="props">{{ props.txt.name }}</i>
          </cube-scroll-nav-bar>
        </template>
        <!-- 右侧导航栏 -->
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name"
        >
          <ul>
            <!-- 右侧单个框内容 -->
            <li class="food-item" v-for="(food, i) in good.foods" :key="i">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                  <span class="old" v-if="food.oldPrice"
                    >￥{{ food.oldPrice }}</span
                  >
                </div>
              </div>
              <!-- 加减号组件 6,1.55分 -->
              <div class="cart-control-wrapper">
                <cart-control :food='food' @add='onAdd'></cart-control>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <!-- 底部组件 -->
   <div class="shop-cart-wrapper">
    <shop-cart ref="shopcart"  :selectfoods='selectfoods' :deliveryprice='data.deliveryPrice' :minprice='data.minPrice' ></shop-cart>
   </div>
   
  </div>
</template>

<script>
import cartControl from "@/components/cart-control/cart-control.vue";
import shopCart from "@/components/shop-cart/shop-cart.vue"
import { getGoods } from "@/api";
export default {
  components: {
    cartControl,
    shopCart
  },
  data() {
    return {
      goods: [],
      scrolloption: {
        click: true,
        directionLockThreshold: 0,
      },
    };
  },
  // 接收
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  // 把每个标题name都遍历出来
  computed: {
    bartxts() {
      let ret = [];
      this.goods.forEach((good) => {
        const { type, foods, name } = good;
        ret.push({
          name,
          type,
          foods,
        });
      });
      return ret;
    },
    selectfoods(){
      let foods=[];
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
          if(food.count >0){  
             foods.push(food) 
          } 
        })
      }) 
      return foods 
    }

  },

  created() {
    setTimeout(() => {
      console.log(this.data);
    }, 1000);
    this._getGoods();
  },

  methods: {
   onAdd(target){
    //  console.log(this.$refs.shopcart);
    // 父组件向子组件传值
     this.$refs.shopcart.jump(target)
      
   },
    
    _getGoods() {
      getGoods({
        id: this.data.id,
      }).then((e) => {
        console.log(e);
        this.goods = e;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/common/stylus/variable.styl';
@import '../assets/common/stylus/index.styl';

.goods {
  position: relative;
  text-align: left;
  height: 100%;

  .scroll-nav-wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 48px;
  }

  >>> .cube-scroll-nav-bar {
    width: 80px;
    white-space: normal;
    overflow: hidden;
  }

  >>> .cube-scroll-nav-bar-item {
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 56px;
    line-height: 14px;
    font-size: 16px;
    background: #f3f5f7;

    .text {
      flex: 1;
      position: relative;
    }

    .num {
      position: absolute;
      right: -8px;
      top: -10px;
    }

    .support-ico {
      display: inline-block;
      vertical-align: top;
      margin-right: 4px;
    }
  }

  >>> .cube-scroll-nav-bar-item_active {
    background: $color-white;
    color: $color-dark-grey;
  }

  >>> .cube-scroll-nav-panel-title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid $color-col-line;
    font-size: 10px;
    color: $color-grey;
    background: #f3f5f7;
  }

  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;

    &:last-child {
      border-none();
      margin-bottom: 0;
    }

    .icon {
      flex: 0 0 57px;
      margin-right: 10px;

      img {
        height: auto;
      }
    }

    .content {
      flex: 1;

      .name {
        margin: 2px 0 8px 0;
        height: 14px;
        line-height: 14px;
        font-size: 15px;
        color: black;
      }

      .desc, .extra {
        line-height: 10px;
        font-size: 10px;
        color: $color-light-grey;
      }

      .desc {
        line-height: 12px;
        margin-bottom: 8px;
      }

      .extra {
        .count {
          margin-right: 12px;
        }
      }

      .price {
        font-weight: 700;
        line-height: 24px;

        .now {
          margin-right: 8px;
          font-size: 10px;
          color: red;
        }

        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: $color-light-grey;
        }
      }
    }

    .cart-control-wrapper {
      position: absolute;
      right: 0;
      bottom: 12px;
    }
  }

  .shop-cart-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
  }
}
</style>
