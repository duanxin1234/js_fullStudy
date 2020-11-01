<template>
  <div class="singer">
    <cube-index-list :data="singerinfo"  >
      <cube-index-list-group
        v-for="(group, index) in singerinfo"
        :key="index"
        :group="group"
      >
        <cube-index-list-item
          v-for="(item, index) in group.items"
          :key="index"
          :item="item"
          @select="selectItem"
        >
          <div class="custom-item">
            <div class="box">
              <img class="item-img" :src="item.picUrl" alt="" />
            </div>
            <span class="item-text">{{ item.name }}</span>
          </div>
        </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
  </div>
</template>

<script>

import api from "@/api/index.js";
export default {
  data() {
    return {
      singerinfo: [],
      page: 1,
    }; 
  },
  methods: {
    _getsingerinfo() {
      
      api.Singerinfo().then((res) => {
        
        console.log(res);
        // res.artists
        let map = {};
        for (let p of res.artists) {
          let prefix = this.chineseToEnglish(p.name);

          if (map[prefix]) {
            map[prefix].push(p);
            // map[img].push(p)
          } else {
            map[prefix] = [p];
          }
        }
        let resarr = [];
        for (let k in map) {
          let obj = {
            name: k,
            items: map[k],
          };
          resarr.push(obj);
        }
        this.singerinfo = resarr;
      });
    },
    chineseToEnglish(c) {
      var idx = -1;
      var MAP = "ABCDEFGHJKLMNOPQRSTWXYZ";
      var boundaryChar = "驁簿錯鵽樲鰒餜靃攟鬠纙鞪黁漚曝裠鶸蜶籜鶩鑂韻糳";
      if (!String.prototype.localeCompare) {
        throw Error("String.prototype.localeCompare not supported.");
      }
      if (/[^\u4e00-\u9fa5]/.test(c)) {
        return c;
      }
      for (var i = 0; i < boundaryChar.length; i++) {
        if (boundaryChar[i].localeCompare(c, "zh-CN-u-co-pinyin") >= 0) {
          idx = i;
          break;
        }
      }
      return MAP[idx];
    },
    selectItem() {},
  },
  created() {
    this._getsingerinfo();
  },
};
</script>

<style lang="stylus" scoped>
.singer {
  height: 100%;
}

.custom-item {
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  font-size: 10px;
  margin: 10px;
}

.item-img {
  display: inline-block;
  width: 50px;
  height: 50PX;
  margin: 0px 20px;
  border-radius: 50%;
}

.cube-index-list-content {
  background-color: #222;
  color: #909090;
}

.cube-index-list-anchor {
  background-color: #333;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 20px;
}

.cube-index-list-nav {
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);

  >ul {
    >li {
      padding: 3px;
      font-size: 12px;
      color: #909090;

      &.active {
        color: #ffcd32;
      }
    }
  }
}
</style>