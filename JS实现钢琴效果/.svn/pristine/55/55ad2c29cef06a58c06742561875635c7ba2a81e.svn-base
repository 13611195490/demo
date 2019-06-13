<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()"
             label-width="80px">

      <el-form-item label="用户名" prop="userAcct" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.userAcct" placeholder="请输入帐号"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="staffName" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.staffName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="民族" prop="staffEthnic" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.staffEthnic" placeholder="请输入民族"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>

      <el-form-item label="生日" prop="staffBirthday" style="display: inline-block;width:47%">
          <el-date-picker
              v-model="dataForm.staffBirthday"
              format="yyyy-MM-dd"
              placeholder="请选择日期"
              value-format="yyyy-MM-dd" style="display: inline-block;width:100%">
          </el-date-picker>
      </el-form-item>

      <el-form-item label="所属机构" prop="deptCode" style="display: inline-block;width:47%">
      <el-popover
          ref="orgListPopover"
          placement="top-start"
          trigger="click">
          <el-tree
            :data="parentOptions"
            :props="orgListTreeProps"
            node-key="orgNo"
            ref="orgListTree"
            @current-change="orgListTreeCurrentChangeHandle"
            :default-expand-all="true"
            :highlight-current="true"
            :expand-on-click-node="false">
          </el-tree>
      </el-popover>
          <el-input v-model="dataForm.orgName" v-popover:orgListPopover :readonly="true" placeholder="点击选择上级机构"
                  class="org-list__input"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="staffSex" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.staffSex" placeholder="请选择人员性别" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户类型" prop="staffType" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.staffType" placeholder="请选用户类型" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="临时账号" value="0"></el-option>
            <el-option label="长期账号" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="访问时间" prop="visitStarttime" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.visitStarttime" placeholder="请选用系统访问起始时间" class="filter-item input-css" style="display: inline-block;width:100%">
            <el-option label="01:00" value="01:00"></el-option>
            <el-option label="02:00" value="02:00"></el-option>
            <el-option label="03:00" value="03:00"></el-option>
            <el-option label="04:00" value="04:00"></el-option>
            <el-option label="05:00" value="05:00"></el-option>
            <el-option label="06:00" value="06:00"></el-option>
            <el-option label="07:00" value="07:00"></el-option>
            <el-option label="08:00" value="08:00"></el-option>
            <el-option label="09:00" value="09:00"></el-option>
            <el-option label="10:00" value="10:00"></el-option>
            <el-option label="11:00" value="11:00"></el-option>
            <el-option label="12:00" value="12:00"></el-option>
            <el-option label="13:00" value="13:00"></el-option>
            <el-option label="14:00" value="14:00"></el-option>
            <el-option label="15:00" value="15:00"></el-option>
            <el-option label="16:00" value="16:00"></el-option>
            <el-option label="17:00" value="17:00"></el-option>
            <el-option label="18:00" value="18:00"></el-option>
            <el-option label="19:00" value="19:00"></el-option>
            <el-option label="20:00" value="20:00"></el-option>
            <el-option label="21:00" value="21:00"></el-option>
            <el-option label="22:00" value="22:00"></el-option>
            <el-option label="23:00" value="23:00"></el-option>
            <el-option label="24:00" value="24:00"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="至" prop="visitEndtime" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.visitEndtime" placeholder="请选系统访问截止时间" class="filter-item input-css" style="display: inline-block;width:100%">
            <el-option label="01:00" value="01:00"></el-option>
            <el-option label="02:00" value="02:00"></el-option>
            <el-option label="03:00" value="03:00"></el-option>
            <el-option label="04:00" value="04:00"></el-option>
            <el-option label="05:00" value="05:00"></el-option>
            <el-option label="06:00" value="06:00"></el-option>
            <el-option label="07:00" value="07:00"></el-option>
            <el-option label="08:00" value="08:00"></el-option>
            <el-option label="09:00" value="09:00"></el-option>
            <el-option label="10:00" value="10:00"></el-option>
            <el-option label="11:00" value="11:00"></el-option>
            <el-option label="12:00" value="12:00"></el-option>
            <el-option label="13:00" value="13:00"></el-option>
            <el-option label="14:00" value="14:00"></el-option>
            <el-option label="15:00" value="15:00"></el-option>
            <el-option label="16:00" value="16:00"></el-option>
            <el-option label="17:00" value="17:00"></el-option>
            <el-option label="18:00" value="18:00"></el-option>
            <el-option label="19:00" value="19:00"></el-option>
            <el-option label="20:00" value="20:00"></el-option>
            <el-option label="21:00" value="21:00"></el-option>
            <el-option label="22:00" value="22:00"></el-option>
            <el-option label="23:00" value="23:00"></el-option>
            <el-option label="24:00" value="24:00"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户端IP" prop="ipLimit" style="display: inline-block;width:94.5%">
        <el-input type="textarea" v-model="dataForm.ipLimit" placeholder="例：127.0.0.1,127.0.0.2"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark" style="display: inline-block;width:94.5%">
        <el-input type="textarea" v-model="dataForm.remark"></el-input>
      </el-form-item>
			
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      var checkEmail = (rule, value, callback) => {
            if (!value) {
                return callback();
            }
            if (value) {
                setTimeout(() => {
                    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                    if (!reg.test(value)) {
                        callback(new Error('请输入有效的电子邮箱！'));
                    } else {
                        callback();
                    }
                }, 500);
            }
        };
      return {
        parentOptions:[],
        orgListTreeProps: {
          label: 'orgName',
          children: 'children'
        },
        visible: false,
        dataForm: {
          id: 0,
          orgName:'',
          staffName: '',
          staffSex: '',
          staffType: '',
          userAcct:'',
          userPwd:'',
          email:'',
          deptCode:'',
          staffBirthday:null,
          state: 1,
          staffEthnic:'',
          visitStarttime:'',
          visitEndtime:'',
          ipLimit:''
        },
        dataRule: {
          userAcct: [{required: true, message: '账号不能为空', trigger: 'blur'},{ max: 20, message: "超过最大字符", trigger: "blur" }],
          staffName: [{required: true, message: '用户名不能为空', trigger: 'blur'},{ max: 20, message: "超过最大字符", trigger: "blur" }],
          staffSex: [{required: true, message: '性别不能为空', trigger: 'blur'}],
          email: [{required: true, validator: checkEmail, trigger: ['blur,change']},{ max: 50, message: "超过最大字符", trigger: "blur" }],
          staffType: [{required: true, message: '人员类型不能为空', trigger: 'blur'}],
          staffBirthday: [{ max: 50, message: "超过最大字符", trigger: "blur" }],
          staffEthnic: [{ max: 10, message: "超过最大字符", trigger: "blur" }],
          ipLimit: [{ max: 255, message: "超过最大字符", trigger: "blur" }],
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        $("#p").css("display","block")
        this.$get('/sys/dept/queryAll').then((data) => {
            data.list.push({
            'orgNo': '0',
            'orgName': '顶级'
          })
          this.parentOptions = this.treeDataTranslate(data.list, 'orgNo', 'parentNo')
        }).then(()=>{
          this.visible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].resetFields()
          })
        }).then(()=>{
          if(this.dataForm.id){
          this.$get(`/sys/staff/info/${this.dataForm.id}`).then((data) => {
            if (data && data.code === 0) {
                this.dataForm.id = data.staff.id
                this.dataForm.staffName = data.staff.staffName
                this.dataForm.userAcct = data.staff.userAcct
                this.dataForm.staffEthnic = data.staff.staffEthnic
                this.dataForm.email = data.staff.email
                this.dataForm.staffSex = data.staff.staffSex.toString()
                this.dataForm.staffType = data.staff.staffType.toString()
                this.dataForm.state = data.staff.state
                this.dataForm.orgName = this.transOrg(data.staff.deptCode)
                this.dataForm.staffBirthday = data.staff.staffBirthday
                this.dataForm.visitStarttime = data.staff.visitStarttime
                this.dataForm.visitEndtime = data.staff.visitEndtime
                this.dataForm.ipLimit = data.staff.ipLimit
                this.dataForm.remark = data.staff.remark
            }
          })
					$("#p").css("display","none")
        }
        })
				
      },
      // 机构树设置当前选中节点
      orgListTreeSetCurrentNode (type) {
        if (type === 'mod') {
          this.$refs.orgListTree.setCurrentKey(this.dataForm.deptCode)
          this.dataForm.parentName = (this.$refs.orgListTree.getCurrentNode() || {})['orgName']
        }
      },
      // 机构树选中
      orgListTreeCurrentChangeHandle (data) {
        this.dataForm.deptCode = data.orgNo
        this.dataForm.orgName = data.orgName
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params =  {
                'id'              : this.dataForm.id || undefined,
                'staffName'       : this.dataForm.staffName,
                'staffSex'        : this.dataForm.staffSex,
                'staffType'       : this.dataForm.staffType,
                'staffEthnic'     : this.dataForm.staffEthnic,
                'userAcct'        : this.dataForm.userAcct,
                'userPwd'         : this.dataForm.userPwd,
                'email'           : this.dataForm.email,
                'deptCode'        : this.dataForm.deptCode, 
                'staffBirthday'   : this.dataForm.staffBirthday,
                'state'           : this.dataForm.state,
                'visitStarttime'  : this.dataForm.visitStarttime,
                'visitEndtime'    : this.dataForm.visitEndtime,
                'ipLimit'          : this.dataForm.ipLimit,
                'remark'          : this.dataForm.remark
            }
            this.$post(`/sys/staff/${!this.dataForm.id ? 'save' : 'update'}`,params).then((data) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500
                })
                this.visible = false
                this.$emit('refreshDataList')
              }
        })
        }
        })
      }
    },
  }
</script>
<style scoped>
	
</style>
