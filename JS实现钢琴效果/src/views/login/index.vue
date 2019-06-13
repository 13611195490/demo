<template>
  <div class="login-container">
    <div class="login-left">
      <div class="login-left-in">
        <img src="@/assets/images/pic.png" />
      </div>
    </div>
    <div class="login-right">
      <div class="login-right-in">
        <div class="login-logo">
          <img src="@/assets/images/组-1.png" />
        </div>
        <login v-if="loginShow" @forgetPassword="forgetPassword"></login>
        <reset-password v-if="resetPasswordShow" :resetMdn="resetMdn" @login="login"></reset-password>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from './components/login.vue'
  import ResetPassword from './components/resetPassword.vue'
  export default {
    components: { Login, ResetPassword },
    data() {
      return {
        loginShow: true,
        resetPasswordShow: false,
        resetMdn: ''
      }
    },
    methods: {
      login() {
        this.resetPasswordShow = false
        this.loginShow = true
      },
      forgetPassword() {
        this.loginShow = false
        this.resetPasswordShow = true
      },
      getResetMdn: function(data) {
        this.resetMdn = data
        this.resetPassword()
      },
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: white;
    background-image: url('../../assets/images/首页背景.png');
    background-size: 100% 100%;
    line-height: 0;
  }
  .login-left {
    width: 56.25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-left-in {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-left-in img {
    height: 100%;
  }
  .login-right {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 40.9%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-right-in {
    width: 414px;
  }
  .login-logo {
    margin: 0 auto;
    width: 360px;
  }
  .login-logo img{
    width: 100%;
  }
  .rightForm .el-form-item {
    margin-bottom: 0;
  }
  .mb {
    margin-bottom: 30px !important;
  }
  .rightForm .el-form-item__content {
    height: 62px;
    position:relative;
    line-height: 0;
  }
  .input-icon {
    width: 61px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #e0e3e5;
    position:absolute;
    left:0px;
    top:1px;
    z-index: 99;
  }
  .input-icon img {
    width: 25px;
  }
  .rightForm .el-input {
    height: 62px;
  }
  .rightForm .el-input__inner {
    width: 100%;
    height: 100%;
    padding-left: 82px;
  }
  .forget {
    padding: 10px 0px 40px;
    font-size: 16px;
    line-height: 18px;
  }
  .forgetPassword {
    float: right;
    color: #48ACFF;
  }
  .forgetPassword:hover {
    cursor: pointer;
    text-decoration:underline;
  }
  .el-message__icon {
    font-size: 16px;
  }
  .submit-button {
    width: 414px;
    height: 80px;
    border:0;
    position: relative;
    z-index: 999;
  }
  .submit-button:hover {
    cursor: pointer;
  }
  .login-or {
    margin-top: 5px;
    width: 414px;
  }
  .login-or img{
    width:100%;
  }
  .login-download {
    margin: 0 auto;
    margin-top: 24px;
    width: 365px;
  }
  .login-download img {
    width:120px;
  }
  .clearfix:before {
    content: ' ';
    display: table
  }
  .clearfix:after {
    content: " ";
    font-size: 0;
    visibility: hidden;
    display: block;
    width: 100%;
    height: 0;
    clear: both
  }
  .clearfix {
    zoom: 1
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
</style>

