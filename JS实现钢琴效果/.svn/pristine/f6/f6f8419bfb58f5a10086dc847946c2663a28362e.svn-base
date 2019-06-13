<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="指标条目ID" prop="IndexItemID" :rules="formRuleRequired('指标条目ID不能为空')">
        <el-input type="text" placeholder="请输入" v-model="form.IndexItemID" autocomplete="off" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="YearDate" :rules="formRuleRequired('时间不能为空')">
        <el-date-picker v-model="form.YearDate" value-format="yyyy-MM-dd" format="yyyy-MM-dd " type="date" placeholder="请输入" :disabled="editType==='update'"></el-date-picker>
      </el-form-item>
      <el-form-item label="数据" prop="Data" :rules="formRuleRequired('数据不能为空')">
        <el-input type="text" placeholder="请输入" v-model="form.Data" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('form')">保存</el-button>
      <el-button @click="hidenPopup">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        formLabelWidth: '120px'
      }
    },
    props: {
      title: String,
      form: Object,
      editType: String,
      visible: Boolean
    },
    methods: {
      formRuleRequired(message) {
        return [{ required: true, message }]
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('submitForm')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      hidenPopup() {
        this.$emit('hidePopup')
      },
      close() {
        this.$emit('hidePopup')
      }
    }
  }
</script>
