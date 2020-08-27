<template>
  <div class="datail">
    <h1>computed 计算属性</h1>
    <div class="price">{{totalPrice}}元</div>
    <div class="news" v-for="(items,index) in reverseNews " :key="index">
      <ul>{{items.title}}-{{items.date}}</ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 4,

      news: [
        { title: "国安部原部长受领重任", date: "2020/08/24" },
        {
          title: "外媒：中国签订一个月来最大单日美国玉米购买合同",
          date: "2020/08/25",
        },
        {
          title: "美国对12名南海建岛的中国公民实施签证限制",
          date: "2020/08/26",
        },
        { title: "袁隆平爷爷90岁生日前去理发", date: "2020/08/27" },
      ],
    };
  },

  computed: {
    totalPrice: function () {
      return this.price * this.num;
    },
    reverseNews: function () {
      let news = this.news;
      return news.reverse();
    },
  },
};
</script>

<style>
</style>