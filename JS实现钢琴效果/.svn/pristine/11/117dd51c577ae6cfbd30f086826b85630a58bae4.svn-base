<template>
  <div>
    <div class="password-back" @click="back">
      <img src="@/assets/images/back.png">
    </div>
    <el-form class="rightForm lose-form" :model="resetForm" :rules="resetRules" ref="resetForm">
      <div class="password-title">重置密码</div>
      <el-form-item prop="oldPassword" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/password-icon.png" />
        </div>
        <el-input name="oldPassword" type="password" v-model="resetForm.oldPassword" placeholder="请输入当前密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/password-icon.png" />
        </div>
        <el-input name="password" type="password" v-model="resetForm.password" placeholder="请输入新密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="newPassword" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/password-icon.png" />
        </div>
        <el-input name="newPassword" type="password" v-model="resetForm.newPassword" placeholder="请确定新密码">
        </el-input>
      </el-form-item>
      <div class="password-question">
        <span>注：密码长度为8-20个字符，应为大写字母、小写字母、数字、特殊字符中三种或三种以上的组合</span>
      </div>
      <div class="submit-button confirm-button" @click="handle('resetForm')"></div>
    </el-form>
  </div>
</template>

<script>
// import { resetPasswordByMdn } from '@/api/login'
export default {
  data() {
    const passwordValid = (rule, value, callback) => {
      const reg = "^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$";
      if (!value.match(reg)) {
        callback(
          new Error(
            "密码长度不少于8位,不大于20位，必须包含大写字母、小写字母、数字、特殊字符中三种或三种以上"
          )
        );
      } else {
        callback();
      }
    };
    const equalsPasswordValid = (rule, value, callback) => {
      if (value !== this.resetForm.password) {
        callback(new Error("确认新密码与新密码不一致"));
      } else {
        callback();
      }
    };
    return {
      resetForm: {
        oldPassword: "",
        password: "",
        newPassword: ""
      },
      resetRules: {
        oldPassword: [
          { required: true, trigger: "blur", validator: passwordValid }
        ],
        password: [
          { required: true, trigger: "blur", validator: passwordValid }
        ],
        newPassword: [
          { required: true, trigger: "blur", validator: passwordValid },
          { validator: equalsPasswordValid, trigger: "blur" }
        ]
      }
    };
  },
  props: {
    resetMdn: String
  },
  methods: {
    back() {
      this.$emit("login");
    },
    handle(resetForm) {
      this.$refs.resetForm.validate(valid => {
        this.$store.dispatch("ResetPassword", this.resetForm).then(data => {
          if (data && data.code === 0) {
            this.$router.push({ path: "/monitor/elcIn" });
            Message.success("登录成功,欢迎您!!");
          }
        });
      });
    }
  }
};
</script>
<style>
  .password-back {
    width: 60px;
    position: absolute;
    top: 60px;
    right: 0;
  }
  .password-back:hover {
    cursor: pointer;
  }
  .password-back img {
    width: 100%;
  }
  .lose-form {
    margin-top: 50px;
    font-size: 14px;
  }
  .password-title {
    line-height: 14px;
    padding-bottom: 25px;
  }
  .wid {
    width: 70%;
  }
  .imgCode {
    height: 62px;
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
  }
  .mdnCode {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .mdnCode .el-button {
    width: 103px;
    height: 42px;
    padding: 0;
    font-size: 12px;
  }
  .password-question {
    padding-bottom: 30px;
    font-size: 14px;
    line-height: 20px;
    color: #999;
  }
  .confirm-button {
    background: url(../../../assets/images/确定.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
