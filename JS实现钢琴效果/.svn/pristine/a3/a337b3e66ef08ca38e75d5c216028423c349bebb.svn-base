<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()"label-width="80px">

      <el-form-item label="项目名称" prop="entryName" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.entryName" placeholder="场站名称"></el-input>
      </el-form-item>

      <el-form-item label="建设模式" prop="buildModel" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.buildModel" placeholder="建设模式"></el-input>
      </el-form-item>

      <el-form-item label="经度" prop="longitude" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.longitude" placeholder="请输入经度"></el-input>
      </el-form-item>

      <el-form-item label="纬度" prop="latitude" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.latitude" placeholder="请输入纬度"></el-input>
      </el-form-item>

      <el-form-item label="项目下达层级" prop="assignLevel" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.assignLevel" placeholder="请输入项目下达层级"></el-input>
      </el-form-item>

      <el-form-item label="项目类别" prop="itemCategory" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.itemCategory" placeholder="请输入项目类别"></el-input>
      </el-form-item>

      <el-form-item label="建设容量" prop="constructionCapacity" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.constructionCapacity" placeholder="请输入建设容量"></el-input>
      </el-form-item>

      <el-form-item label="项目所在县" prop="projectInCounty" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.projectInCounty" placeholder="请输入项目所在县"></el-input>
      </el-form-item>

      <el-form-item label="所在县类型" prop="inCountyType" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.inCountyType" placeholder="请输入所在县类型"></el-input>
      </el-form-item>

      <el-form-item label="对口扶贫村" prop="helpingVillage" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.helpingVillage" placeholder="对口扶贫村"></el-input>
      </el-form-item>

      <el-form-item label="是否建党立卡" prop="isRecordLk" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isRecordLk" placeholder="是否建党立卡" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="备案时间" prop="filingTime" style="display: inline-block;width:47%">
        <el-date-picker
          v-model="dataForm.filingTime"
          format="yyyy-MM-dd"
          placeholder="请选择日期"
          value-format="yyyy-MM-dd" style="display: inline-block;width:100%">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="是否提出申请" prop="isApplyFor" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isApplyFor" placeholder="是否提出申请" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电站本体是否建成" prop="isNoumenonBuilt" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isNoumenonBuilt" placeholder="电站本体是否建成" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="配套工程是否建成" prop="isMatchingEngineering" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isMatchingEngineering" placeholder="配套工程是否建成" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="配套工程投资主体" prop="matchingEngineeringInvestors" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.matchingEngineeringInvestors" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="是否并网" prop="isOnGrid" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isOnGrid" placeholder="是否并网" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="投运时间" prop="commissioningTime" style="display: inline-block;width:47%">
        <el-date-picker
          v-model="dataForm.commissioningTime"
          format="yyyy-MM-dd"
          placeholder="请选择日期"
          value-format="yyyy-MM-dd" style="display: inline-block;width:100%">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="实际并网容量" prop="actualConnectedCapacity" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.actualConnectedCapacity" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="接入电压等级" prop="accessVoltageLevel" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.accessVoltageLevel" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="线路长度" prop="lineLength" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.lineLength" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="变压器容量" prop="transformerCapacity" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.transformerCapacity" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="投资规模" prop="investmentScale" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.investmentScale" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="本月发电量" prop="thisMonthFdl" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.thisMonthFdl" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="上年同月发电量" prop="lastYearAprilFdl" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.lastYearAprilFdl" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="本年发电量" prop="thisYearFdl" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.thisYearFdl" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="上年累计发电量" prop="lastYearTotalFdl" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.lastYearTotalFdl" placeholder="请输入装机规模"></el-input>
      </el-form-item>
      <el-form-item label="是否存在并网问题" prop="isConnectedProblem" style="display: inline-block;width:47%">
        <el-select v-model="dataForm.isConnectedProblem" placeholder="是否存在并网问题" class="filter-item input-css" clearable style="display: inline-block;width:100%">
            <el-option label="是" value="0"></el-option>
            <el-option label="否" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注" prop="remark" style="display: inline-block;width:47%">
        <el-input v-model="dataForm.remark" placeholder="备注"></el-input>
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
          entryName:'',
          buildModel: '',
          assignLevel: '',
          itemCategory:'',
          constructionCapacity:'',
          projectInCounty:'',
          inCountyType:'',
          helpingVillage:'',
          isRecordLk: '',
          filingTime:'',
          isApplyFor:'',
          isNoumenonBuilt:'',
          isMatchingEngineering:'',
          matchingEngineeringInvestors:'',
          isOnGrid:'',
          commissioningTime:'',
          actualConnectedCapacity:'',
          accessVoltageLevel:'',
          lineLength:'',
          transformerCapacity:'',
          investmentScale:'',
          thisMonthFdl:'',
          lastYearAprilFdl:'',
          thisYearFdl:'',
          lastYearTotalFdl:'',
          isConnectedProblem:'',
          remark:'',
          longitude:'',
          latitude:'',
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
          this.$get(`/project/helpThePoor/info/${this.dataForm.id}`).then((data) => {
            if (data && data.code === 0) {
              this.dataForm.entryName                     = data.helpThePoor.entryName
              this.dataForm.buildModel                    = data.helpThePoor.buildModel
              this.dataForm.assignLevel                   = data.helpThePoor.assignLevel
              this.dataForm.itemCategory                  = data.helpThePoor.itemCategory
              this.dataForm.constructionCapacity          = data.helpThePoor.constructionCapacity
              this.dataForm.projectInCounty               = data.helpThePoor.projectInCounty
              this.dataForm.inCountyType                  = data.helpThePoor.inCountyType
              this.dataForm.helpingVillage                = data.helpThePoor.helpingVillage
              this.dataForm.isRecordLk                    = data.helpThePoor.isRecordLk.toString()
              this.dataForm.isApplyFor                    = data.helpThePoor.isApplyFor.toString()
              this.dataForm.isNoumenonBuilt               = data.helpThePoor.isNoumenonBuilt.toString()
              this.dataForm.isMatchingEngineering         = data.helpThePoor.isMatchingEngineering
              this.dataForm.filingTime                    = data.helpThePoor.filingTime
              this.dataForm.matchingEngineeringInvestors  = data.helpThePoor.matchingEngineeringInvestors
              this.dataForm.isOnGrid                      = data.helpThePoor.isOnGrid.toString()
              this.dataForm.commissioningTime             = data.helpThePoor.commissioningTime
              this.dataForm.actualConnectedCapacity       = data.helpThePoor.actualConnectedCapacity
              this.dataForm.accessVoltageLevel            = data.helpThePoor.accessVoltageLevel
              this.dataForm.lineLength                    = data.helpThePoor.lineLength
              this.dataForm.transformerCapacity           = data.helpThePoor.transformerCapacity
              this.dataForm.investmentScale               = data.helpThePoor.investmentScale
              this.dataForm.thisMonthFdl                  = data.helpThePoor.thisMonthFdl
              this.dataForm.lastYearAprilFdl              = data.helpThePoor.lastYearAprilFdl
              this.dataForm.thisYearFdl                   = data.helpThePoor.thisYearFdl
              this.dataForm.lastYearTotalFdl              = data.helpThePoor.lastYearTotalFdl
              this.dataForm.isConnectedProblem            = data.helpThePoor.isConnectedProblem.toString()
              this.dataForm.remark                        = data.helpThePoor.remark
              this.dataForm.longitude                     = data.helpThePoor.longitude
              this.dataForm.latitude                      = data.helpThePoor.latitude
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
                'id'                            : this.dataForm.id || undefined,
                'entryName'                     : this.dataForm.entryName,
                'buildModel'                    : this.dataForm.buildModel,
                'itemCategory'                  : this.dataForm.itemCategory,
                'constructionCapacity'          : this.dataForm.constructionCapacity,
                'projectInCounty'               : this.dataForm.projectInCounty,
                'inCountyType'                  : this.dataForm.inCountyType,
                'helpingVillage'                : this.dataForm.helpingVillage,
                'isRecordLk'                    : this.dataForm.isRecordLk,
                'isApplyFor'                    : this.dataForm.isApplyFor,
                'isNoumenonBuilt'               : this.dataForm.isNoumenonBuilt,
                'isMatchingEngineering'         : this.dataForm.isMatchingEngineering,
                'matchingEngineeringInvestors'  : this.dataForm.matchingEngineeringInvestors,
                'isOnGrid'                      : this.dataForm.isOnGrid,
                'commissioningTime'             : this.dataForm.commissioningTime,
                'actualConnectedCapacity'       : this.dataForm.actualConnectedCapacity,
                'lineLength'                    : this.dataForm.lineLength,
                'transformerCapacity'           : this.dataForm.transformerCapacity,
                'investmentScale'               : this.dataForm.investmentScale,
                'thisMonthFdl'                  : this.dataForm.thisMonthFdl,
                'lastYearAprilFdl'              : this.dataForm.lastYearAprilFdl,
                'thisYearFdl'                   : this.dataForm.thisYearFdl,
                'lastYearTotalFdl'              : this.dataForm.lastYearTotalFdl,
                'isConnectedProblem'            : this.dataForm.isConnectedProblem,
                'remark'                        : this.dataForm.remark,
                'longitude'                     : this.dataForm.longitude,
                'latitude'                      : this.dataForm.latitude,

            }
            this.$post(`/project/helpThePoor/${!this.dataForm.id ? 'save' : 'update'}`,params).then((data) => {
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
