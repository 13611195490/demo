<template>
  <el-row class='chart'>
    <el-button style='margin-bottom: 40px' type='primary'>生成评估报告</el-button>
    <div>
      <el-table :data='tableData' border fit stripe highlight-current-row style="margin-bottom:20px;">
        <el-table-column type='selection' min-width='55'></el-table-column>
        <el-table-column type='index' label='序号' min-width='50'></el-table-column>
        <el-table-column
          v-for='i in tableHeader'
          :key='i.key'
          :label='i.label'
          :prop='i.prop'
          min-width='100'
        ></el-table-column>
        <el-table-column label='操作' width='250'>
          <template slot-scope='scope'>
            <el-button @click='showDetail(scope.row)' type='text' size='small'>预览</el-button>
            <el-button @click='repDownload(scope.row)' type='text' size='small'>下载</el-button>
            <el-button @click='deleteRep(scope.row)' type='text' size='small'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='pageContainer clearfix'>
        <el-pagination
          @size-change='updateSizeChange'
          @current-change='updateCurrentChange'
          :current-page='currentPage'
          :page-sizes='[10, 20, 30, 40]'
          layout='total, sizes, prev, pager, next, jumper'
          :total='totalCount'
        ></el-pagination>
      </div>
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      tableHeader: [],
      tableData: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.tableHeader = [
        { key: 'name', label: '名称', prop: 'name' },
        { key: 'time', label: '生成时间', prop: 'time' }
      ]
      this.tableData = [
        { name: '新能源评估分析报告', time: '2018-12-12 12:00:33' }
      ]
    }
  }
}
</script>