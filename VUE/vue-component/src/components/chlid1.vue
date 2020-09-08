<template>
  <div class="chlid">
    children
    <button @click="sendmsg">传给老2</button>
  </div>
</template>

<script>
import bus from "@/utils/bus.js";
export default {
  data() {
    return {
      msg: "我是child1里面的数据",
    };
  },
  methods: {
    sendmsg() {
      bus.$emit("info", this.msg); //传送信号
    },
  },
};
</script>

<style>
</style>