<template>
  <el-dialog :title="'人员列表'" :close-on-click-modal="false" :visible.sync="visible" id="single">
        <el-row>
          <div class="filter-container">
            <div style="float:right">
              <el-input size="small" @keyup.enter.native="getDataList()" v-model="searchForm.staffName" style="width: 200px;" class="filter-item" placeholder="人员名称">
              </el-input>
              <el-button size="small"  class="filter-item" type="primary" v-waves icon="el-icon-search" @click="getDataList()">查询</el-button>
            </div>
          </div>
        </el-row>
        <div class="app-container">
          <el-table :data="dataList" border ref="tables" @selection-change="selectionChangeHandle" style="width: 100%;">
          <el-table-column  type="selection" :reserve-selection="true" header-align="center" align="center" width="50"></el-table-column>
          <el-table-column prop="userAcct"  header-align="center" align="center" label="账号"></el-table-column>
          <el-table-column prop="staffSex" label="性别" width="120" align="center">
              <template slot-scope="scope">
                  <span v-if="scope.row.staffSex == '0'">男</span>
                  <span v-if="scope.row.staffSex == '1'">女</span>
              </template>
          </el-table-column>
          <el-table-column
            prop="deptCode"
            header-align="center"
            align="center"
            label="所属机构">
            <template slot-scope="scope">
              <span>{{transOrg(scope.row.deptCode)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="staffName" header-align="center" align="center" label="姓名"></el-table-column>
          <el-table-column prop="state" header-align="center" align="center" label="状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.state === 0" size="small" type="danger">禁用</el-tag>
              <el-tag v-else-if="scope.row.state === 1" size="small" type="success">正常</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" header-align="center" align="center" width="180" label="创建时间">
            <template slot-scope="scope">
                <span>{{ parseTime(scope.row.createTime) }}</span>
            </template>
          </el-table-column>
          </el-table>
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
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { parseTime } from '@/utils/index'
export default {
    data () {
      return {
        searchForm: {
          staffName: ''
        },
        visible: false,
        dataList: [],
        multipleSelectionAll:[],//所有选中的数据包含跨页数据
        dataListSelections: [],// 当前页选中的数据
        idKey: 'id',// 标识列表数据中每一行的唯一键的名称
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        roleId:'',
      }
    },
    created (){
      this.getDataList()
    },
    methods: {
      parseTime,
      currentChangeHandle(){
        this.changePageCoreRecordData();
        if(!this.$isNull(this.totalPage)) this.getDataList();
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
        //实时记录选中的数据
        setTimeout(()=>{
            this.changePageCoreRecordData();
        }, 50)
      },
      init (id){
        this.visible = true
        this.$get(`/sys/roleRefStaff/info/${id}`).then((data) => {
          this.$refs.tables.clearSelection(); 
          if (data && data.code === 0) {
           setTimeout(() => {
              data.staffIdList.forEach(datas => {
                this.dataList.forEach(row => {
                  if(row.id === datas){
                    this.$refs.tables.toggleRowSelection(row,true);
                  } 
                })
              });
            }, 1.5 * 50)   
          }else{
             data.staffIdList = []
          }
        })
        this.roleId = id
      },
      getDataList(){
        this.$nextTick(function () {
          var params={
            'page': this.pageIndex,
            'limit': this.pageSize,
            'staffName': this.searchForm.staffName,
          }
          this.$get('/sys/staff/queryAll',params).then((response) => {
            this.dataList = response.page.records ? response.page.records : [];
            this.totalPage = response.page.total ? response.page.total : 0;
            setTimeout(()=>{
              this.setSelectRow();
            }, 50)
          })
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
      setSelectRow() {
          if (!this.multipleSelectionAll || this.multipleSelectionAll.length <= 0) {
              return;
          }
          // 标识当前行的唯一键的名称
          let idKey = this.idKey;
          let selectAllIds = [];
          let that = this;
          this.multipleSelectionAll.forEach(row=>{
              selectAllIds.push(row[idKey]);
          })
          this.$refs.tables.clearSelection();
          for(var i = 0; i < this.dataList.length; i++) {                    
              if (selectAllIds.indexOf(this.dataList[i][idKey]) >= 0) {
                  // 设置选中，记住table组件需要使用ref="tables"
                  this.$refs.tables.toggleRowSelection(this.dataList[i], true);
              }
          }
      },
      // 记忆选择核心方法
      changePageCoreRecordData () {
          // 标识当前行的唯一键的名称
          let idKey = this.idKey;
          let that = this;
          // 如果总记忆中还没有选择的数据，那么就直接取当前页选中的数据，不需要后面一系列计算
          if (this.multipleSelectionAll.length <= 0) {
              this.multipleSelectionAll = this.dataListSelections;
              return;
          }
          // 总选择里面的key集合
          let selectAllIds = [];
          this.multipleSelectionAll.forEach(row=>{
              selectAllIds.push(row[idKey]);
          })
          let selectIds = []
          // 获取当前页选中的id
          this.dataListSelections.forEach(row=>{
              selectIds.push(row[idKey]);
              // 如果总选择里面不包含当前页选中的数据，那么就加入到总选择集合里
              if (selectAllIds.indexOf(row[idKey]) < 0) {
                  that.multipleSelectionAll.push(row);
              }
          })
          let noSelectIds = [];
          // 得到当前页没有选中的id
          this.dataList.forEach(row=>{
              if (selectIds.indexOf(row[idKey]) < 0) {
                  noSelectIds.push(row[idKey]);
              }
          })
          noSelectIds.forEach(id=>{
              if (selectAllIds.indexOf(id) >= 0) {
                  for(let i = 0; i< that.multipleSelectionAll.length; i ++) {
                      if (that.multipleSelectionAll[i][idKey] == id) {
                          // 如果总选择中有未被选中的，那么就删除这条
                          that.multipleSelectionAll.splice(i, 1);
                          break;
                      }
                  }
              }
          })
      },
      // 表单提交
      dataFormSubmit () {
        let sysStaffIds = this.multipleSelectionAll.map(item => {
          return item.id
        })
        const role = { roleId: this.roleId[0], staffIdList:sysStaffIds }
          this.$post('/sys/roleRefStaff/roleSaveStaff',role).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '授权成功',
                type: 'success',
                duration: 1500
              })
              this.visible = false
              this.$emit('refreshDataList')
            }
          })
      },
    }
  }  
</script>
<style lang="scss" scoped>
#single /deep/{
    .el-dialog__body{
        padding:0px 20px;
        height:100%;
        overflow: auto;
    }
    .el-dialog{
        width: 800px;
    }
}
</style>