<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="120px" :rules="dataRule">
      <el-row>
        <el-col span="12">
          <el-form-item label="数据时间" prop="loadDate">
            <el-date-picker v-model="formBean.loadDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="所属分区" prop="loadPartition">
            <el-input type="text" placeholder="请输入" v-model="formBean.loadPartition" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="有功出力" prop="loadActiveoutput" >
            <el-input type="text" placeholder="请输入" v-model="formBean.loadActiveoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="无功出力" prop="loadNotactiveoutput" >
            <el-input type="text" placeholder="请输入" v-model="formBean.loadNotactiveoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('formBean')">保存</el-button>
      <el-button @click="visible = false">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        visible:false,
        title:'新增',
        formBean:{
          loadId:'',
          loadPlanId:'',
          loadDate:'',
          loadPartition:'',
          loadActiveoutput:'',
          loadNotactiveoutput:'',
          loadState:0
        },
        dataRule: {
          loadDate: [{required: true, message: '数据时间不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init(id,activeName,row){
        this.visible = true
        this.$nextTick(() => {
            this.$refs['formBean'].resetFields()
        })
        this.formBean.loadPlanId = id
        if(row != null && row.loadId != null && row.loadId != undefined){
          this.$get('/PLoadForecasting/findOne/'+row.loadId).then((response) => {
            if (response && response.code === 0) {
              this.formBean = response.data
            }
          })
          this.title = '修改'
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('/PLoadForecasting/saveOrUpdate',this.formBean).then((data) => {
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
      },
      close() {
        this.validate = false
      }
    }
  }
</script>
<style >
.el-dialog__body {
    padding: 0px 20px!important;
    color: #606266;
    font-size: 14px;
}
</style>

