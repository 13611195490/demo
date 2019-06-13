<template>
<div>
  <div class="selectFrame fl mr20 pb20">
    <el-button v-if="bs" @click="addData" type="primary" size="small">新增</el-button>
  </div>
  <el-table :data="detailData" v-loading.body="listLoading" element-loading-text="Loading" border fit stripe highlight-current-row > 
    <el-table-column type="index" label="序号" min-width="50"></el-table-column>
    <el-table-column v-for="i in listHeader" :key="i.key" :label="i.label" :prop="i.prop" min-width="160"></el-table-column>
    <el-table-column  label="操作" min-width="150" v-if="bs">
      <template slot-scope="scope">
        <el-button @click="updateData(scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import editDataPopup from './editDataPopup.vue'
import { mapState } from 'vuex'
export default {
  name: 'componTable',
  components: { editDataPopup },
  data() {
    return {
      listHeader: [],
      listLoading: true,
      activeName: 'hd',
      planId:'',
      bs:true,
      detailData:[]
    }
  },
  props: {
    currCompon: ''
  },
  created() {
    this.watchCurrCompon(this.currCompon)
  },
  watch: {
    currCompon(a, b) {
      this.watchCurrCompon(a)
      this.activeName = a
    }
  },
  methods: {
    init(id,bs){
      this.planId = id
      if(bs != null && bs != undefined && bs == '查看数据'){
        this.bs = false
      }
      if(this.activeName == 'hd'){
        this.$get('/PThermalPower/queryAll/'+this.planId).then((response) => {
          if(response && response.code === 0){
            this.detailData = response.data
          }
        })
      }
      if(this.activeName == 'sd'){
        this.$get('/PHydroPower/queryAll/'+this.planId).then((response) => {
          if(response && response.code === 0){
            this.detailData = response.data
          }
        })
      }
      if(this.activeName == 'cn'){
        this.$get('/PPumpedStorage/queryAll/'+this.planId).then((response) => {
          if(response && response.code === 0){
            this.detailData = response.data
          }
        })
      }
      if(this.activeName == 'fq'){
        this.$get('/PZoneLoad/queryAll/'+this.planId).then((response) => {
          if(response && response.code === 0){
            this.detailData = response.data
          }
        })
      }
      if(this.activeName == 'fh'){
        this.$get('/PLoadForecasting/queryAll/'+this.planId).then((response) => {
          if(response && response.code === 0){
            this.detailData = response.data
          }
        })
      }
    },
    watchCurrCompon(a) {
      if (a === 'hd') {
        this.listHeader = [
          { 'key': 'data1', 'label': '规划年份', 'prop': 'thermalYear' },
          { 'key': 'data2', 'label': '所属分区', 'prop': 'thermalPartition' },
          { 'key': 'data3', 'label': '所属厂站', 'prop': 'thermalFactory' },
          { 'key': 'data4', 'label': '电压等级', 'prop': 'thermalVoltageGrade' },
          { 'key': 'data5', 'label': '机组台数', 'prop': 'thermalCrew' },
          { 'key': 'data6', 'label': '单机容量', 'prop': 'thermalCapacity' },
          { 'key': 'data7', 'label': '是否为供热机组', 'prop': 'thermalIsHeating' },
          { 'key': 'data8', 'label': '非供热期单机最大技术出力', 'prop': 'thermalNotheatingMaxoutput' },
          { 'key': 'data9', 'label': '非供热期单机最小技术出力', 'prop': 'thermalNotheatingMinoutput' },
          { 'key': 'data10', 'label': '供热期单机最小技术出力', 'prop': 'thermalHeatingMaxoutput' },
          { 'key': 'data11', 'label': '供热期单机最大技术出力', 'prop': 'thermalHeatingMinoutput' },
          { 'key': 'data12', 'label': '上爬坡率', 'prop': 'thermalUpRate' },
          { 'key': 'data13', 'label': '下爬坡率', 'prop': 'thermalDownRate' }
        ]
        if(this.planId != null && this.planId != ''){
          this.$get('/PThermalPower/queryAll/'+this.planId).then((response) => {
            if(response && response.code === 0){
              this.detailData = response.data
            }
         })
        }
      }
      if (a === 'sd') {
        this.listHeader = [
          { 'key': 'data1', 'label': '规划年份', 'prop': 'hydroYear' },
          { 'key': 'data2', 'label': '所属分区', 'prop': 'hydroPartition' },
          { 'key': 'data3', 'label': '电压等级', 'prop': 'hydroFactory' },
          { 'key': 'data4', 'label': '所属厂站', 'prop': 'hydroVoltageGrade' },
          { 'key': 'data5', 'label': '机组台数', 'prop': 'hydroCrew' },
          { 'key': 'data6', 'label': '单机容量', 'prop': 'hydroCapacity' },
          { 'key': 'data7', 'label': '单机最大技术出力', 'prop': 'hydroMaxoutput' },
          { 'key': 'data8', 'label': '单机最小技术出力', 'prop': 'hydroMinoutput' },
          { 'key': 'data9', 'label': '上爬坡率', 'prop': 'hydroUpRate' },
          { 'key': 'data10', 'label': '下爬坡率', 'prop': 'hydroDownRate' },
        ]
        if(this.planId != null && this.planId != ''){
          this.$get('/PHydroPower/queryAll/'+this.planId).then((response) => {
            if(response && response.code === 0){
              this.detailData = response.data
            }
         })
        }
      }
      if (a === 'cn') {
        this.listHeader = [
          { 'key': 'data1', 'label': '规划年份', 'prop': 'pumpedYear' },
          { 'key': 'data2', 'label': '所属分区', 'prop': 'pumpedPartition' },
          { 'key': 'data3', 'label': '机组名称', 'prop': 'pumpedFactory' },
          { 'key': 'data4', 'label': '电压等级', 'prop': 'pumpedVoltageGrade' },
          { 'key': 'data5', 'label': '单机容量', 'prop': 'pumpedCapacity' },
          { 'key': 'data6', 'label': '机组台数', 'prop': 'pumpedCrew' },
          { 'key': 'data7', 'label': '电量转换效率', 'prop': 'pumpedTransformation' },
          { 'key': 'data8', 'label': '单机最大技术出力', 'prop': 'pumpedMaxoutput' },
          { 'key': 'data9', 'label': '单机最小技术出力', 'prop': 'pumpedMinoutput' },
          { 'key': 'data10', 'label': '库容名称', 'prop': 'pumpedStorageCapacity' },
          { 'key': 'data11', 'label': '蓄电量最大值', 'prop': 'pumpedMaxpowerstorage' },
          { 'key': 'data12', 'label': '蓄电量最小值', 'prop': 'pumpedMinpowerstorage' }
        ]
        if(this.planId != null && this.planId != ''){
          this.$get('/PPumpedStorage/queryAll/'+this.planId).then((response) => {
            if(response && response.code === 0){
              this.detailData = response.data
            }
         })
        }
      }
      if (a === 'fh') {
        this.listHeader = [
          { 'key': 'data1', 'label': '数据时间', 'prop': 'loadDate' },
          { 'key': 'data3', 'label': '所属分区', 'prop': 'loadPartition' },
          { 'key': 'data4', 'label': '有功出力', 'prop': 'loadActiveoutput' },
          { 'key': 'data5', 'label': '无功出力', 'prop': 'loadNotactiveoutput' }
        ]
        if(this.planId != null && this.planId != ''){
          this.$get('/PLoadForecasting/queryAll/'+this.planId).then((response) => {
            if(response && response.code === 0){
              this.detailData = response.data
            }
         })
        }
      }
      if (a === 'fq') {
        this.listHeader = [
          { 'key': 'data1', 'label': '规划年份', 'prop': 'zoneYear' },
          { 'key': 'data2', 'label': '所属厂站1', 'prop': 'zoneFactory1' },
          { 'key': 'data3', 'label': '厂站所属分区1', 'prop': 'zonePartitionFactory1' },
          { 'key': 'data4', 'label': '所属厂站2', 'prop': 'zoneFactory2' },
          { 'key': 'data5', 'label': '厂站所属分区2', 'prop': 'zonePartitionFactory2' },
          { 'key': 'data6', 'label': '电压等级', 'prop': 'zoneVoltageGrade' },
          { 'key': 'data7', 'label': '额定电流', 'prop': 'zoneRatedCurrent' }
        ]
        if(this.planId != null && this.planId != ''){
          this.$get('/PZoneLoad/queryAll/'+this.planId).then((response) => {
            if(response && response.code === 0){
              this.detailData = response.data
            }
         })
        }
      }
      this.fetchData(a)
    },
    fetchData(currCompon) {
      this.listLoading = false
      this.$store.dispatch('GetDetail_pplan', {
        id: currCompon,
        cb: (res) => {
          this.listLoading = false
        }
      })
    },
    closeEditForm() {
      this.$emit('hidePopup')
    },
    deleteData(row) {
      this.$confirm('此操作将删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { 
        if(this.activeName == 'hd'){ // 1.删除规划火电机组参数
          row.thermalState = 1
          this.$post('/PThermalPower/saveOrUpdate',row).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.watchCurrCompon(this.activeName)
            }
          })
        }
        if(this.activeName == 'sd'){  // 2.删除规划有调节能力水电机组参数
          row.hydroState = 1
          this.$post('/PHydroPower/saveOrUpdate',row).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.watchCurrCompon(this.activeName)
            }
          })
        }
        if(this.activeName == 'cn'){  // 3.删除规划抽水蓄能电站信息表
          row.pumpedState = 1
          this.$post('/PPumpedStorage/saveOrUpdate',row).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.watchCurrCompon(this.activeName)
            }
          })
        }
        if(this.activeName == 'fq'){  // 4.删除规划分区负荷数据
          row.zoneState = 1
          this.$post('/PZoneLoad/saveOrUpdate',row).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.watchCurrCompon(this.activeName)
            }
          })
        }
        if(this.activeName == 'fh'){  // 5.删除规划负荷预测数据
          row.loadState = 1
          this.$post('/PLoadForecasting/saveOrUpdate',row).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.watchCurrCompon(this.activeName)
            }
          })
        }
      })
    },
    addData() {
      this.$emit('addShow')
    },
    updateData(row) {
      this.$emit('updateShow', row)
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
</style>


