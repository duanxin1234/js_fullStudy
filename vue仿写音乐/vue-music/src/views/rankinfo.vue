<template>
  <div class="rankinfo">
    <div class="title">
      <i class="iconfont" @click="backrank">&#xe612;</i>
      <span class="name">{{ query.name }}</span>
    </div>
    <div class="titleimg">
      <img class="img" :src="query.coverImgUrl" alt="" />
    </div>
    <cube-scroll ref="scroll">
      <ul class="ul">
        <li class="li" v-for="(item, index) in query.tracks" :key="index" @click="playmusic(item)">
          <div class="musicinfo">
            <h1 class="h1">{{ item.first }}</h1>
            <h1>{{ item.second }}</h1>
          </div>
          <div class="icon">
            <i class="iconfont">&#xe637;</i>
          </div>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
      query: {},
    };
  },
  methods: {
     ...mapActions(['selectpalysong']),
    backrank() {
      const vn = this;
      vn.$router.push({ path: `/rank` });
    },
    playmusic(item){
      this.selectpalysong(item)
    }
  },
  created() {
    
    
  },

  mounted() {
   
     this.query = this.$route.query.type;
  },
 
  updated() {
   
  },
};
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'iconfont'; /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_b54e0serldu.eot');
  src: url('//at.alicdn.com/t/font_2127578_b54e0serldu.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_2127578_b54e0serldu.woff2') format('woff2'), url('//at.alicdn.com/t/font_2127578_b54e0serldu.woff') format('woff'), url('//at.alicdn.com/t/font_2127578_b54e0serldu.ttf') format('truetype'), url('//at.alicdn.com/t/font_2127578_b54e0serldu.svg#iconfont') format('svg');
}

.rankinfo {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(#87CEFA, #6B238E);

  .title {
    position: absolute;
    margin: 10px 15px;
    font-size: 20px;
    color: white;

    .iconfont {
      margin-right: 10px;
      color: white;
      font-weight: 1000;
    }

    .name {
      color: white;
      font-weight: 1000;
    }
  }

  .titleimg {
    width: 100%;
    height: 350px;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  .ul {
    .li {
      position: relative;
      margin: 10px 0 5px 25px;
      display: flex;

      .musicinfo {
        width: 100%;
        padding: 10px;

        .h1 {
          margin-bottom: 5px;
        }
      }

      .icon {
        position: absolute;
        right: 15px;
        margin: 10px 10px;
      }
    }
  }
}
</style>