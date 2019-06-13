<template>
  <div class="mod-user">
    <el-row :gutter="20">
     <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
        <div class="head-container">
          <el-input v-model="deptName" clearable placeholder="输入部门名称搜索" prefix-icon="el-icon-search" style="width: 100%;" class="filter-item" @input="getDeptDatas"/>
        </div>
        <el-tree :data="orgNoOptions" :props="orgListTreeProps" :expand-on-click-node="false" default-expand-all @node-click="handleNodeClick"/>
     </el-col> 
     <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
    <el-form :inline="true" :model="searchForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="searchForm.staffName" placeholder="用户名" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button type="danger"  :disabled="dataListSelections.length <= 0" @click="resetHandle()">重置密码</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border @selection-change="selectionChangeHandle" style="width: 100%;">
      <el-table-column  type="selection" header-align="center" align="center" width="50"></el-table-column>
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
          <el-tag v-if="scope.row.state === 1" size="small" type="success">已激活</el-tag>
          <el-tag v-else-if="scope.row.state === 2" size="small" type="danger">已休眠</el-tag>
          <el-tag v-else-if="scope.row.state === 3" size="small" type="info">已注销</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="isLocked" header-align="center" align="center" label="是否锁定">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isLocked === '1'" size="small" type="danger">已锁定</el-tag>
          <el-tag v-else-if="scope.row.isLocked === '0'" size="small" type="success">未锁定</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" header-align="center" align="center" width="180" label="创建时间">
         <template slot-scope="scope">
            <span>{{ parseTime(scope.row.createTime) }}</span>
          </template> 
      </el-table-column>

      <el-table-column fixed="right" header-align="center" align="center" width="180" label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.isLocked === '1'" type="text" size="small"  @click="updateLockState(scope.row.id)">解锁</el-button>
          <el-button v-if="scope.row.state === 2" type="text" size="small" @click="updateActivate(scope.row.id,'1')">激活</el-button>
          <el-button type="text" size="small"  @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row.id)"> 删除</el-button>
          
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
    </el-col>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    </el-row>
  </div>
</template>

<script>
  import AddOrUpdate from './user-add-or-update'
  import { parseTime } from '@/utils/index'
  export default {
    data () {
      return {
        orgNoOptions: [],
        orgListTreeProps: {
          label: 'orgName',
          children: 'children'
        },
        searchForm: {
          staffName: ''
        },
        deptName:'',
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListSelections: [],
        addOrUpdateVisible: false
      }
    },
    components: {
      AddOrUpdate
    },
    created () {
      this.getDeptDatas()
      this.getDataList()
    },
    methods:{
      parseTime,
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      getDeptDatas(){
        var params = {
            'orgName': this.deptName,
        }
        this.$get('/sys/dept/queryAll',params).then((data) => {
          data.list.push({
            'orgNo': '0',
            'orgName': '顶级'
          })
          sessionStorage.setItem('orgList', JSON.stringify(data.list || '[]'))
          this.orgNoOptions = this.treeDataTranslate(data.list, 'orgNo', 'parentNo')
        })
      },
      getDataList(){
          var params={
            'page': this.pageIndex,
            'limit': this.pageSize,
            'staffName': this.searchForm.staffName,
            'deptCode' :this.deptCode
          }
          this.$get('/sys/staff/queryAll', params).then((response) => {
            if(response && response.code === 0){
              this.dataList = response.page.records
              this.totalPage = response.page.total
            }else{
              this.dataList = []
              this.totalPage = 0
            }
          })
      },
      resetHandle () {
        let sysStaffIds = this.dataListSelections.map(item => {
          return item.id
        })
        this.$confirm(`确定重置密码？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/sys/staff/resetPw', sysStaffIds).then((data) => {
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
      // 删除
      deleteHandle (id) {
        let sysStaffIds = id ? [id] : this.dataListSelections.map(item => {
          return item.id
        })
         let userAccts = this.dataListSelections.map(item => {
          return item.userAcct
        })
        this.$confirm(`确认对该数据进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$post('/sys/staff/delete', sysStaffIds).then((data) => {
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
      updateLockState (id) {
        var params = {
                    'id': id
                    }
        this.$post('/sys/staff/updateLockState',params).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '激活成功',
                type: 'success',
                duration: 1500
              })
              this.getDataList()
            }else{
              this.$message({
                message: '激活失败！',
                type: 'danger',
                duration: 1500
              })
            }
        })
      },
      updateActivate(id,state) {
        var params = {
                    'id': id,
                    'state' : state
                    }
        this.$post('/sys/staff/updateActivate',params).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
              this.getDataList()
            }
        })
      },
      handleNodeClick(data) {
        if (data.orgNo === '0') {
          this.deptCode = null
        } else {
          this.deptCode = data.orgNo
        }
        this.getDataList()
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

<style >
.head-container {
  padding-bottom: 26px;
}
</style>

