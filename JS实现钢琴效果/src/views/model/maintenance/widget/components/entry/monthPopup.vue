<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="指标条目ID" prop="IndexItemID" :rules="formRuleRequired('指标条目ID不能为空')">
        <el-input type="text" placeholder="请输入" v-model="form.IndexItemID" autocomplete="off" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="YearDate" :rules="formRuleRequired('时间不能为空')">
        <el-date-picker v-model="form.YearDate" :picker-options="pickerOptions" value-format="yyyy-MM-dd" format="yyyy-MM-dd " type="date" placeholder="请输入" :disabled="editType==='update'"></el-date-picker>
      </el-form-item>
      <el-row>
        <el-col :span="8">
          <el-form-item label="一月数据" prop="Mon1">
            <el-input type="text" placeholder="请输入" v-model="form.Mon1" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="二月数据" prop="Mon2">
            <el-input type="text" placeholder="请输入" v-model="form.Mon2" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="三月数据" prop="Mon3">
            <el-input type="text" placeholder="请输入" v-model="form.Mon3" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="四月数据" prop="Mon4">
            <el-input type="text" placeholder="请输入" v-model="form.Mon4" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="五月数据" prop="Mon5">
            <el-input type="text" placeholder="请输入" v-model="form.Mon5" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="六月数据" prop="Mon6">
            <el-input type="text" placeholder="请输入" v-model="form.Mon6" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="七月数据" prop="Mon7">
            <el-input type="text" placeholder="请输入" v-model="form.Mon7" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
           <el-form-item label="八月数据" prop="Mon8">
            <el-input type="text" placeholder="请输入" v-model="form.Mon8" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="九月数据" prop="Mon9">
            <el-input type="text" placeholder="请输入" v-model="form.Mon9" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="十月数据" prop="Mon10">
            <el-input type="text" placeholder="请输入" v-model="form.Mon10" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
           <el-form-item label="十一月数据" prop="Mon11">
            <el-input type="text" placeholder="请输入" v-model="form.Mon11" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="十二月数据" prop="Mon12">
            <el-input type="text" placeholder="请输入" v-model="form.Mon12" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
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
