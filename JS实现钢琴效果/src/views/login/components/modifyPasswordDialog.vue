<template>
  <div class="modifyPasswordDialog">
    <el-dialog :visible.sync="dialogVisible" width="50%" :show-close="false">
      <div style="height:104px;background-color: #2290fd">
        <div style="padding: 14px 20px 14px 50px; float: left">
          <img src="@/assets/images/modifyPassword.png" />
        </div>
        <div style="height: 104px; padding: 28px 0px 26px 0px; float: left">
          <span style="font-size: 16px; color: white">系统温馨提示：</span>
        </div>
      </div>
      <div style="height:300px;">
        <el-form :model="formData" ref="formData" :rules="rules" label-width="100px">
          <el-form-item label="当前密码" prop="password">
            <el-input v-model="formData.password" placeholder="请输入" type="password"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="passwordNew">
            <el-input v-model="formData.passwordNew" placeholder="请输入" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="passwordNewRe">
            <el-input v-model="formData.passwordNewRe" placeholder="请输入" type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm('formData')">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // import md5 from 'js-md5'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === this.formData.password) {
          callback(new Error('新密码与当前密码不能一致'))
        } else {
          callback()
        }
      }
      var validatePassRe = (rule, value, callback) => {
        if (value !== this.formData.passwordNew) {
          callback(new Error('确认新密码与新密码不一致'))
        } else {
          callback()
        }
      }
      return {
        dialogVisible: true,
        empId: null,
        formData: {
          password: '',
          passwordNew: '',
          passwordNewRe: ''
        },
        rules: {
          password: [
            { required: true, message: '请输入当前密码', trigger: 'blur' }
          ],
          passwordNew: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          passwordNewRe: [
            { required: true, message: '请输入确认新密码', trigger: 'blur' },
            { validator: validatePassRe, trigger: 'blur' }
          ]
        }
      }
    },
		methods: {
		  back() {
		    this.$emit('login')
		  },
		  randomNum(min, max) {
		    return Math.floor(Math.random() * (max - min) + min)
		  },
		  refreshCode() {
		    this.identifyCode = ''
		    this.makeCode(this.identifyCodes, 4)
		  },
		  makeCode(o, l) {
		    for (let i = 0; i < l; i++) {
		      this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
		    }
		    // console.log(this.identifyCode)
		  },
		  getMdnCode() {
		    if (this.formData.password == null || this.formData.password === '') {
		      this.$alert('请先输入手机号', '警告', {
		        confirmButtonText: '关闭',
		        type: 'warning'
		      })
		    } else {
		      this.$refs.formData.validateField('password', bool => {
		        if (bool === '') {
		          this.$refs.loseForm.validateField('passwordNew', bool => {
		            if (bool === '') {
		              this.changeLabel()
		            }
		          })
		        }
		      })
		    }
		  },
		  changeLabel() {
		    if (this.wait === 0) {
		      this.buttonType = 'primary'
		      this.buttonAble = false
		      this.content = '获取验证码'
		      this.wait = 60
		    } else {
		      this.buttonType = 'info'
		      this.buttonAble = true
		      this.content = '重新发送(' + this.wait + ')'
		      this.wait--
		      setTimeout(() => {
		        this.changeLabel()
		      }, 1000)
		    }
		  },
		  handle() {
		    this.$refs.formData.validate(valid => {
		      if (valid) {
		        this.$emit('resetMdn', this.formData.password)
		      }
		    })
		  }
		}
    /* methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // const req = { id: this.empId, password: md5(this.formData.password), passwordNew: md5(this.formData.passwordNew) }
            this.$message({
              type: 'success',
              message: '成功'
            })
          }
        })
      }
    } */
  }
</script>

<style>
  .modifyPasswordDialog .el-dialog__header {
    padding: 0;
  }
  .modifyPasswordDialog .el-dialog__body {
    padding: 0;
  }
</style>
