<template>
  <div class="mod-role">
    <el-form :inline="true" :model="searchForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="searchForm.roleName" placeholder="角色名称" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button  type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button  type="primary" @click="RoleSqMenuBtn()" >授权菜单</el-button>
        <el-button  type="primary" @click="RoleSqStaffBtn()" >授权人员</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border @selection-change="selectionChangeHandle" style="width: 100%;">
      <el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
      <el-table-column prop="roleName" header-align="center" align="center" label="角色名称"></el-table-column>
      <el-table-column prop="roleRefStaff" header-align="center" align="center" label="已分配人员"></el-table-column>
      <el-table-column show-overflow-tooltip prop="remark" header-align="center" align="center" label="备注"></el-table-column>
      <el-table-column prop="createTime" header-align="center" align="center" width="180" label="创建时间">
        <template slot-scope="scope">
            <span>{{ parseTime(scope.row.createTime) }}</span>
        </template> 
      </el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.roleId)">修改</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row.roleId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>

    <role-ref-menu v-if="roleRefMenuVisible" ref="roleRefMenu" @refreshDataList="getDataList"></role-ref-menu>

    <role-ref-staff v-if="roleRefStaffVisible" ref="roleRefStaff" @refreshDataList="getDataList"></role-ref-staff>

  </div>
</template>

<script>
  import AddOrUpdate from './role-add-or-update'
  import RoleRefMenu from './role-menu'
  import RoleRefStaff from './role-staff'
  import { parseTime } from '@/utils/index'
  export default {
    data () {
      return {
        searchForm: {
          roleName: ''
        },
        menuList:[],
        menuListTreeProps: {
          label: 'name',
          children: 'children'
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListSelections: [],
        addOrUpdateVisible: false,
        roleRefMenuVisible:false,
        roleRefStaffVisible:false
      }
    },
    components: {
      AddOrUpdate,
      RoleRefMenu,
      RoleRefStaff
    },
    created () {
      this.getDataList()
    },
    methods: {
      parseTime,
      // 获取数据列表
      getDataList () {
        var params={
            'page': this.pageIndex,
            'limit': this.pageSize,
            'roleName': this.searchForm.roleName
        }
        this.$get('/sys/role/list', params).then((data) => {
          if (data && data.code === 0) {
            this.dataList = data.page.records
            this.totalPage = data.page.total
          } else {
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
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      //删除
      deleteHandle (id) {
        let ids = id ? [id] : this.dataListSelections.map(item => {
          return item.roleId
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/sys/role/delete', ids).then((data) => {
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
      RoleSqMenuBtn (){
        var rows = this.dataListSelections
        var id = rows.map(item => {
          return item.roleId
        })
        if(rows.length === 0 || rows.length > 1){
          this.$message.error('请选择一条要授权的角色信息')
        }else{
          this.roleRefMenuVisible = true
          this.$nextTick(() => {
            this.$refs.roleRefMenu.init(id)
          })
        }
      },
      RoleSqStaffBtn (){
        var rows = this.dataListSelections
        var id = rows.map(item => {
          return item.roleId
        })
        if(rows.length === 0 || rows.length > 1){
          this.$message.error('请选择一条要授权的角色信息')
        }else{
          this.roleRefStaffVisible = true
          this.$nextTick(() => {
            this.$refs.roleRefStaff.init(id)
          })
        }
      }
    }
  }
</script>
