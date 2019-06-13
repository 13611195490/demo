<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="120px" :rules="dataRule">
      <el-row>
        <el-col span="12">
          <el-form-item label="规划年份" prop="pumpedYear">
            <el-date-picker v-model="formBean.pumpedYear" align="right" :editable=false value-format="yyyy" format="yyyy" type="year" placeholder="选择年"> </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="所属分区" prop="pumpedPartition">
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedPartition" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="所属厂站" prop="pumpedFactory" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedFactory" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="电压等级" prop="pumpedVoltageGrade" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedVoltageGrade" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="机组台数" prop="pumpedCrew" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedCrew" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="单机容量" prop="pumpedCapacity" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedCapacity" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="最大技术出力" prop="pumpedMaxoutput" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedMaxoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="最小技术出力" prop="pumpedMinoutput">
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedMinoutput" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="电量转换率" prop="pumpedTransformation">
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedTransformation" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="库容名称" prop="pumpedStorageCapacity">
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedStorageCapacity" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="蓄电量最大值" prop="pumpedMaxpowerstorage" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedMaxpowerstorage" autocomplete="off" ></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="蓄电量最小值" prop="pumpedMinpowerstorage" >
            <el-input type="text" placeholder="请输入" v-model="formBean.pumpedMinpowerstorage" autocomplete="off" ></el-input>
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
          pumpedId:'',
          pumpedPlanId:'',
          pumpedYear:'',
          pumpedPartition:'',
          pumpedFactory:'',
          pumpedVoltageGrade:'',
          pumpedCrew:'',
          pumpedCapacity:'',
          pumpedTransformation:'',
          pumpedMaxoutput:'',
          pumpedMinoutput:'',
          pumpedStorageCapacity:'',
          pumpedMaxpowerstorage:'',
          pumpedMinpowerstorage:'',
          pumpedState:0
        },
        dataRule: {
          pumpedYear: [{required: true, message: '规划年份不能为空', trigger: 'blur'}],
          pumpedPartition: [{required: true, message: '所属分区不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init(id,activeName,row){
        this.visible = true
        this.$nextTick(() => {
            this.$refs['formBean'].resetFields()
        })
        this.formBean.pumpedPlanId = id
        if(row != null && row.pumpedId != null && row.pumpedId != undefined){
          this.$get('/PPumpedStorage/findOne/'+row.pumpedId).then((response) => {
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
            this.$post('/PPumpedStorage/saveOrUpdate',this.formBean).then((data) => {
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

