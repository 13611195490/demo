<template>
  <el-dialog :title="!formBean.eventId ? '新增' : '修改'" :visible.sync="visible" v-on:close="close">
    <el-form :model="formBean" ref="formBean" label-width="80px" :rules="validates" >
      <el-row>
        <el-col :span="12">
          <el-form-item label="数据标签" prop="tableId">
            <el-select class="typeSelect" v-model="formBean.tableId" placeholder="请选择">
              <el-option v-for="item in sjbq" :key="item.tableId" :label="item.tableName" :value="item.tableId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据时间" prop="dataDatetime">
            <el-date-picker v-model="formBean.dataDatetime" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="指标类型" prop="paramIds">
             <el-cascader :options="paramNames" placeholder="请选择" v-model="formBean.paramIds" :show-all-levels="false" width="100px" :clearable=true></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="指标来源" prop="sourceId">
            <el-select class="typeSelect" v-model="formBean.sourceId" placeholder="请选择">
              <el-option v-for="item in zbly" :key="item.sourceId" :label="item.sourceName" :value="item.sourceId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="指标版本" prop="editionId" >
            <el-select class="typeSelect" v-model="formBean.editionId" placeholder="请选择" @change="changeEntryTpye">
              <el-option v-for="item in zbbb" :key="item.editionId" :label="item.editionName" :value="item.editionId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="指标频度" prop="timeflagId">
            <el-select class="typeSelect" v-model="formBean.timeflagId" placeholder="请选择">
              <el-option v-for="item in zbpd" :key="item.timeflagId" :label="item.timeflagName" :value="item.timeflagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="起始地区" prop="rdId1s">
            <el-cascader :options="RdNames" placeholder="请选择" v-model="formBean.rdId1s" :show-all-levels="false"  width="100px" :clearable=true></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="终止地区" prop="rdId2s">
            <el-cascader :options="RdNames" placeholder="请选择" v-model="formBean.rdId2s" :show-all-levels="false" width="100px" :clearable=true></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="指标值" prop="paramValue" >
            <el-input type="text" placeholder="请输入" v-model="formBean.paramValue" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="指标单位" prop="paramUnit" >
            <el-select class="typeSelect" v-model="formBean.paramUnit" placeholder="请选择">
              <el-option v-for="item in zbdw" :key="item.puId" :label="item.puNameChs" :value="item.puId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>     
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('formBean')">保存</el-button>
      <el-button @click="hidenPopup">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { $selectIndexMetaByIndexType } from '@/api/monitor'
  import { $selectPowerType } from '@/api/model'
  import { mapState } from 'vuex'
  export default {
    data() {
      var validateName = (rule,value,callback) =>{
        var phoneReg = /^([+-]?)\d*\.?\d+$/
        setTimeout(() => { 
          if (!phoneReg.test(value)) {
            callback(new Error('必须是数值类型')) 
          }else{
            callback();
          }
        }, 0)
      }
      return {
        rdNames:[],
        paramNames:[],
        zbly:[],
        zbbb:[],
        zbpd:[],
        zbdw:[],
        sjbq:[],
        formBean:{
          eventId:'',
          paramIds:[],
          editionId:'',
          sourceId:'',
          timeflagId:'',
          rdId1s:[],
          rdId2s:[],
          paramValue:'',
          paramUnit:'',
          tableId:'',
          dataDatetime:''
        },
        validates:{
           paramValue:[{required: true, message: '指标值不能为空', trigger: 'blur'},
           { validator: validateName, trigger: 'blur' }],
           paramUnit:[{required: true, message: '指标单位不能为空', trigger: 'blur'}],
           paramIds:[{required: true, message: '指标类型不能为空', trigger: 'blur'}],
           editionId:[{required: true, message: '指标版本不能为空', trigger: 'blur'}],
           timeflagId:[{required: true, message: '指标频度不能为空', trigger: 'blur'}],
           sourceId:[{required: true, message: '指标来源不能为空', trigger: 'blur'}],
           rdId1s:[{required: true, message: '起始地区不能为空', trigger: 'blur'}],
           rdId2s:[{required: true, message: '终止地区不能为空', trigger: 'blur'}],
           tableId:[{required: true, message: '数据标签不能为空', trigger: 'blur'}],
           dataDatetime:[{required: true, message: '数据时间不能为空', trigger: 'blur'}],
        }
      }
    },
    props: {
      title: String,
      form: Object,
      visible: Boolean
    },
    created() {
      this.initSjbq()
      this.initZbdw()
      this.initZbpd()
      this.initZblx()
      this.initDq()
      this.initZbly()
      this.initZbbb()
    },
    methods: {
      init(id){
        this.$nextTick(() => {
          this.$refs['formBean'].resetFields()
        })
        if(id != null && id != undefined){
          this.$get('maintenance/maintenance/info/'+id).then((response) => {
              if(response && response.code === 0){
                this.formBean = response.tr2pValues
              }
          })
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('maintenance/maintenance/save',this.formBean).then((response) => {
              if(response && response.code === 0){
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
      initSjbq(){ //初始化数据标签下拉列表
        this.$post('maintenance/maintenance/findAllLogicTableIndex').then((response) => {
          if(response && response.code === 0){
            this.sjbq = response.data
          }
        })
      },
      initZbdw(){ // 初始化指标单位下拉列表
        this.$post('maintenance/maintenance/findAllParamUnit').then((response) => {
          if(response && response.code === 0){
            this.zbdw = response.data
          }
        })
      },
      initZbpd(){ //初始化指标频度下拉列表
        this.$post('maintenance/maintenance/findAllTimeflag').then((response) => {
          if(response && response.code === 0){
            this.zbpd = response.data
          }
        })
      },
      initZbbb(){ //初始化指标版本下拉列表
        this.$post('maintenance/maintenance/findAllZbbb').then((response) => {
          if(response && response.code === 0){
            this.zbbb = response.data
          }
        })
      },
      initZbly(){ //初始化指标来源下拉列表
        this.$post('maintenance/maintenance/findAllZbly').then((response) => {
          if(response && response.code === 0){
            this.zbly = response.data
          }
        })
      },
      initDq(){ //初始化地区下拉列表
        this.$post('maintenance/maintenance/findAllDQ').then((response) => {
          if(response && response.code === 0){
            this.RdNames = response.data
          }
        })
      },
      initZblx(){ //初始化指标类型下拉框
        this.$post('maintenance/maintenance/findAllZblx').then((response) => {
          if(response && response.code === 0){
            this.paramNames = response.data
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
