<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 统计分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/report/month' }"><b>新能源月报</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="monthRep">
      <el-row class="chart">
        <h3 class="header-label">新能源月报</h3>
        <div class="clearfix queryData">
          <div class="searchInner fl clearfix">
            <!-- <div class="selectFrame fl mr20 pb20">
              <span class="frameName">项目名称</span>
              <el-input type="text" placeholder="请输入" v-model="Name" class="inputText"></el-input>
            </div> -->
            <div class="triggerDate fl selectFrame mr20 pb20">
              <span class="labelName frameName">选择月份</span>
              <el-date-picker
                v-model="queryMonth"
                value-format="yyyy-MM"
                format="yyyy-MM"
                type="month" :picker-options="pickerOptions"
                placeholder="选择月">
              </el-date-picker>
            </div>
          </div>
          <el-button class="fl dataQuery" @click="addRep" type="primary">生成月报</el-button>
          <!-- <el-button class="fl dataQuery" @click="importRep" type="primary">导入</el-button>
          <el-button class="fl dataQuery" @click="fetchData" type="primary">查询</el-button> -->
        </div>
        <div class="nsd-button-row">
          <el-button :type="delType" :plain="delChange" :disabled="delChange" @click="repBatchDel">批量删除</el-button>
        </div>
        <div class="searchResult">
          <el-table :data="dataList" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row @selection-change="handleSelectionChange">
            <el-table-column type="selection" min-width="55"></el-table-column>
            <el-table-column type="index" label="序号" min-width="80"></el-table-column>
            <el-table-column prop="year" label="年度" min-width="200"></el-table-column>
            <el-table-column prop="month" label="月份" min-width="160"> </el-table-column>
            <el-table-column prop="reportDate" label="生成时间" min-width="160"> </el-table-column>
            <el-table-column prop="data4" label="生成人" min-width="200"> </el-table-column>
            <el-table-column prop="remark" label="备注" min-width="100"> </el-table-column>
            <el-table-column label="操作" width="250">
              <template slot-scope="scope">
                <el-button @click="showDetail(scope.row)" type="text" size="small">预览</el-button>
                <el-button @click="repDownload(scope.row)" type="text" size="small">下载</el-button>
                <el-button @click="deleteRep(scope)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pageContainer clearfix">
            <el-pagination
                @size-change="updateSizeChange"
                @current-change="updateCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount">
            </el-pagination>
          </div>
        </div>
      </el-row>
      <repPopup v-on:hidePopup="hidePopup" title="预览展示" :visible="detailShow"></repPopup>
      <importPopup v-on:hidePopup="hidePopup" title="导入报告" :visible="importShow" :form="importForm"></importPopup>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import repPopup from './components/repPopup.vue'
import importPopup from './components/importPopup.vue'
import axios from "axios"
export default {
  name: 'monthRep',
  components: {
    repPopup, importPopup
  },
  data() {
    return {
      pageSize: 10,
      totalCount: 0,
      pageIndex: 1,
      dataList:[],
      delType: 'info',
      delChange: true,
      queryMonth: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      // listLoading: true,
      listLoading: false,
      importShow: false,
      detailShow: false,
      importForm: {}
          }
  },
  created() {
    this.fetchData()
  },
  methods: {
    hidePopup() {
      this.importShow = false
      this.detailShow = false
    },
    RuleRequired(message) {
      return [{ required: true, message }]
    },
    fetchData() {
      var params={
        'pageSize': this.pageSize,
        'pageCurrent':this.pageIndex
      }
      this.$post('/report/ReportController/getMonthReport', params).then((response) => {
        if(response ){
          this.dataList = response.data.records
          this.totalCount = response.data.total
          this.listLoading = false

        }else{
          this.dataList = []
          this.totalCount = 0
          this.listLoading = false
        }
      })
      
    },
    importRep() {
      this.importShow = true
      this.importForm.year = ''
      this.importForm.pictureFile = ''
    },
    triggerDate() {
      this.$refs.elDatePick.focus()
      this.$refs.triggerDate.blur()
    },
    updateSizeChange(val) {
       this.pageSize = val
      this.pageIndex = 1
      this.fetchData()
    },
    updateCurrentChange(val) {
       this.pageIndex = val
      this.fetchData()
    },
    handleSelectionChange(val) {
    console.log(val)
      if (val.length > 0) {
        this.delType = 'primary'
        this.delChange = false
        this.multipleSelection = val
      } else if (val.length === 0) {
        this.delType = 'info'
        this.delChange = true
      }
    },
    showDetail(row) {
      this.detailShow = true
      this.$store.dispatch('GetDetail_rxny', {
        id: row.id,
        cb: () => {
          this.detailShow = true
        }
      })
    },
    closeEditForm() {
      this.detailShow = false
    },
    repDownload(row) {
       var params={
        'reportName': "新能源月报",
        'reportDate': row.reportDate
      }
     /* 新能源月报文件下载 */
				axios({ // 用axios发送post请求
		          method: 'post',
		          url: '/report/ReportController/downloadMonthReport', // 请求地址
		          data: params, // 参数
		          responseType: 'blob' // 表明返回服务器返回的数据类型
		        })
		          .then((res) => { // 处理返回的文件流
		          debugger
		            const content = res.data
		            const blob = new Blob([content])
		            const fileName = '新能源月报'+'-'+row.reportDate+'+.docx'
		            if ('download' in document.createElement('a')) { // 非IE下载
		              const elink = document.createElement('a')
		              elink.download = fileName
		              elink.style.display = 'none'
		              elink.href = URL.createObjectURL(blob)
		              document.body.appendChild(elink)
		              elink.click()
		              URL.revokeObjectURL(elink.href) // 释放URL 对象
		              document.body.removeChild(elink)
		            } else { // IE10+下载
		              navigator.msSaveBlob(blob, fileName)
		            } 
		        }) 
    },
    addRep() {
      var params={
        'reportName': "新能源月报",
        'year':new Date(this.queryMonth).getFullYear(),
        'month':new Date(this.queryMonth).getMonth()+1,
        'reportDate':this.queryMonth,
        'staffId':"测试",
        'remark':"备注"
       
      }
      this.$post('/report/ReportController/createMonthReport', params).then((response) => {
        if(response && response.code === 0){
           this.$message({
                message: response.msg,
                type: 'success',
                duration: 1500
              })
              this.fetchData()
        }else{
          this.fetchData()
        }
      })
    },
    deleteRep(index) {
      console.log(index.row.id)
       this.$confirm(`确认删除选中的规划方案数据吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var ids=[]
          ids.push(index.row.id)
          var monthReportDel = {
           "reportIds":ids
          }
          this.$post('/report/ReportController/deleteMonthReport',monthReportDel).then((response) => {
            if (response && response.code === 0) {
              this.$message({
                message: response.msg,
                type: 'success',
                duration: 1500
              })
              this.fetchData()
            }
          })
      })
    },
    repBatchDel() {
       this.$confirm(`确认删除选中的规划方案数据吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.multipleSelection != null){
            var ids = []
            this.multipleSelection.forEach(element => {
              ids.push(element.id)
            })
          }
           var monthReportDel = {
           "reportIds":ids
          }
          this.$post('/report/ReportController/deleteMonthReport',monthReportDel).then((response) => {
            if (response && response.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.fetchData()
            }
          })
      })
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.monthRep{
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
</style>
<style>

</style>
