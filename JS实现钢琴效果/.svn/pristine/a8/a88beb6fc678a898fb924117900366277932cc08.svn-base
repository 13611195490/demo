<template>
  <div>
    <el-row class="chart">
      <div class="clearfix queryData">
        <el-form :inline="true" :model="searchForm" @keyup.enter.native="getDataList()">
          <el-form-item>
            <el-input v-model="searchForm.entryName" placeholder="项目名称" clearable></el-input>
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
      </div>
      <div class="searchResult">
       <el-table :data="dataList" border fit stripe highlight-current-row>
          <el-table-column type="index" label="序号" min-width="50"></el-table-column>
          <el-table-column prop="entryName" label="项目名称" min-width="100"></el-table-column>
          <el-table-column prop="buildModel" label="建设模式" min-width="100"></el-table-column>
          <el-table-column prop="assignLevel" label="项目下达层级" min-width="100"></el-table-column>
          <el-table-column prop="itemCategory" label="项目类别" min-width="100"></el-table-column>
          <el-table-column prop="constructionCapacity" label="建设容量" min-width="100"></el-table-column>
          <el-table-column prop="projectInCounty" label="项目所在县" min-width="100"></el-table-column>
          <el-table-column prop="inCountyType" label="所在县类型" min-width="100"></el-table-column>
          <el-table-column prop="helpingVillage" label="对口扶贫村" min-width="100"></el-table-column>
          <el-table-column prop="isRecordLk" label="是否建党立卡" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isRecordLk == '0'">是</span>
              <span v-if="scope.row.isRecordLk == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="filingTime" label="备案时间" min-width="100">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.filingTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="isApplyFor" label="是否提出申请" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isApplyFor == '0'">是</span>
              <span v-if="scope.row.isApplyFor == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="isNoumenonBuilt" label="电站本体是否建成" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isNoumenonBuilt == '0'">是</span>
              <span v-if="scope.row.isNoumenonBuilt == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="isMatchingEngineering" label="配套工程是否建成" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isMatchingEngineering == '0'">是</span>
              <span v-if="scope.row.isMatchingEngineering == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="matchingEngineeringInvestors" label="配套工程投资主体" min-width="100"></el-table-column>
          <el-table-column prop="isOnGrid" label="是否并网" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isOnGrid == '0'">是</span>
              <span v-if="scope.row.isOnGrid == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="commissioningTime" label="投运时间" min-width="100">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.commissioningTime) }}</span>
            </template> 
          </el-table-column>
          <el-table-column prop="actualConnectedCapacity" label="实际并网容量" min-width="100"></el-table-column>
          <el-table-column prop="accessVoltageLevel" label="接入电压等级" min-width="100"></el-table-column>
          <el-table-column prop="lineLength" label="线路长度" min-width="100"></el-table-column>
          <el-table-column prop="transformerCapacity" label="变压器容量" min-width="100"></el-table-column>
          <el-table-column prop="investmentScale" label="投资规模" min-width="100"></el-table-column>
          <el-table-column prop="thisMonthFdl" label="本月发电量" min-width="100"></el-table-column>
          <el-table-column prop="lastYearAprilFdl" label="上年同月发电量" min-width="100"></el-table-column>
          <el-table-column prop="thisYearFdl" label="本年发电量" min-width="100"></el-table-column>
          <el-table-column prop="lastYearTotalFdl" label="上年累计发电量" min-width="100"></el-table-column>
          <el-table-column prop="isConnectedProblem" label="是否存在并网问题" min-width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.isConnectedProblem == '0'">是</span>
              <span v-if="scope.row.isConnectedProblem == '1'">否</span>
            </template>
          </el-table-column>
          <el-table-column prop="remark" label="备注" min-width="100"></el-table-column>
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
        queryMonth: '2018-09',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          }
        },
        searchForm: {
          entryName: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListSelections:[],
        addOrUpdateVisible:false
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
      getDataList(){
        var params={
          'entryName':this.searchForm.entryName,
          'page': this.pageIndex,
          'limit': this.pageSize,
        }
        this.$get('/project/helpThePoor/queryAll', params).then((response) => {
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

