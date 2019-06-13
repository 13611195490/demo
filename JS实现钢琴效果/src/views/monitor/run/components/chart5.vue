<template>
  <div class='webEchart' id='barWebEchart'>
	<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
    	<h1>2018年全国陆上风力发电标杆上网电价表</h1>
    </el-tooltip>
    <el-table :data="tableData" style="width: 100%;" max-height="400" border>
    <el-table-column prop="source" label="资源区"></el-table-column>
	  <el-table-column prop="normal_station" label="2018年新建陆上风电标杆上网电价"></el-table-column>
	  <el-table-column prop="all_regions" label="各资源区所包括的地区"></el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    changeShow() {
      this.tableData = [{
        source: '一类资源区',
        new_station: '0.66',
        all_regions: '嘉峪关、长白山'
      }, {
        source: '一类资源区',
        new_station: '0.66',
        all_regions: '嘉峪关、长白山'
      }, {
        source: '一类资源区',
        new_station: '0.66',
        all_regions: '嘉峪关、长白山'
      }, {
        source: '一类资源区',
        new_station: '0.66',
        poverty_station: '0.66',
        normal_project: '0.37',
        poverty_project: '0.43',
        all_regions: '嘉峪关、长白山'
      }, {
        source: '一类资源区',
        new_station: '0.66',
        all_regions: '嘉峪关、长白山'
      }, {
        source: '一类资源区',
        new_station: '0.66',
        all_regions: '嘉峪关、长白山'
      }, {
        source: '一类资源区',
        new_station: '0.66',
        all_regions: '嘉峪关、长白山'
      }]
    },
    getTableData() {
      this.$get('/countOnshoreWind').then(data => {
        if (data && data.code === 0) {
          this.tableData = data.map.data
        }
      })
    }
  }
}
</script>
<style scoped>
.item{
	margin-left: 22%;
    font-size: 30px;
}
.ss{
	height: 600px;
}
</style>
