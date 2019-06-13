<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()"label-width="80px">

      <el-form-item label="场站名称" prop="stationName" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.stationName" placeholder="场站名称"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="stationAddress" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.stationAddress" placeholder="地址"></el-input>
      </el-form-item>

      <el-form-item label="项目公司" prop="itemCompany" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.itemCompany" placeholder="请输入项目公司"></el-input>
      </el-form-item>

      <el-form-item label="所属集团" prop="affiliatedGroup" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.affiliatedGroup" placeholder="请输入所属集团"></el-input>
      </el-form-item>

      <el-form-item label="经度" prop="longitude" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.longitude" placeholder="请输入经度"></el-input>
      </el-form-item>

      <el-form-item label="纬度" prop="latitude" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.latitude" placeholder="请输入纬度"></el-input>
      </el-form-item>

      <el-form-item label="场站类型" prop="stationType" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.stationType" placeholder="请输入场站类型"></el-input>
      </el-form-item>

      <el-form-item label="装机规模" prop="installedCapacity" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.installedCapacity" placeholder="请输入装机规模"></el-input>
      </el-form-item>

      <el-form-item label="场站当前状态" prop="stationNowState" style="display: inline-block;width:53%">
        <el-input v-model="dataForm.stationNowState" placeholder="请输入场站当前状态"></el-input>
      </el-form-item>

      <el-form-item label="核准时间" prop="approvalTime" style="display: inline-block;width:47%">
        <el-date-picker
          v-model="dataForm.approvalTime"
          format="yyyy-MM-dd"
          placeholder="请选择日期"
          value-format="yyyy-MM-dd" style="display: inline-block;width:100%">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="是否落实" prop="isImplement" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isImplement" placeholder="是否落实" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="并网时间" prop="onGridTime" style="display: inline-block;width:47%">
        <el-date-picker
          v-model="dataForm.onGridTime"
          format="yyyy-MM-dd"
          placeholder="请选择日期"
          value-format="yyyy-MM-dd" style="display: inline-block;width:100%">
        </el-date-picker>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          stationName:'',
          stationAddress: '',
          itemCompany: '',
          affiliatedGroup:'',
          stationType:'',
          installedCapacity:'',
          stationNowState:'',
          approvalTime:'',
          isImplement: '',
          onGridTime:'',
          longitude:'',
          latitude:''
        },
        dataRule: {
          stationName: [{required: true, message: '场站名称不能为空', trigger: 'blur'}],
          stationType: [{required: true, message: '场站类型不能为空', trigger: 'blur'}],
          affiliatedGroup: [{required: true, message: '场站所属集团不能为空', trigger: 'blur'}],
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
        })
        if(this.dataForm.id){
          this.$get(`/project/photovoltaic/info/${this.dataForm.id}`).then((data) => {
            if (data && data.code === 0) {
                this.dataForm.stationName = data.photovoltaic.stationName
                this.dataForm.stationAddress = data.photovoltaic.stationAddress
                this.dataForm.itemCompany = data.photovoltaic.itemCompany
                this.dataForm.affiliatedGroup = data.photovoltaic.affiliatedGroup
                this.dataForm.stationType = data.photovoltaic.stationType
                this.dataForm.installedCapacity = data.photovoltaic.installedCapacity
                this.dataForm.stationNowState = data.photovoltaic.stationNowState
                this.dataForm.approvalTime = data.photovoltaic.approvalTime
                this.dataForm.isImplement = data.photovoltaic.isImplement.toString()
                this.dataForm.onGridTime = data.photovoltaic.onGridTime
                this.dataForm.longitude = data.photovoltaic.longitude
                this.dataForm.latitude = data.photovoltaic.latitude
            }
          }).then(()=>{
            
          })
        }
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params =  {
                'id'                : this.dataForm.id || undefined,
                'stationName'       : this.dataForm.stationName,
                'stationAddress'    : this.dataForm.stationAddress,
                'itemCompany'       : this.dataForm.itemCompany,
                'affiliatedGroup'   : this.dataForm.affiliatedGroup,
                'stationType'       : this.dataForm.stationType,
                'installedCapacity' : this.dataForm.installedCapacity, 
                'stationNowState'   : this.dataForm.stationNowState,
                'approvalTime'      : this.dataForm.approvalTime,
                'isImplement'       : this.dataForm.isImplement,
                'onGridTime'        : this.dataForm.onGridTime,
                'longitude'        : this.dataForm.longitude,
                'latitude'        : this.dataForm.latitude
            }
            this.$post(`/project/photovoltaic/${!this.dataForm.id ? 'save' : 'update'}`,params).then((data) => {
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
      }
    },
  }
</script>
<style scoped>
	
</style>
