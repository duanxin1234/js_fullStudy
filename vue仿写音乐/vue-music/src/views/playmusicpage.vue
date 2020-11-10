<template>
  <div class="playmusicpage">
    <div class="header">
         <i class="iconfont">&#xe698;</i>
         <div class="songname">{{query.name}}</div>
    </div>
    <div class="singer">{{query.ar[0].name}}</div>
    <div class="img">
      <img  class="img" :src="query.al.picUrl" alt="">
    </div>
    <div class="singword">sasasasasas</div>
    <el-progress :percentage="100" :format="format"></el-progress>
    <div class="buttom">
      <i class="iconfont">&#xe63a;</i>
       <i class="iconfont" @click="selectmusic">&#xe62f;</i>
      <i  class="iconfont">&#xe617; </i>
    </div>
  </div>
</template>

<script>
import api from "@/api"
  export default {
    data() {
      return {
        query:[]
      }
    },
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      selectmusic(){
          
      },
      _getmusic(){
          api.Songpaly({ids:this.$route.query.id}).then((res) => {
              this.query=res.songs[0]
              console.log(res);
      });
          api.MusicUrl({id:this.$route.query.id}).then((res) => {
             
              console.log(res);
      });
      
      }
    },
    created() {
      this._getmusic()
    },
  };
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 2127578 */
  src: url('//at.alicdn.com/t/font_2127578_qn835wl97k.eot');
  src: url('//at.alicdn.com/t/font_2127578_qn835wl97k.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2127578_qn835wl97k.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2127578_qn835wl97k.woff') format('woff'),
  url('//at.alicdn.com/t/font_2127578_qn835wl97k.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2127578_qn835wl97k.svg#iconfont') format('svg');
}

.playmusicpage
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(#87CEFA, #6B238E);
  .header
    display flex
  .img
    width 100px
    height 100px
    border-radius 50%
</style>