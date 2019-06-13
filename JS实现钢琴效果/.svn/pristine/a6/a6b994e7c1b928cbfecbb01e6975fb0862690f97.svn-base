<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="80px" :rules="validates">
      <el-form-item label="标签名称" prop="paramName" >
        <el-input type="text" placeholder="请输入" v-model="formBean.paramName" autocomplete="off"></el-input>
      </el-form-item>
      <el-row>
        <el-col span="12">
          <el-form-item label="数值非空" prop="nullable" >
            <el-select v-model="formBean.nullable" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="是否多值" prop="isMultiValue" >
            <el-select v-model="formBean.isMultiValue" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="标签描述" prop="comments" >
        <el-input type="textarea" placeholder="请输入" v-model="formBean.comments" :rows="6" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('formBean')">保存</el-button>
      <el-button @click="hidenPopup">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        formLabelWidth: '120px',
        formBean:{
          paramId:'',
          parentId:'',
          comments:'',
          paramName:'',
          nullable:'',
          isMultiValue:'',
          enable:'',
          param:''
        },
        options: [{
          value: 'Y',
          label: '可为空'
        }, {
          value: 'N',
          label: '不可为空'
        }],
        options2: [{
          value: 'Y',
          label: '可多值'
        }, {
          value: 'N',
          label: '不可多值'
        }],
        validates:{
           paramName:[{required: true, message: '标签名称不能为空', trigger: 'blur'}],
           comments:[{required: true, message: '标签描述不能为空', trigger: 'blur'}],
           nullable:[{required: true, message: '数值非空不能为空', trigger: 'blur'}],
           isMultiValue:[{required: true, message: '是否多值不能为空', trigger: 'blur'}],
        }
      }
    },
    props: {
      title: String,
      form: Object,
      editType: String,
      visible: Boolean
    },
    methods: {
      init(paramId,param){
        if(paramId != null && paramId != undefined){
          this.formBean.parentId = paramId
        }
        if(param == "修改"){
          this.$get('cparametersDict/info/'+paramId).then((response) => {
              if(response && response.code === 0){
                this.formBean = response.data
                this.formBean.param = param
              }
          })
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('cparametersDict/save',this.formBean).then((response) => {
              if(response && response.code === 0){
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500
                })
                this.$refs['formBean'].resetFields()
                this.visible = false
                this.$emit('refreshDataList')
              }
            })
          }
        })
      },
      hidenPopup() {
        this.$refs['formBean'].resetFields()
        this.$emit('hidePopup')
      },
      close() {
        this.$refs['formBean'].resetFields()
        this.$emit('hidePopup')
      }
    }
  }
</script>
