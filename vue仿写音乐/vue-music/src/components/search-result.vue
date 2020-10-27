<template>
  <!-- 1h12 -->
  <scroll ref="suggest" class="suggest" :data="result" :pullup="pullup" :beforeScroll='beforeScroll' @scrollToEnd='searchmore'>
    <ul class="suggest-list">
      <li
        class="suggest-item"
        v-for="(item, index) in result"
        :key="index"
        @click="selectitem(item)"
      >
        <i class="iconfont">&#xe664;</i>
        <span class="text">{{ item.name }}-{{ item.artists[0].name }}</span>
      </li>
    </ul>
  </scroll>
</template>

<script>
import scroll from "@/components/scroll.vue";
import api from "@/api/index.js";
const limit = 20;
export default {
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  components: {
    scroll,
  },
  data() {
    return {
      page: 1,
      result: [],
      hasMore: true,
      pullup: true,
      beforeScroll:true
    };
  },
  methods: {
    _getmusickey(page) {
      const params = {
        limit,
        offset: (page - 1) * limit,
        keywords: this.query,
      };
      api.MusicSearch(params).then((res) => {
        console.log(res);
        this.result = [...this.result, ...res.result.songs];
      });
    },
    search() {
      this.page = 1;
      this.hasMore = true;
      this.$refs.suggest.scrollTo(0, 0);
      this.result = [];
      this._getmusickey(this.page);
    },
    selectitem(item) {
      this.$emit("select", item);
      
    },
    searchmore(){
      if(!this.hasMore){
        return
      }
      this.page++
      this._getmusickey(this.page)
    },
   
   
  },

  watch: {
    query(newQuery) {
      if (!newQuery) {
        return;
      }
      this.search();
    },
  },
};
</script>

<style  lang="stylus" scoped>
@font-face {
  font-family: 'iconfont'; /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_d134arzugna.eot');
  src: url('//at.alicdn.com/t/font_2127578_d134arzugna.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_2127578_d134arzugna.woff2') format('woff2'), url('//at.alicdn.com/t/font_2127578_d134arzugna.woff') format('woff'), url('//at.alicdn.com/t/font_2127578_d134arzugna.ttf') format('truetype'), url('//at.alicdn.com/t/font_2127578_d134arzugna.svg#iconfont') format('svg');
}

.suggest {
  overflow hidden;
  height: 90vh;
}

.suggest-list {
  .suggest-item {
    display: flex;
    margin: 20px 23px;

    .iconfont {
      display: inline-block;
      font-size: 15px;
      margin-right: 15px;
      color: black;
    }

    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 1000;
      white-space: nowrap;
    }
  }
}
</style>