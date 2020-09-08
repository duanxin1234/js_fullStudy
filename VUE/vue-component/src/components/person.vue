<template>
  <div class="person">
    <p>我的宠物是：{{babyname}}</p>
  </div>
</template>

<script>
export default {
  props: {
    babyname: {
      type: String,
      default: "小白",
    },
  },
  data() {
    return {
      baby: "小白",
    };
  },
};
</script>

<style>
</style>