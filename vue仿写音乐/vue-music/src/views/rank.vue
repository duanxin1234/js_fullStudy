<template>
  <div class="rank" >
   
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
      <cube-scroll
     ref="scroll"
    >
      <li
        v-for="(item, index) in rankinfo"
        class="infinite-list-item"
        :class="itemclass(index)"
        :key="item.id"
        @click="jumpMusicList(item)"
      >
        <div class="warp">
          <div class="box">
            <img class="img" :src="item.coverImgUrl" alt="" />
          </div>
          <ul class="text" v-if="item.tracks.length">
            <li class="name" >
              1,{{ item.tracks && item.tracks[0] && item.tracks[0].first }}-{{item.tracks && item.tracks[0] && item.tracks[0].second}}
            </li>
            <li class="name">2,{{ item.tracks && item.tracks[1] && item.tracks[1].first }}-{{item.tracks && item.tracks[1] && item.tracks[1].second}}</li>
            <li class="name">3.{{ item.tracks && item.tracks[2] && item.tracks[2].first }}-{{item.tracks && item.tracks[2] && item.tracks[2].second}}</li>
          </ul>
           <ul class="text" v-else>
              <li class="digname">
                <span class="_dianame">{{item.name}}</span>
              </li>
              <li class="name">{{item.description}}</li>
           </ul>
        </div>
      </li>
      </cube-scroll>
    </ul>
     
  </div>
</template>

<script>

import api from "@/api/index.js";
export default {
  data() {
    return {
      count: 0,
      rankinfo: [],
     
      
    };
  },
  methods: {
    //随机数生成
    itemclass(){
      //0-4之间随机成生 
     const random = Math.floor(Math.random() * 4 + 1 )
      const obj = {
        '1': 'red',
        '2': 'green',
        '3': 'pink',
        '4': 'blue'
      }
      return obj[random]
    },
    load() {
      this.count += 2;
    },
    _getrankinfo() {
      api.Rankinfo().then((res) => {
        console.log(res);
        this.rankinfo = res.list.slice(0, 35);
      });
    },
    jumpMusicList(item){
        console.log(item);
        this.$router.push({path: `/rank/rankinfo`});

    }
  },
  created() {
    this._getrankinfo();
  },
};
</script>

<style   lang="stylus" scoped>
.infinite-list {
  height: 90vh;
  padding: 0;
  margin: 0;
  list-style: none;

  .infinite-list-item {
    height: 100px;
    margin: 5px 8px 5px 8px;
    border-radius: 10px;
   &.pink{
      background-color: pink;
   }
   &.red{
     background-color: red;
   }
       
   &.blue {
      background-color: blue;   
     }
         
     &.green {
       background-color: green;  
     }
           
    .warp  {
      display: flex;

      .box {
        flex:0 0 100px
        text-align: center;
        width: 100px;
        height: 80px;
        margin: 10px 10px;
        line-height: 80px;
        font-size: 80px;

        .img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }

      .text {
       
        margin: 10px 0px;
        overflow:hidden;
      
        .name {
          font-size :13px;
          font-weight :1000;
          margin: 8px 0px;
          white-space:nowrap;
          text-overflow:ellipsis


        }
        .digname{
           margin: auto;
           font-size :20px;
           font-weight :1000;
        
        }
      }
    }
  }
}
</style>