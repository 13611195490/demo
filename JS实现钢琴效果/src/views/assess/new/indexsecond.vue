<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/assess/assess' }">当前位置： <b>新能源消纳评估</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="assess">
      <el-row class="chart">
        <h3 class="header-label">新能源消纳评估</h3>
      <div style="margin-bottom:14px;"> 
        <span style="margin-left:30px;">预测年份</span>
             <el-date-picker  style="width:150px"
                    v-model="calculationYear"
                    align="right"
                    type="year"
                    value-format="yyyy"
                    placeholder="选择年"
                    :picker-options="pickerOptions"
                    >
          </el-date-picker>
        发电预测
           <el-select v-model="calculationElectric" clearable placeholder="请选择"  size="small" style="width:150px">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span style="margin-left:30px;">负荷预测</span>
           <el-select v-model="calculationLoad" placeholder="请选择" clearable  size="small"  style="width:150px">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
           
          <div style="position: absolute;right:20px;top:60px;">
             <el-button type="primary" @click="computeds">评估计算</el-button>
             <el-button type="success" @click="history">历史预测查看</el-button>
          </div>
    </div>  
    <el-table :data="dataList" style="width: 100%" border  size="small"  :height="tableheight">
     <el-table-column type="index" label="序号" width="70"></el-table-column>
     <el-table-column prop="calculationYear" label="评估年份" width="120"> </el-table-column>
     <el-table-column prop="calculationElectric" label="发电预测" > </el-table-column>
     <el-table-column prop="calculationLoad" label="负荷预测" > </el-table-column>
     <!-- <el-table-column prop="calculationParam" label="主要参数"></el-table-column> -->
     <!-- <el-table-column prop="address" label="备注"></el-table-column>-->
     <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <el-button @click="deleteRow(scope.row)"  type="text" size="small">删除</el-button>
      </template>
     </el-table-column>
  </el-table>
  <el-pagination  style="margin-top:20px;" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" :current-page="pageIndex"
      :page-sizes="[10, 30, 50, 100]" :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage">
  </el-pagination>    
  </el-row>   
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'assess',
  components: {},
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataList: [],
      tableheight:$(document).height()-350+'px',
      options1: [],
      options2: [],
      calculationYear: '',
      calculationElectric: '',
      calculationLoad: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()-8.64e7;   
        }
      },
    }
  },
  created() {
    this.initSelect()
  },
  methods: {
    initSelect(){
      this.$post('/TbCalcCalculationList/initSelect').then((response) => {
        if(response && response.code === 0){
          this.options1 = response.data['fdyc']
          this.options2 = response.data['fhyc']
        }
      })
    },
    initData(){
      var params={
        'page': this.pageIndex,
        'limit': this.pageSize
      }
      this.$get('/TbCalcCalculationList/selectListByPage', params).then((response) => {
        if(response && response.code === 0){
          this.dataList = response.page.records
          this.totalPage = response.page.total
        }else{
          this.dataList = []
          this.totalPage = 0
        }
      })
    },
    //1.点击按钮弹出弹出框
    computeds() {
      var params={
        'calculationYear': this.calculationYear,
        'calculationElectric': this.calculationElectric,
        'calculationLoad': this.calculationLoad
      }
      this.$post('/TbCalcCalculationList/saveOrUpdateTbCalcCalculation', params).then((response) => {
        if(response && response.code === 0){
          this.$message({
            showClose: true,
            message: '正在计算',
            type: 'success'
          });
        }
      })
    },
    //2.点击历史查看
      history(){
        this.initData()
      },
    // 3.点击表格弹删除操作
    deleteRow(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$get('/TbCalcCalculationList/deleteTbCalcCalculationById/'+row.id).then((response) => {
          if(response && response.code === 0){
            this.$message({
              showClose: true,
              message: '删除成功',
              type: 'success'
            });
            this.initData()
          }
        })
      })
    },
     //分頁
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.assess{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
  padding: 20px;
}
.labelName{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 15px 11px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 90px;
}
.dataQuery{
  margin-left: 40px !important;
}
.ml20{
  margin-left: 20px;
}
.w300{
  width: 300px;
}
.labelVal:hover {
    border-color: #8391a5;
}
.labelVal{
  width: 220px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.triggerDate{
  position: relative;
}
.elDatePick{
  position: absolute;
    top: 0;
    opacity: 0;
    left: 90px;
    z-index: -1;
}
.pageContainer{
  padding: 20px 0
}
.queryData{
    border-bottom: 1px solid #d1dbe5;
}
.searchResult{
  padding: 30px 0 0 0;
}
.tableForm{
  border-left:1px solid #CCC;
}
.radioStyle{
  margin: 5px;
}   
</style>
<style>

</style>
