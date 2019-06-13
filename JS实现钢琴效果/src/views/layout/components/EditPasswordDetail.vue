<template>
  <el-dialog title="修改密码" :visible.sync="visible" v-on:close="close">
    <div>
      <el-form :model="resetForm" :rules="resetRules" ref="resetForm">
        <el-form-item label="当前密码" prop="oldPassword">
          <el-input
            type="password"
            placeholder="请输入当前密码"
            v-model="resetForm.oldPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入新密码"
            v-model="resetForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="newPassword">
          <el-input
            type="password"
            placeholder="请确认新密码"
            v-model="resetForm.newPassword"
            :rows="6"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="password-question">
          <span>注：密码长度为8-20个字符，应为大写字母、小写字母、数字、特殊字符中三种或三种以上的组合</span>
        </div>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handle('resetForm')">确定</el-button>
      <el-button @click="hidenPopup">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { Message } from "element-ui";
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
    visible: Boolean
  },
  methods: {
    hidenPopup() {
      this.$emit("hidePopup");
      this.resetForm = {
        oldPassword: "",
        password: "",
        newPassword: ""
      };
    },
    close() {
      this.hidenPopup();
    },
    handle(resetForm) {
      this.$refs.resetForm.validate(valid => {
        this.$store.dispatch("ResetPassword", this.resetForm).then(data => {
          if (data && data.code === 0) {
            Message.success("修改成功!!");
            this.hidenPopup();
          }
        });
      });
    }
  }
};
</script>
<style>
</style>
