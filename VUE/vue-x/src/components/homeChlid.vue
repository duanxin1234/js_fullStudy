<template>
  <div>
    <P>页面的子组件</P>
    <hr />
    <h3>{{count}}</h3>
    <div class="btn">
      <button @click="add">+</button>
      <br />
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store.js";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "hello world!",
    };
  },
  store,
  // computed: mapState({
  //   count:state=>state.count
  // }),
  computed: mapState(["count"]),
  // methods: {
  //   add() {
  //     this.$store.commit("add");
  //   },
  //   reduce() {
  //     this.$store.commit("reduce");
  //   },
  // },
  methods: mapState(["add", "reduce"]),
};
</script>

<style>
</style>