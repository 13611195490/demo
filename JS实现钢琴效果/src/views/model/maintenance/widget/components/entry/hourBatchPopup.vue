<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="指标条目ID" prop="IndexItemID" :rules="formRuleRequired('指标条目ID不能为空')">
        <el-input type="text" placeholder="请输入" v-model="form.IndexItemID" autocomplete="off" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="year" :rules="formRuleRequired('时间不能为空')">
        <el-date-picker v-model="form.year" :picker-options="pickerOptions" value-format="yyyy-MM-dd" format="yyyy-MM-dd " type="date" placeholder="请输入" ></el-date-picker>
      </el-form-item>
      <el-form-item label="文件" prop="pictureFile">
        <div>
          <div class="el-upload el-upload--text" style="max-width:333px;">
            <el-upload :show-file-list="true" :action="uploadFileUrl"
              :on-remove="fileUploadRemove" :on-success="fileUploadSuccess" :before-upload = "fileUploadCheck" style="text-align:left;">
              <el-button type="text" >添加文件</el-button>
            </el-upload>
          </div>
          <div class="nsd-form-info ">仅支持xls和xlsx类型文件</div>
        </div>  
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
        formLabelWidth: '120px',
        uploadFileUrl: `${process.env.BASE_API}/xnyxn_business/business/forcast/insertForcastData8760Excel.do`
      }
    },
    props: {
      title: String,
      form: Object,
      visible: Boolean
    },
    methods: {
      formRuleRequired(message) {
        return [{ required: true, message }]
      },
      // 附件上传文件格式校验
      fileUploadCheck(file) {
        const legalExt = ['.xls', '.xlsx']
        let ext = null
        const name = file.name.toLowerCase()
        const i = name.lastIndexOf('.')
        if (i > -1) {
          ext = name.substring(i)
        }
        let isLegalFile = false
        for (var j = 0; j < legalExt.length; j++) {
          if (legalExt[j] === ext) {
            isLegalFile = true
            break
          }
        }
        const isLt10M = file.size / 1024 / 1024 < 10
        if (!isLegalFile) {
          this.$alert('不支持此类型文件，请重新选择', '警告', {
            confirmButtonText: '关闭',
            type: 'warning'
          })
        }
        if (!isLt10M) {
          this.$alert('文件大小超过10M，请重新选择', '警告', {
            confirmButtonText: '关闭',
            type: 'warning'
          })
        }
        return isLegalFile && isLt10M
      },
      // 文件上传成功
      fileUploadSuccess: function(response, file, fileList) {
        if (fileList.length > 1) {
          fileList.splice(0, 1)
        }
        this.file = file
        this.form.pictureFile = fileList
      },
      // 移除附件
      fileUploadRemove: function(file, fileList) {
        this.form.pictureFile = fileList
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
