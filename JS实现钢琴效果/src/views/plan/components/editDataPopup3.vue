<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="120px" :rules="dataRule">
      <el-row>
        <el-col span="12">
          <el-form-item label="规划年份" prop="zoneYear">
            <el-date-picker v-model="formBean.zoneYear" align="right" :editable=false value-format="yyyy" format="yyyy" type="year" placeholder="选择年"> </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="所属厂站1" prop="zoneFactory1">
            <el-input type="text" placeholder="请输入" v-model="formBean.zoneFactory1" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="厂站所属分区1" prop="zonePartitionFactory1" >
            <el-input type="text" placeholder="请输入" v-model="formBean.zonePartitionFactory1" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="所属厂站2" prop="zoneFactory2" >
            <el-input type="text" placeholder="请输入" v-model="formBean.zoneFactory2" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="厂站所属分区2" prop="zonePartitionFactory2" >
            <el-input type="text" placeholder="请输入" v-model="formBean.zonePartitionFactory2" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="电压等级" prop="zoneVoltageGrade" >
            <el-input type="text" placeholder="请输入" v-model="formBean.zoneVoltageGrade" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="额定电流" prop="zoneRatedCurrent" >
            <el-input type="text" placeholder="请输入" v-model="formBean.zoneRatedCurrent" autocomplete="off" ></el-input>
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
          zoneId:'',
          zonePlanId:'',
          zoneYear:'',
          zoneFactory1:'',
          zonePartitionFactory1:'',
          zoneFactory2:'',
          zonePartitionFactory2:'',
          zoneVoltageGrade:'',
          zoneRatedCurrent:'',
          zoneState:0
        },
        dataRule: {
          zoneYear: [{required: true, message: '规划年份不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init(id,activeName,row){
        this.visible = true
        this.$nextTick(() => {
            this.$refs['formBean'].resetFields()
        })
        this.formBean.zonePlanId = id
        if(row != null && row.zoneId != null && row.zoneId != undefined){
          this.$get('/PZoneLoad/findOne/'+row.zoneId).then((response) => {
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
            this.$post('/PZoneLoad/saveOrUpdate',this.formBean).then((data) => {
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

