<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-link to="/hi/hi1">hi1</router-link>
    <router-link to="/hi/hi2">hi2</router-link>
    <br />
    <router-link to="/abc">404</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "hi! ",
    };
  },
  beforeRouteEnter: (to, from, next) => {
    // ...
    console.log("准备进入");
    next();
  },

  beforeRouteLeave: (to, from, next) => {
    // ...
    console.log("准备离开");
    next();
  },
};
</script>

<style>
</style>