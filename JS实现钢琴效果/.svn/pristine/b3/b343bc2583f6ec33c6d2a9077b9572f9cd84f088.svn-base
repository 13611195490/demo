<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 规划方案管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/plan/list' }">规划方案列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plan">
      <el-row class="chart">
        <h3 class="header-label">规划方案列表</h3>
        <div class="clearfix queryData">
          <div class="searchInner fl clearfix">
            <div class="selectFrame fl mr20 pb20">
              <span class="frameName">方案名称</span>
              <el-input type="text" placeholder="请输入" v-model="Name" class="inputText"></el-input>
            </div>
            <div class="triggerDate fl">
              <span class="labelName">选择年份</span>
              <el-date-picker
                v-model="queryMonth"
                value-format="yyyy"
                format="yyyy"
                type="year" :picker-options="pickerOptions"
                placeholder="选择年份" :editable=false>
              </el-date-picker>
            </div>
          </div>
          <!-- <el-button class="fl dataQuery" @click="addPlan()" type="primary">新增方案</el-button> -->
          <el-button class="fl dataQuery" @click="getDataList()" type="primary">查询</el-button>
        </div>
        <!-- <div class="nsd-button-row">
          <el-button :type="delType" :plain="delChange" :disabled="delChange" @click="repBatchDel">批量删除</el-button>
        </div> -->
        <div class="searchResult">
          <el-table :data="dataList" border @selection-change="selectionChangeHandle" style="width: 100%;">
            <!-- <el-table-column type="selection" min-width="55"></el-table-column> -->
            <el-table-column type="index" label="序号" width="70"></el-table-column>
            <el-table-column prop="planName" label="规划方案名称" min-width="200"></el-table-column>
            <el-table-column prop="planYear" label="规划年份" min-width="160"> </el-table-column>
            <el-table-column prop="planRemark" label="备注" min-width="160"> </el-table-column>
            <el-table-column label="操作" width="250">
              <template slot-scope="scope">
               <!--  <el-button @click="addPlan(scope.row.planId)" type="text" size="small">修改</el-button>
                <el-button @click="deletePlan(scope.row)" type="text" size="small">删除</el-button> -->
                <el-button @click="editDataDetail(scope.row)" type="text" size="small">查看数据</el-button>
              </template>
            </el-table-column>
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
        <edit-plan-popup v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></edit-plan-popup>
        <edit-data-detail v-if="detailShow" @hidePopup="hidePopup" ref="detailShow" @refreshDataList="getDataList"></edit-data-detail>
      </el-row>
    </div>
  </div>
</template>
<script>
import EditPlanPopup from '../components/editPlanPopup'
import EditDataDetail from '../components/editDataDetail'
export default {
  name: 'plan',
  components: {
    EditPlanPopup,EditDataDetail
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      delChange:true,
      addOrUpdateVisible: false,
      detailShow:false,
      dataList:[],
      dataListSelections:[],
      queryMonth:'',
      Name:'',

    }
  },
  created() {
    this.getDataList()
  },
  methods: {
    getDataList(){ //列表查询
      var params={
        'page': this.pageIndex,
        'limit': this.pageSize,
        'Name': this.Name,
        'queryMonth': this.queryMonth,
      }
      this.$get('/PPlan/queryAll', params).then((response) => {
        if(response && response.code === 0){
          this.dataList = response.page.records
          this.totalPage = response.page.total
        }else{
          this.dataList = []
          this.totalPage = 0
        }
      })
    },
    deletePlan(row){//删除规划方案数据（修改字段planState值为1）
      row.planState = 1
      this.$confirm(`确认删除这条规划方案数据吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/PPlan/saveOrUpdate',row).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.getDataList()
            }
          })
        })
    },
    editDataDetail(row) {
      this.detailShow = true
      this.$nextTick(() => {
        this.$refs.detailShow.init(row.planId,'查看数据')
      })
    },
    repBatchDel(){ //批量删除数据
      this.$confirm(`确认删除选中的规划方案数据吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.dataListSelections != null){
            var ids = []
            this.dataListSelections.forEach(element => {
              ids.push(element.planId)
            })
          }
          this.$post('/PPlan/deletes',ids).then((response) => {
            if (response && response.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.getDataList()
            }
          })
      })
    },
    addPlan(id){ // 新增规划方案数据
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id)
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
      if (val.length > 0) {
        this.delType = 'primary'
        this.delChange = false
        this.dataListSelections = val
      } else if (val.length === 0) {
        this.delType = 'info'
        this.delChange = true
      }
    },
    hidePopup() {
      this.detailShow = false
    },
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.plan{
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
