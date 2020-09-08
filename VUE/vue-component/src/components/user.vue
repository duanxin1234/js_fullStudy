<template>
  <div class="user">
    <p>{{userName}}</p>
    <button @click="handle">宠物</button>
  </div>
</template>

<script>
export default {
  props: ["userName"], //子组件接受
  data() {
    return {
      name: "pp",
      title: "我是子组件",
      catname: "小黑",
    };
  },
  methods: {
    handle() {
      //   console.log("ok");
      this.$emit("nameChange", this.catname);
      this.$emit("titleChange", this.title); //发散出一个信号
    },
  },
};
</script>

<style>
</style>