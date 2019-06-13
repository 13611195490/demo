<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="120px" :rules="dataRule">
      <el-form-item label="规划名称" prop="planName">
        <el-input type="text" placeholder="请输入" v-model="formBean.planName" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="规划时间" prop="planYear">
        <el-date-picker v-model="formBean.planYear" :editable=false align="right" value-format="yyyy" format="yyyy" type="year" placeholder="选择年"> </el-date-picker>
      </el-form-item>
      <el-form-item label="规划内容" prop="planRemark">
        <el-input type="textarea" placeholder="请输入" v-model="formBean.planRemark" autocomplete="off" :rows="6" ></el-input>
      </el-form-item>
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
        title:'',
        formBean:{
          planId:'',
          planName:'',
          planYear:'',
          planRemark:'',
          planState:0
        },
        visible:false,
        dataRule: {
          planName: [{required: true, message: '规划名称不能为空', trigger: 'blur'}],
          planYear: [{required: true, message: '规划时间不能为空', trigger: 'blur'}],
          planRemark: [{required: true, message: '规划内容不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init(planId){
        this.visible = true
        this.title = planId==undefined?'新增':'修改'
        this.$nextTick(() => {
            this.$refs['formBean'].resetFields()
        })
        if(planId != null && planId != undefined){
          this.$get('/PPlan/findOne/'+planId).then((response) => {
            if (response && response.code === 0) {
              this.formBean = response.data
            }
          })
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('/PPlan/saveOrUpdate',this.formBean).then((data) => {
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
        this.$emit('hidePopup')
      }
    }
  }
</script>
