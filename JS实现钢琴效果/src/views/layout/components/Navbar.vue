<template>
  <el-menu class="navbarNormal navbar" mode="horizontal" id="menu">
    <img src="@/assets/images/logo4.png" class="nsd-logo">
    <span class="nsd-logo-test">甘肃省新能源消纳监测预警系统</span>
    <!-- <breadcrumb></breadcrumb> -->
    <div class="setup-container">
      <el-dropdown >
        <span class="el-dropdown-link" style="margin-right: 20px;">
          <svg-icon  class="icon iconfont nsd-icon-morentouxiang" />
          {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="isshow = true">修改密码</el-dropdown-item>
          <el-dropdown-item>管理信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
			<!-- <div class="box" v-if="isshow">
				<el-form :model="formData" ref="formData" :rules="rules" label-width="100px">
				  <el-form-item label="当前密码:" prop="password" style="height: 50px;margin-top: 15px;">
				    <el-input v-model="formData.password" placeholder="请输入" type="password" style="width: 90%;"></el-input>
				  </el-form-item>
				  <el-form-item label="新密码:" prop="passwordNew" style="height: 50px;margin-top: 15px;">
				    <el-input v-model="formData.passwordNew" placeholder="请输入" type="password" style="width: 90%;"></el-input>
				  </el-form-item>
				  <el-form-item label="确认新密码:" prop="passwordNewRe" style="height: 50px;margin-top: 15px;">
				    <el-input v-model="formData.passwordNewRe" placeholder="请输入" type="password" style="width: 90%;"></el-input>
				  </el-form-item>
				</el-form>
				<el-button  class="btn-qx" @click.native="quxiao">取消</el-button>
				<el-button type="primary" @click="submitForm('formData')" class="btn">确定</el-button>
			</div> -->
     <!-- <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link" style="margin-right: 20px;">
          <svg-icon class="icon iconfont nsd-icon-xiaoxi" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>产品消息</el-dropdown-item>
          <el-dropdown-item>安全消息</el-dropdown-item>
          <el-dropdown-item>服务消息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <!-- <span class="el-dropdown-link" style="margin-right: 20px;" @click="changeCommand"><svg-icon class="icon iconfont nsd-icon-shezhi colorGrey" /></span> -->
      <span class="el-dropdown-link" style="margin-right: 20px;" @click="handleCommand"><svg-icon class="icon iconfont nsd-icon-tuichu colorGrey" /></span>
      <edit-password-detail v-on:hidePopup="hidePopup" :visible="isshow"></edit-password-detail>
    </div>
  </el-menu>
</template>

<script>
import axios from "axios"
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import { getPersonnelName } from '@/utils/auth'
import EditPasswordDetail from './EditPasswordDetail'

export default {
  data() {
    return {
      username: getPersonnelName(),
      cssStyle: 'normal',
			isshow:false,
			formData: {
			  password: '',
			  passwordNew: '',
			  passwordNewRe: ''
			},		
    }
  },
  components: {
    EditPasswordDetail
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    handleCommand() {
			sessionStorage.setItem('islogin',"false")
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    changeCommand() {
      if (this.cssStyle === 'normal') {
        document.getElementById('menu').className = 'navbarDark navbar'
        this.cssStyle = 'dark'
      } else {
        document.getElementById('menu').className = 'navbarNormal navbar'
        this.cssStyle = 'normal'
      }
    },
		hidePopup() {
      this.isshow = false
    },
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.navbar {
  height: 60px;
  line-height: 60px;
  border-radius: 0px !important;
  .setup-container {
    float: right;
    // color: #fff;
    span {
      margin-right: 40px;
    }
    .remind {
      position: relative;
      top: 2px;
      right: 3px;
    }
    .user {
      width: 30px;
      height: 30px;
      position: relative;
      top: 10px;
    }
  }
  .nsd-logo {
    margin: 10px 15px 0 85px ;
    float: left;
  }
  .nsd-logo-test{
    color: rgb(86,129,183);
    font-size: 20px;
    float: left;
  }
  .iconfont {
    font-size: 22px;
    padding-right: 5px;
  }
}
.colorGrey {
  color: rgb(170,170,170);
}
.box{
	width: 500px;
	height: 300px;
	border: 1px solid #CCCCCC;
	position: fixed;
	top: 150px;
	right: 50px;
	z-index: 99;
	background: white;
}
.box .btn{
	position: absolute;
	right: 10px;
	bottom: 10px;
}
.box .btn-qx{
	position: absolute;
	right: 80px;
	bottom: 10px;
}
</style>

