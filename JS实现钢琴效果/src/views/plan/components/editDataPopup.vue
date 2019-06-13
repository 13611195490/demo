<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="120px" :rules="dataRule">
      <el-row>
        <el-col span="12">
          <el-form-item label="规划年份" prop="thermalYear">
            <el-date-picker v-model="formBean.thermalYear" align="right" :editable=false value-format="yyyy" format="yyyy" type="year" placeholder="选择年"> </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="所属分区" prop="thermalPartition">
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalPartition" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="所属厂站" prop="thermalFactory" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalFactory" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="电压等级" prop="thermalVoltageGrade" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalVoltageGrade" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="机组台数" prop="thermalCrew" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalCrew" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="单机容量" prop="thermalCapacity" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalCapacity" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="24">
          <el-form-item label="是否为供热机组" prop="thermalIsHeating" >
            <el-select v-model="formBean.thermalIsHeating" placeholder="请选择" clearable >
              <el-option label="是" value="是"> </el-option>
              <el-option label="否" value="否"> </el-option>
            </el-select>  
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="非供热最大出力" prop="thermalNotheatingMaxoutput" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalNotheatingMaxoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="非供热最小出力" prop="thermalNotheatingMinoutput">
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalNotheatingMinoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="供热最大出力" prop="thermalHeatingMaxoutput">
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalHeatingMaxoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="供热最小出力" prop="thermalHeatingMinoutput">
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalHeatingMinoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="上坡爬率" prop="thermalUpRate" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalUpRate" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="下坡爬率" prop="thermalDownRate" >
            <el-input type="text" placeholder="请输入" v-model="formBean.thermalDownRate" autocomplete="off" ></el-input>
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
          thermalId:'',
          thermalPlanId:'',
          thermalYear:'',
          thermalPartition:'',
          thermalFactory:'',
          thermalVoltageGrade:'',
          thermalCrew:'',
          thermalCapacity:'',
          thermalIsHeating:'',
          thermalNotheatingMaxoutput:'',
          thermalNotheatingMinoutput:'',
          thermalHeatingMaxoutput:'',
          thermalHeatingMinoutput:'',
          thermalUpRate:'',
          thermalDownRate:'',
          thermalState:0
        },
        dataRule: {
          thermalYear: [{required: true, message: '规划年份不能为空', trigger: 'blur'}],
          thermalPartition: [{required: true, message: '所属分区不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init(id,activeName,row){
        this.visible = true
        this.$nextTick(() => {
            this.$refs['formBean'].resetFields()
        })
        this.formBean.thermalPlanId = id
        if(row != null && row.thermalId != null && row.thermalId != undefined){
          this.$get('/PThermalPower/findOne/'+row.thermalId).then((response) => {
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
            this.$post('/PThermalPower/saveOrUpdate',this.formBean).then((data) => {
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

