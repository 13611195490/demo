<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="指标条目ID" prop="IndexItemID" :rules="formRuleRequired('指标条目ID不能为空')">
        <el-input type="text" placeholder="请输入" v-model="form.IndexItemID" autocomplete="off" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="起始时间" prop="fromdate" :rules="formRuleRequired('起始时间不能为空')">
        <el-date-picker v-model="form.fromdate" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="请输入" :disabled="editType==='update'"></el-date-picker>
      </el-form-item>
      <el-form-item label="截止时间" prop="enddate" :rules="formRuleRequired('截止时间不能为空')">
        <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="请输入" :disabled="editType==='update'"></el-date-picker>
      </el-form-item>
      <el-form-item label="数据" prop="data" :rules="formRuleRequired('数据不能为空')">
        <el-input type="text" placeholder="请输入" v-model="form.data" autocomplete="off"></el-input>
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
