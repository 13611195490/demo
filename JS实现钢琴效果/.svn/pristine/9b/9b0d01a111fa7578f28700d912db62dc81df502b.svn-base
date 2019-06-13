<template>
  <div>
    <el-row class="chart">
      <div class="clearfix queryData">
        <el-form :inline="true" :model="searchForm" @keyup.enter.native="getDataList()">
          <el-form-item>
            <el-input v-model="searchForm.stationName" placeholder="场站名称" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker
                v-model="queryMonth"
                value-format="yyyy-MM"
                format="yyyy-MM"
                type="month" :picker-options="pickerOptions"
                placeholder="选择月">
              </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button @click="getDataList()">查询</el-button>
          </el-form-item>
        </el-form>
        <!-- <div class="searchInner fl clearfix">
          <div class="selectFrame fl mr20 pb20">
            <span class="frameName">场站名称</span>
            <el-input type="text" placeholder="请输入" v-model="stationName" class="inputText"></el-input>
          </div>
          <div class="triggerDate fl">
            <span class="labelName">选择月份</span>
            <el-date-picker
              v-model="queryMonth"
              value-format="yyyy-MM"
              format="yyyy-MM"
              type="month" :picker-options="pickerOptions"
              placeholder="选择月">
            </el-date-picker>
          </div>
        </div>
        <el-button class="fl dataQuery" @click="fetchData" type="primary">查询</el-button> -->
      </div>
      <div class="searchResult">
        <el-table :data="dataList" @selection-change="selectionChangeHandle" border fit stripe highlight-current-row>
          <el-table-column type="index" header-align="center" align="center" label="序号" min-width="50"></el-table-column>
          <el-table-column prop="stationName" header-align="center" align="center" label="场站名称" min-width="100"></el-table-column>
          <el-table-column prop="stationAddress" header-align="center" align="center" label="地址" min-width="100"></el-table-column>
          <el-table-column prop="itemCompany" header-align="center" align="center" label="项目公司" min-width="100"></el-table-column>
          <el-table-column prop="affiliatedGroup" header-align="center" align="center" label="所属集团" min-width="100"></el-table-column>
          <el-table-column prop="stationType" header-align="center" align="center" label="场站类型" min-width="100"></el-table-column>
          <el-table-column prop="installedCapacity" header-align="center" align="center" label="装机规模" min-width="100"></el-table-column>
          <el-table-column prop="stationNowState" header-align="center" align="center" label="场站当前状态" min-width="100"></el-table-column>
          <el-table-column prop="approvalTime" header-align="center" align="center" label="核准时间" width="155">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.approvalTime) }}</span>
            </template> 
          </el-table-column>
          <el-table-column prop="isImplement" header-align="center" align="center" label="是否落实" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isImplement == '0'">是</span>
              <span v-if="scope.row.isImplement == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="onGridTime" header-align="center" align="center" label="并网时间" width="155">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.onGridTime) }}</span>
            </template> 
          </el-table-column>
          <el-table-column prop="stationFile" label="附件" min-width="100"></el-table-column>
        </el-table>
        <div class="pageContainer clearfix">
           <!-- 分页条 -->
          <el-pagination
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="pageIndex"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            :total="totalPage"
            layout="total, sizes, prev, pager, next, jumper">
          </el-pagination>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import { parseTime } from '@/utils/index'
  export default {
    name: 'table',
    data() {
      return {
        delType: 'info',
        delChange: true,
        queryMonth: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          }
        },
        searchForm: {
          stationName: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListSelections: [],
        addOrUpdateVisible: false
      }
    },
    props: {
      currCompon: ''
    },
    created() {
      this.getDataList()
    },
    methods: {
      parseTime,
      //列表数据
      getDataList(){
        var params={
          'stationName':this.searchForm.stationName,
          'queryMonth': this.queryMonth,
          'page': this.pageIndex,
          'limit': this.pageSize,
        }
        this.$get('/project/centralized/queryAll', params).then((response) => {
          if(response && response.code === 0){
            this.dataList = response.page.records
            this.totalPage = response.page.total
          }else{
            this.dataList = []
            this.totalPage = 0
          }
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
    }
  }
</script>
<style lang="less">
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
</style>
