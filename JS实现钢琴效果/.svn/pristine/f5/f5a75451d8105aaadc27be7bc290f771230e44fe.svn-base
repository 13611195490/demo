<template>
  <div>
    <el-form
      class="rightForm login-form"
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
    >
      <el-form-item prop="username" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/username-icon.png">
        </div>
        <el-input
          name="username"
          type="text"
          v-model="loginForm.username"
          autocomplete="on"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div class="input-icon">
          <img src="@/assets/images/password-icon.png">
        </div>
        <el-input
          name="password"
          type="password"
          @keyup.enter.native="handleLogin"
          v-model="loginForm.password"
          autocomplete="on"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <div class="forget">
        <div class="clearfix">
          <!-- <span class="forgetPassword" @click="forgetPassword">修改密码</span> -->
        </div>
      </div>
      <div class="submit-button login-button" @click="handleLogin"></div>
    </el-form>
  </div>
</template>

<script>
// import captcha from './components/captcha.vue'
import axios from "axios";
import { Message } from "element-ui";

import routerUtil from "./routerUtil.js";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 5, message: "密码不能小于5位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        this.$store.dispatch("Login", this.loginForm).then(data => {
          if (data && data.code === 0) {
            if (data.passwordInfo.indexOf("密码失效，请重新设置") != -1) {
              Message.warning("密码失效，请重新设置!!");
              this.forgetPassword();
            } else {
              this.$router.push({ path: "/monitor/elcIn" });
              Message.success("登录成功,欢迎您!!");
            }
          }
        });
      });
    },
    forgetPassword() {
      this.$emit("forgetPassword");
    }
  }
};
</script>
<style scoped>
.login-form {
  margin-top: 40px;
}
.login-button {
  background: url(../../../assets/images/登录.png);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>