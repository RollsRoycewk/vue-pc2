<template>
  <div>
    Login
    <el-button type="danger" @click="handleLogin">发送请求</el-button>
  </div>
</template>

<script>
import { asyncLogin } from "@api/use";

export default {
  name: "Login",
  methods: {
    handleLogin() {
      asyncLogin({
        phone: "13700000000",
        password: "111110",
      })
        .then((val) => {
          console.log(val);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
