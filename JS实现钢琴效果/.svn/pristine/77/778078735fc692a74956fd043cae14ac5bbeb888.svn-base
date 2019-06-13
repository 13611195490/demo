<template>
  <div class='webEchart' id='barWebEchart'>
    <el-table
    :data="tableData"
    height="410"
    border
    style="width: 100%">
    <el-table-column prop="channel" label="通道" width="180"></el-table-column>
    <el-table-column prop="city" label="输出省" width="180"></el-table-column>
    <el-table-column prop="trading_type" label="交易类型"></el-table-column>
	  <el-table-column prop="month_electricity" label="本月电量"></el-table-column>
	  <el-table-column prop="month_compared" label="本月同比"></el-table-column>
	  <el-table-column prop="add_electricity" label="累计电量"></el-table-column>
	  <el-table-column prop="tag" label="月份" width="100" filter-placement="bottom-end" :filters="filterMouth" :filter-method="filterTag">
	  <template slot-scope="scope">
      <el-tag :type="scope.row.tag === '一月' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
    </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      filterMouth: [],
      items: []
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    changeShow() {
      this.tableData = [{
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '一月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '二月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '三月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '四月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '五月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '六月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '七月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '八月'
      }, {
        channel: '德宝灵宝',
        city: '甘肃',
        trading_type: '省间电量交易',
        month_electricity: '2.83',
        month_compared: 'x',
        add_electricity: '12.32',
        tag: '九月'
      }]
    },
    filterTag(value, row) {
      return row.tag === value
    },
    getTableData() {
      this.$get('/countNewEnergyTrading').then(data => {
        if (data && data.code === 0) {
          this.tableData = data.map.data
        }
      })
      this.filterMouth = [{ text: '一月', value: '1月' },
        { text: '二月', value: '2月' },
        { text: '三月', value: '3月' },
        { text: '四月', value: '4月' },
        { text: '五月', value: '5月' },
        { text: '六月', value: '6月' },
        { text: '七月', value: '7月' },
        { text: '八月', value: '8月' },
        { text: '九月', value: '9月' },
        { text: '十月', value: '10月' },
        { text: '十一月', value: '11月' },
        { text: '十二月', value: '12月' }]
    }
  }
}

</script>
<style scoped>

</style>
