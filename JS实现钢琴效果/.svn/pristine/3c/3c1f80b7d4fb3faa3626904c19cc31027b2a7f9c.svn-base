<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="120px" :rules="dataRule">
      <el-row>
        <el-col span="12">
          <el-form-item label="规划年份" prop="hydroYear">
            <el-date-picker v-model="formBean.hydroYear" align="right" :editable=false value-format="yyyy" format="yyyy" type="year" placeholder="选择年"> </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="所属分区" prop="hydroPartition">
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroPartition" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="所属厂站" prop="hydroFactory" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroFactory" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="电压等级" prop="hydroVoltageGrade" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroVoltageGrade" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="机组台数" prop="hydroCrew" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroCrew" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="单机容量" prop="hydroCapacity" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroCapacity" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="机组最大出力" prop="hydroMaxoutput" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroMaxoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="机组最小出力" prop="hydroMinoutput">
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroMinoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="上坡爬率" prop="hydroUpRate" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroUpRate" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="下坡爬率" prop="hydroDownRate" >
            <el-input type="text" placeholder="请输入" v-model="formBean.hydroDownRate" autocomplete="off" ></el-input>
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
          hydroId:'',
          hydroPlanId:'',
          hydroYear:'',
          hydroPartition:'',
          hydroFactory:'',
          hydroVoltageGrade:'',
          hydroCrew:'',
          hydroCapacity:'',
          hydroMaxoutput:'',
          hydroMinoutput:'',
          hydroUpRate:'',
          hydroDownRate:'',
          hydroState:0
        },
        dataRule: {
          hydroYear: [{required: true, message: '规划年份不能为空', trigger: 'blur'}],
          hydroPartition: [{required: true, message: '所属分区不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init(id,activeName,row){
        this.visible = true
        this.$nextTick(() => {
            this.$refs['formBean'].resetFields()
        })
        this.formBean.hydroPlanId = id
        if(row != null && row.hydroId != null && row.hydroId != undefined){
          this.$get('/PHydroPower/findOne/'+row.hydroId).then((response) => {
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
            this.$post('/PHydroPower/saveOrUpdate',this.formBean).then((data) => {
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

