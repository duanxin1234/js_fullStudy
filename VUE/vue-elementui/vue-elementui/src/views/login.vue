<template>
  <div class="login">
    <h2>旅梦后台管理系统</h2>
    <div class="swarpp">
      <p class="input">
        <el-input v-model="user" placeholder="请输入账号"></el-input>
      </p>
      <p class="input">
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </p>
    </div>
    <p class="btn">
      <el-button class="button" type="primary" round @click="login">登入</el-button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(123);
      if (!this.user || !this.password) {
        this.$message.error("账号和密码不能为空");
      } else if (this.user == "admin" && this.password == "123456") {
        this.$message({
          message: "登入成功",
          type: "success",
          //路由跳转
        });

        this.$router.push({
          path: "/about",
        });
      } else {
        this.$message.error("账号或者密码错误");
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn button {
  width: 100%;
}
</style>