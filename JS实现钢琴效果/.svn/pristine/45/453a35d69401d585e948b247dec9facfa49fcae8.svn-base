<template>
  <div class="mod-menu">
		 <el-breadcrumb separator=" > " class="breadcrumb">
		  <el-breadcrumb-item>当前位置： 系统管理</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/monitor/elcIn' }"><b>菜单管理	</b></el-breadcrumb-item>
		</el-breadcrumb> 
    <el-form :inline="true" :model="searchForm">
      <el-form-item>
        <el-button  type="primary" @click="addOrUpdateHandle()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      style="width: 100%;">
      <el-table-column
        prop="menuId"
        header-align="center"
        align="left"
        width="80"
        label="ID">
      </el-table-column>
      <table-tree-column
        prop="name"
        header-align="center"
        treeKey="menuId"
        width="150"
        label="名称">
      </table-tree-column>
      <el-table-column
        prop="parentName"
        header-align="center"
        align="center"
        width="120"
        label="上级菜单">
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        label="图标">
        <template slot-scope="scope">
          <icon-svg :name="scope.row.icon || ''"></icon-svg>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        header-align="center"
        align="center"
        label="类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type === 0" size="small">目录</el-tag>
          <el-tag v-else-if="scope.row.type === 1" size="small" type="success">菜单</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="path"
        header-align="center"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="链接地址">
      </el-table-column>
      <el-table-column
        prop="url"
        header-align="center"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="组件路径">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        header-align="center"
        align="center"
        label="排序号">
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button  type="text" size="small"
                     @click="addOrUpdateHandle(scope.row.menuId)">修改
          </el-button>
          <el-button  type="text" size="small" @click="deleteHandle(scope.row.menuId)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
  import TableTreeColumn from '@/components/table-tree-column'
  import AddOrUpdate from './menu-add-or-update'

  export default {
    data () {
      return {
        searchForm: {},
        dataList: [],
        addOrUpdateVisible: false
      }
    },
    components: {
      TableTreeColumn,
      AddOrUpdate
    },
    created () {
      this.getDataList()
    },
    methods: {
      getDataList () {
        this.$get('/sys/menu/list').then((data) => {
            if (data && data.code === 0) {
                this.dataList = this.treeDataTranslate(data.menuList, 'menuId')
            } else {
                this.dataList = []
            }
           
        }) 
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        this.$confirm(`确定对[id=${id}]进行[删除]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post(`/sys/menu/delete/${id}`).then((data) => {
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
      }
    }
  }
</script>
<style>
  .el-popper {
    max-height: 500px;
    max-width: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
