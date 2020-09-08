<template>
  <div class="hi2">
    <p>我是hi2页面</p>
    <button @click="goBack">返回上一页面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "/abc", query: { name: "蜗牛" } });
    },
  },
};
</script>

<style>
</style>