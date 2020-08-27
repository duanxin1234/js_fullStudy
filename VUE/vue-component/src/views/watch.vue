<template>
  <div class="watch">
    <span style="margin-right:20px">{{temp}}度</span>
    <span>{{suggest}}</span>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: 27,
      suggest: "穿短袖",
    };
  },

  methods: {
    add() {
      this.temp += 5;
    },
    reduce() {
      this.temp = this.temp - 5;
    },
  },
  watch: {
    temp: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal >= 15) {
        this.suggest = "穿短袖";
      } else if (newVal < 15 && newVal >= 0) {
        this.suggest = "穿夹克";
      } else if (newVal < 0) {
        this.suggest = "穿羽绒服";
      }
    },
  },
};
</script>

<style>
</style>