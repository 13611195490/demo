<template>
  <div>
    <nsd-right-pop :title="title" @closeBtn="closeEditForm">
      <div slot="mainContent">
        <el-tabs v-model="activeName">
          <el-tab-pane name="hd">
            <span slot="label"><i class="el-icon-date"></i>规划火电机组参数数据表</span>
          </el-tab-pane>
          <el-tab-pane name="sd">
            <span slot="label"><i class="el-icon-date"></i>规划有调节能力水电机组信息</span>
          </el-tab-pane>
          <el-tab-pane name="cn">
            <span slot="label"><i class="el-icon-date"></i>规划抽水蓄能电站信息</span>
          </el-tab-pane>
           <el-tab-pane name="fq">
            <span slot="label"><i class="el-icon-date"></i>分区负荷数据</span>
          </el-tab-pane>
           <el-tab-pane name="fh">
            <span slot="label"><i class="el-icon-date"></i>规划负荷预测数据</span>
          </el-tab-pane>
          <compon-table v-on:addShow="addShow" ref="table" v-on:updateShow="updateShow" :currCompon="activeName"/>
        </el-tabs>
      </div>
      <div slot="footerCoperation">
        <el-button type="primary" @click="closeEditForm">确定</el-button>
      </div>
    </nsd-right-pop>
    <!-- 规划火电机组参数新增编辑页面 -->
    <editDataPopup  ref="addPThermalPower" title="新增数据"  editType="create" :visible="addVisible" @refreshDataList="init"></editDataPopup>
    <!-- 规划有调节能力水电机组参数新增编辑页面 -->
    <editDataPopup1  ref="addPHydroPower" title="新增数据" editType="create" :visible="addVisible1" @refreshDataList="init"></editDataPopup1>
    <!-- 规划抽水蓄能电站信息表新增编辑页面 -->
    <editDataPopup2  ref="addPPumpedStorage" title="新增数据" editType="create" :visible="addVisible2" @refreshDataList="init"></editDataPopup2>
    <!-- 分区负荷数据新增编辑页面 -->
    <editDataPopup3  ref="addPZoneLoad" title="新增数据" editType="create" :visible="addVisible3" @refreshDataList="init"></editDataPopup3>
    <!-- 规划负荷预测数据新增编辑页面 -->
    <editDataPopup4  ref="addPLoadForecasting" title="新增数据" editType="create" :visible="addVisible4" @refreshDataList="init"></editDataPopup4>
  </div> 
</template>
<script>
import componTable from './componTable'
import editDataPopup from './editDataPopup.vue'
import editDataPopup1 from './editDataPopup1.vue'
import editDataPopup2 from './editDataPopup2.vue'
import editDataPopup3 from './editDataPopup3.vue'
import editDataPopup4 from './editDataPopup4.vue'
// import { $addData, $updateData } from '@/api/plan.js'

export default {
  name: 'SessionDetail',
  components: {
    componTable, editDataPopup,editDataPopup1,editDataPopup2,editDataPopup3,editDataPopup4
  },
  props: {
    title: String,
    hidePopup: Function
  },
  data() {
    return {
      activeName: 'hd',
      addVisible: false,
      addVisible1: false,
      addVisible2: false,
      addVisible3: false,
      addVisible4: false,
      addForm: {},
      updateForm: {},
      planId:''
    }
  },
  methods: {
    init(id,bs){
      this.visible = true
      if(this.planId == '' || this.planId == null){
        this.planId = id
      }
      this.$nextTick(() => {
        this.$refs.table.init(this.planId,bs)
      })
    },
    addShow() {
      // 1.规划火电机组参数新增编辑页面
      if(this.activeName == 'hd'){
        this.addVisible = true
        this.$nextTick(() => {
          this.$refs.addPThermalPower.init(this.planId,this.activeName)
        })
      }
      // 2.规划有调节能力水电机组参数新增编辑页面
      if(this.activeName == 'sd'){ 
        this.addVisible1 = true
        this.$nextTick(() => {
          this.$refs.addPHydroPower.init(this.planId,this.activeName)
        })
      }
      // 3.规划抽水蓄能电站信息表新增编辑页面
      if(this.activeName == 'cn'){ 
        this.addVisible2 = true
        this.$nextTick(() => {
          this.$refs.addPPumpedStorage.init(this.planId,this.activeName)
        })
      }
      //4.分区负荷数据新增编辑页面
      if(this.activeName == 'fq'){ 
        this.addVisible3 = true
        this.$nextTick(() => {
          this.$refs.addPZoneLoad.init(this.planId,this.activeName)
        })
      }
      //5.规划负荷预测数据新增编辑页面
      if(this.activeName == 'fh'){ 
        this.addVisible4 = true
        this.$nextTick(() => {
          this.$refs.addPLoadForecasting.init(this.planId,this.activeName)
        })
      }
    },
    updateShow(row) {
      // 1.规划火电机组参数新增编辑页面
      if(this.activeName == 'hd'){
        this.addVisible = true
        this.$nextTick(() => {
          this.$refs.addPThermalPower.init(this.planId,this.activeName,row)
        })
      }
      // 2.规划有调节能力水电机组参数新增编辑页面
      if(this.activeName == 'sd'){ 
        this.addVisible1 = true
        this.$nextTick(() => {
          this.$refs.addPHydroPower.init(this.planId,this.activeName,row)
        })
      }
      // 3.规划抽水蓄能电站信息表新增编辑页面
      if(this.activeName == 'cn'){ 
        this.addVisible2 = true
        this.$nextTick(() => {
          this.$refs.addPPumpedStorage.init(this.planId,this.activeName,row)
        })
      }
      //4.分区负荷数据新增编辑页面
      if(this.activeName == 'fq'){ 
        this.addVisible3 = true
        this.$nextTick(() => {
          this.$refs.addPZoneLoad.init(this.planId,this.activeName,row)
        })
      }
      //5.规划负荷预测数据新增编辑页面
      if(this.activeName == 'fh'){ 
        this.addVisible4 = true
        this.$nextTick(() => {
          this.$refs.addPLoadForecasting.init(this.planId,this.activeName,row)
        })
      }
    },
    closeEditForm(){
       this.$emit('hidePopup')
    }
  }
}
</script>
<style scoped>
.submitBtn{
  margin-left: 10px;
}
.wrapper{
  margin: 5px 0;
}
.sessionDetailItem{

}
</style>


