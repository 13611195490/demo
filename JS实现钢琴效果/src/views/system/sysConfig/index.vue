<template>
<div id="content">
  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 配置定制</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/sysConfig/queryAll' }">配置定制</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
  <div class="monitorElcIn">
    <el-row class="tableCard firstCard">
      <el-col class="rootCard">
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="180px">
          <el-form-item label="登录失败限制次数" prop="loginFailedTimes" style="display: inline-block;width:47%">
            <el-input v-model.number="dataForm.loginFailedTimes" placeholder="请输入登录失败限制次数" oninput="if(value.length>3)value=value.slice(0,3)"></el-input>
          </el-form-item>
          <el-form-item label="登录失败锁定时间(分钟)" prop="loginLockDate" style="display: inline-block;width:47%">
            <el-input v-model.number="dataForm.loginLockDate" placeholder="请输入登录失败锁定时间" oninput="if(value.length>11)value=value.slice(0,11)"></el-input>
          </el-form-item>
          <el-form-item label="日志容量上限" prop="logCapacity" style="display: inline-block;width:47%">
            <el-input v-model.number="dataForm.logCapacity" placeholder="请输入日志容量上限" oninput="if(value.length>11)value=value.slice(0,11)"></el-input>
          </el-form-item>
          <el-form-item label="休眠时长（天）" prop="dormancyTime" style="display: inline-block;width:47%">
            <el-input v-model.number="dataForm.dormancyTime" placeholder="请输入休眠时长" oninput="if(value.length>5)value=value.slice(0,5)"></el-input>
          </el-form-item>
          <el-form-item label="临时账号有效期(天)" prop="userEffectiveTime" style="display: inline-block;width:47%">
            <el-input v-model.number="dataForm.userEffectiveTime" placeholder="请输入临时账号有效期" oninput="if(value.length>3)value=value.slice(0,3)"></el-input>
          </el-form-item>
          <el-form-item label="最大并发连数" prop="connectLimit" style="display: inline-block;width:47%">
            <el-input v-model.number="dataForm.connectLimit" placeholder="请输入最大并发连数" oninput="if(value.length>4)value=value.slice(0,4)"></el-input>
          </el-form-item>
          <el-form-item label="ip黑名单（,号拼接）" prop="ipLimits" style="display: inline-block;width:94.5%">
            <el-input type="textarea" v-model="dataForm.ipLimits" placeholder="例：127.0.0.1,127.0.0.2"></el-input>
          </el-form-item>
        </el-form>
        <span>
          <el-button class="subbutton" type="primary" @click="dataFormSubmit()">保存配置</el-button>
        </span>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
import axios from "axios"

export default {
  name: 'test',
  data() {
    return {
      visible: true,
      dataForm: {
        loginFailedTimes:'',
        loginLockDate: '',
        logCapacity: '',
        dormancyTime:'',
        userEffectiveTime:'',
        connectLimit:'',
        ipLimits:''
      },
      dataRule: {
        loginFailedTimes: [{required: true, message: '登录失败限制次数不能为空', trigger: 'blur'}],
        loginLockDate: [{required: true, message: '登录失败锁定时间不能为空', trigger: 'blur'}],
        logCapacity: [{required: true, message: '系统日志容量不能为空', trigger: 'blur'}],
        dormancyTime: [{required: true, message: '休眠时长（天）不能为空', trigger: 'blur'}],
        userEffectiveTime: [{required: true, message: '临时账号有效期不能为空', trigger: 'blur'}],
        connectLimit: [{required: true, message: '最大并发连数不能为空', trigger: 'blur'}]
      }
    }
  },
  created() {
		this.init()
  },
  methods: {
    init () {
        this.$post('/sys/sysConfig/queryAll').then((data) => {
          if (data && data.code === 0) {
              this.dataForm.loginFailedTimes = data.sysConfig.loginFailedTimes
              this.dataForm.loginLockDate = data.sysConfig.loginLockDate
              this.dataForm.logCapacity = data.sysConfig.logCapacity
              this.dataForm.dormancyTime = data.sysConfig.dormancyTime
              this.dataForm.userEffectiveTime = data.sysConfig.userEffectiveTime
              this.dataForm.connectLimit = data.sysConfig.connectLimit
              this.dataForm.ipLimits = data.sysConfig.ipLimits
          }
        })
      },
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params =  {
                'loginFailedTimes'       : this.dataForm.loginFailedTimes,
                'loginLockDate'        : this.dataForm.loginLockDate,
                'logCapacity'        : this.dataForm.logCapacity,
                'dormancyTime'         : this.dataForm.dormancyTime,
                'userEffectiveTime'       : this.dataForm.userEffectiveTime,
                'connectLimit'        : this.dataForm.connectLimit
            }
            this.$post(`/sys/sysConfig/update`,params).then((data) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500
                })
              }
            })
          }
        })
      }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.monitorElcIn{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.rootCard{
  background:#F6FAFE;
  border-radius: 10px;
  padding-top:20px;
  text-align: center;
}
.subbutton{
  width: 200px;
  margin-bottom: 20px;
}
</style>