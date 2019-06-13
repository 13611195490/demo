<template>
  <div class="modelMaintenance">
    <div class="clearfix queryData">
      <div class="searchInner fl clearfix">
        <!-- <div class="selectFrame fl mr20 pb20">
          <span class="frameName">选择标签</span>
          <el-select class="typeSelect" v-model="VersionName" placeholder="请选择">
            <el-option v-for="item in versionVal" :key="item.VersionName" :label="item.VersionName" :value="item.VersionName"></el-option>
          </el-select>
        </div> -->
        <div class="selectFrame fl mr20 pb20">
          <span class="frameName">区域</span>
          <!-- <el-input type="text" placeholder="请输入" v-model="Area" width="100px"></el-input> -->
          <el-cascader :options="RdNames" placeholder="请选择" :show-all-levels="false" @change="onRdNamesChange" width="100px" :clearable=true></el-cascader>
        </div>
        <div class="selectFrame fl mr20 pb20">
          <span class="frameName">选择类型</span>
          <!-- <el-select class="typeSelect" v-model="IndexType" placeholder="请选择">
            <el-option v-for="item in IndexTypeVal" :key="item.type" :label="item.label" :value="item.type"></el-option>
          </el-select> -->
          <el-cascader :options="ParamNames" placeholder="请选择" :show-all-levels="false" @change="onParamNamesChange" width="100px" :clearable=true></el-cascader>
        </div>
      </div>
      <el-button class="fl dataQuery " @click="getDataList()" type="primary" icon="el-icon-search">查询</el-button>
      <el-button class="fl dataQuery " @click="addOrUpdateHandle()" type="primary">新增</el-button>
      <el-button class="fl dataQuery " :type="delType" :plain="delChange" :disabled="delChange" @click="deletes()">批量删除</el-button>
    </div>
    <div class="searchResult">
      <el-table :data="dataList" @selection-change="selectionChangeHandle" border fit stripe highlight-current-row >
        <el-table-column  type="selection" header-align="center" align="center" width="50"></el-table-column>
        <!-- <el-table-column prop="eventId" label="指标ID" min-width="200"></el-table-column>
        <el-table-column prop="VersionName" label="指标名称" min-width="120"></el-table-column> -->
        <el-table-column prop="paramValue" label="指标值" min-width="150"> </el-table-column>
        <el-table-column prop="unitName" label="指标单位" min-width="150"> </el-table-column>
        <el-table-column prop="dataDatetime" label="数据时间" min-width="150"> </el-table-column>
        <el-table-column prop="inputDatetime" label="录入时间" min-width="160">
          <template slot-scope="scope">
            <span>{{ parseTime(scope.row.inputDatetime) }}</span>
          </template> 
        </el-table-column>
        <el-table-column prop="lastModified" label="最后修改时间" min-width="160">
          <template slot-scope="scope">
            <span>{{ parseTime(scope.row.lastModified) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" min-width="120"> </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button  @click="addOrUpdateHandle(scope.row.eventId)" type="text" size="small">修改</el-button>
            <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
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
    <entryPopup v-on:submitForm="addEntry" v-on:hidePopup="addFormHide" title="添加指标条目" ref="addOrUpdate" :form="addForm" :visible="addEntryVisible" @refreshDataList="getDataList"></entryPopup>
   <!-- <entryPopup v-on:submitForm="updateEntry" v-on:hidePopup="updateFormHide" title="编辑指标条目" :form="updateForm" :visible="updateEntryVisible"></entryPopup>
    <yearDetail v-if="detailYearShow" title="年度条目数据详情" :detailResult="detailResult" @closeYearForm="closeYearForm"></yearDetail>
    <monthDetail v-if="detailMonthShow" title="月度条目数据详情" :detailResult="detailResult" @closeYearForm="closeYearForm"></monthDetail>
    <hourTypicalDetail v-if="detailTypicalShow" title="典型小时条目数据详情" :detailResult="detailResult" @closeYearForm="closeYearForm"></hourTypicalDetail>
    <hourDetail v-if="detailHourShow" title="小时计数条目数据详情" :detailResult="detailResult" @closeYearForm="closeYearForm"></hourDetail>
    <indefiniteDetail v-if="detailIndefiniteShow" title="非固定时段数据详情" :detailResult="detailResult" @closeYearForm="closeYearForm"></indefiniteDetail> -->

  </div>
</template>
<script>
import { parseTime } from '@/utils/index'
import { mapState } from 'vuex'
import entryPopup from './components/entry/entryPopup'
import yearDetail from './components/entry/yearDetail'
import monthDetail from './components/entry/monthDetail'
import hourTypicalDetail from './components/entry/hourTypicalDetail'
import hourDetail from './components/entry/hourDetail'
import indefiniteDetail from './components/entry/indefiniteDetail'
// import { $addEntry, $updateEntry } from '@/api/model.js'

export default {
  name: 'entryManage',
  components: {
    entryPopup, yearDetail, monthDetail, hourTypicalDetail, hourDetail, indefiniteDetail
  },
  data() {
    return {
      // VersionName: '',
      Area: '',
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListSelections: [],
      IndexType: '',
      delChange:true,
      IndexTypeVal: [
        { 'label': '全部', 'type': '' },
        { 'label': '地区数据指标', 'type': 'AreaData' },
        { 'label': '电力互联指标', 'type': 'InterconnectionData' },
        { 'label': '电源指标', 'type': 'SourceData' }
      ],
			versionVal: [
				{ 'IndexID': '全部', 'type': '' },
        { 'IndexID': '地区数据指标', 'type': 'AreaData' },
        { 'IndexID': '电力互联指标', 'type': 'InterconnectionData' },
        { 'IndexID': '电源指标', 'type': 'SourceData' }
      ],
      RdNames:[],
      ParamNames:[],
      rdNames:'',
      paramNames:'',
      addEntryVisible: false,
			addForm: {
			  versionName: '',
			  description: ''
			},
    }
  },
  created() {
    this.getDataList()
    this.initDq() // 初始化地区下拉框
    this.initZblx() // 初始化指标类型下拉框
  },
  methods: {
    parseTime,
    getDataList(){ // 加载表格数据
      var params={
        'page': this.pageIndex,
        'limit': this.pageSize,
        'rdNames':this.rdNames,
        'paramNames':this.paramNames
      }
      this.$post('maintenance/maintenance/queryAll', params).then((response) => {
        if(response && response.code === 0){
          this.dataList = response.page.records
          this.totalPage = response.page.total
        }else{
          this.dataList = []
          this.totalPage = 0
        }
      })
    },
    addOrUpdateHandle (id) { // 打开新增修改窗口
        this.addEntryVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
    },
    deletes(){ //批量删除数据
      var eventId = []
      this.dataListSelections.forEach(element => {
        eventId.push(element.eventId)
      });
      this.$confirm(`确认对该数据进行删除操作?`, '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
        this.$post('maintenance/maintenance/delete', eventId).then((data) => {
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
    deleteData(row){ //删除数据
      var eventId = []
      eventId.push(row.eventId)
      this.$confirm(`确认对该数据进行删除操作?`, '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
        this.$post('maintenance/maintenance/delete', eventId).then((data) => {
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
          this.ParamNames = response.data
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
      if (val.length > 0) {
        this.delType = 'primary'
        this.delChange = false
        this.dataListSelections = val
      } else if (val.length === 0) {
        this.delType = 'info'
        this.delChange = true
      }
    },
		 addLabel() {
		  const req = {
		    versionName: this.addForm.versionName,
		    description: this.addForm.description
		  }
		  $addLabel(req).then(response => {
		    if (response.code === '1') {
		      this.addFormHide()
		      this.$message({ type: 'success', message: '新增成功' })
		      this.addEntryVisible = false
		      this.$store.dispatch('Add_label', {
		        versionName: ''
		      })
		      this.fetchData(1)
		    }
		  })
		},
		addFormHide() {
		  this.addEntryVisible = false
		  this.addForm.versionName = ''
		  this.addForm.description = ''
		},
    //选择地区
    onRdNamesChange(val){
      if(val[1] != undefined){
        this.rdNames = val[1]
      }else{
        this.rdNames = ''
      }
    },
    //选择指标类型
    onParamNamesChange(val){
      if(val[1] != undefined){
        this.paramNames = val[1]
      }else{
        this.paramNames = ''
      }
    }
  }
}
</script>
<style src="../../../../styles/public.css"></style>
<style scoped>
.el-input {
  width: 200px;
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
  margin-left: 40px;
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
