<template>
  <div class="rankinfo" :style="{backgroundImage:'url(' + bdimage + ')'}">
      <cube-scroll
     ref="scroll"
    >
  
       </cube-scroll>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      bdimage:''
    }
  },
methods: {
     _getrankinfo() {
      api.Rankinfo().then((res) => {
        console.log(res);
        this.rankinfo = res.list.slice(0, 35);
      });
    },
},
created() {
  this._getrankinfo()
},
}
</script>

<style>

</style>