<template>
 <div class="recom">
    <!-- 轮播图-->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item ,index) in getrecominfolist " :key="index">
     
       <img  class="medium" :src="item.picUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="recommusic">
      <span class="recomhot">热门歌单推荐</span>
    </div>
     <ul class="infinite-list" >
      <li
        v-for="(item,index) in getrecominfo"
        class="infinite-list-item"
        :key="index"
      >
        <div class="warp">
          <div class="box">
            <img class="img" :src="item.picUrl" alt="" />
          </div>
         
           <ul class="text" >
              <li class="digname">
                <span class="_dianame">{{item.name}}</span>
              </li>
              <li class="name">{{item.copywriter}}</li>
           </ul>
        </div>
      </li>
    </ul>
 </div>
</template>

<script>

import api from "@/api/index.js"
export default {

  data() {
    return {
      getrecominfo:[],
      getrecominfolist:[],
      
    }
  },
  methods: {
    _getrecominfo(){
      api.Recominfo().then((res) => {
        console.log(res);
       this.getrecominfo=res.result.slice(0,30);
       this.getrecominfolist=res.result.slice(10,16);
      });
    }
  },
  created() {
    this._getrecominfo()
  },

}
</script>

<style lang="stylus" scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .medium{
      display: inline-block;
          width: 100%;
          height: 100%;
  }
  .recommusic{
    text-align :center;
    
  }
  .recomhot{
    line-height :40px;
    font-size :15px;
    color: red;
    font-weight:1000;
  }
  .infinite-list {
  height: 90vh;
  padding: 0;
  margin: 0;
  list-style: none;
  }
  .infinite-list-item {
    height: 85px;
    margin: 0px 8px 0px 8px;
    border-radius: 10px;
  }
    .warp {
      display: flex;
    }
      .box {
        flex:0 0 100px
        text-align: center;
        width: 80px;
        height: 80px;
        margin: 10px 4px;
        line-height: 80px;
        font-size: 80px;
      }
        .img {
          display: inline-block;
          width: 85%;
          height: 100%;
          border-radius :10px;
        }
      

      .text {
       
        margin: 10px 0px;
        overflow:hidden;
      }
        .name {
          font-size :13px;
          font-weight :700;
          margin: 8px 0px;
          white-space:nowrap;
          text-overflow:ellipsis
        }

        
        ._dianame{
           
           font-size :20px;
           font-weight: 1000;
        
        }
      
</style>