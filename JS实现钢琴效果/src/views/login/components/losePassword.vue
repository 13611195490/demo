<template>
  <div>
    <div class="password-back" @click="back">
      <img src="@/assets/images/back.png" />
    </div>
    <el-form class="rightForm lose-form" :model="loseForm" :rules="loseRules" ref="loseForm">
      <div class="password-title">找回密码</div>
      <el-form-item prop="mdn" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/手机号.png" />
        </div>
        <el-input name="mdn" type="text" v-model="loseForm.mdn" placeholder="手机号">
        </el-input>
      </el-form-item>
      <el-form-item prop="imgCode" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/password-icon.png" />
        </div>
        <el-input name="imgCode" type="text" v-model="loseForm.imgCode" placeholder="图形验证码" class="wid">
        </el-input>
        <div class="imgCode" @click="refreshCode">
          <ct-s-identify :identifyCode="identifyCode"></ct-s-identify>
        </div>
      </el-form-item>
      <el-form-item prop="mdnCode" class="mb">
        <div class="input-icon">
          <img src="@/assets/images/短信.png" />
        </div>
        <el-input name="mdnCode" type="text" v-model="loseForm.mdnCode" placeholder="短信验证码">
        </el-input>
        <div class="mdnCode">
          <el-button :type="buttonType" :plain="buttonAble" :disabled="buttonAble" @click="getMdnCode">{{ content }}</el-button>
        </div>
      </el-form-item>
      <div class="password-question">
        <span>如有问题请拨打客服：000-000-0000</span>
      </div>
      <div class="submit-button confirm-button" @click="handle"></div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      const mdnValid = (rule, value, callback) => {
        if (value.length === 11 || value.length === 13) {
          var patrn = /^[0-9]*$/
          if (!patrn.test(value)) {
            callback(new Error('手机号格式不正确'))
          } else {
            callback()
          }
        } else {
          callback(new Error('手机号格式不正确'))
        }
      }
      const imgCodeValid = (rule, value, callback) => {
        if (value !== this.identifyCode) {
          callback(new Error('图形验证码不正确'))
        } else {
          callback()
        }
      }
      return {
        loseForm: {
          mdn: '',
          imgCode: '',
          mdnCode: ''
        },
        identifyCodes: '1234567890',
        identifyCode: '',
        buttonType: 'primary',
        buttonAble: false,
        wait: 60,
        content: '获取验证码',
        loseRules: {
          mdn: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { validator: mdnValid, trigger: 'blur' }],
          imgCode: [
            { required: true, message: '图形验证码不能为空', trigger: 'blur' },
            { validator: imgCodeValid, trigger: 'blur' }],
          mdnCode: [
            { required: true, message: '短信验证码不能为空', trigger: 'blur' }]
        }
      }
    },
    mounted() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
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
        if (this.loseForm.mdn == null || this.loseForm.mdn === '') {
          this.$alert('请先输入手机号', '警告', {
            confirmButtonText: '关闭',
            type: 'warning'
          })
        } else {
          this.$refs.loseForm.validateField('mdn', bool => {
            if (bool === '') {
              this.$refs.loseForm.validateField('imgCode', bool => {
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
        this.$refs.loseForm.validate(valid => {
          if (valid) {
            this.$emit('resetMdn', this.loseForm.mdn)
          }
        })
      }
    }
  }
</script>
<style>
  .password-back {
    width: 59px;
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
