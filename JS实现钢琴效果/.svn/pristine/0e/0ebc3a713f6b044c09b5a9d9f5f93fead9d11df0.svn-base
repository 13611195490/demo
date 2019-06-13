<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳监测</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/monitor/run' }"><b>运行监测</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="monitorRun">
      <el-row class="tableCard firstCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart0 :chart="echartData"></chart0>        
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart1 :chart="echartData"></chart1>   
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart2 :chart="echartData"></chart2>
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart3 :chart="echartData"></chart3>
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart4 :chart="echartData"></chart4>
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart5 :chart="echartData"></chart5>
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard rootCard2">
        <div class="clearfix nsd-row chart">
          <el-table :data="tableData" element-loading-text="Loading" border fit
            stripe highlight-current-row >
            <el-table-column label="风电、新能源可利用率">
            <el-table-column prop="name" min-width="150" label=""></el-table-column>											
            <el-table-column prop="data1" min-width="50" label="新疆"> </el-table-column>
            <el-table-column prop="data2" min-width="50" label="江西"> </el-table-column>
            <el-table-column prop="data3" min-width="50" label="云南"> </el-table-column>
            <el-table-column prop="data4" min-width="50" label="贵州"> </el-table-column>
            <el-table-column prop="data5" min-width="50" label="海南"> </el-table-column>
            <el-table-column prop="data6" min-width="50" label="四川"> </el-table-column>
            <el-table-column prop="data7" min-width="50" label="河南"> </el-table-column>
            <el-table-column prop="data8" min-width="50" label="湖北"> </el-table-column>
            <el-table-column prop="data9" min-width="50" label="上海"> </el-table-column>
            <el-table-column prop="data10" min-width="50" label="天津"> </el-table-column>
            <el-table-column prop="data11" min-width="50" label="河北"> </el-table-column>
            <el-table-column prop="data12" min-width="50" label="湖南"> </el-table-column>
            <el-table-column prop="data13" min-width="50" label="广西"> </el-table-column>
            <el-table-column prop="data14" min-width="50" label="宁夏"> </el-table-column>
            </el-table-column>
          </el-table>
          <div class="pageContainer clearfix">
            <el-pagination
              @size-change="updateSizeChange"
              @current-change="updateCurrentChange"
              :current-page="tablePageCurrent"
              :page-sizes="realPageSizes"
              :page-size="tablePageNum"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tablePageTotal">
            </el-pagination>
          </div> 
        </div>
      </el-row>
      <el-row class="tableCard rootCard2">
        <div class="clearfix nsd-row chart">
           <chart6 :chart="echartData"></chart6>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>

import chart0 from './components/chart0.vue'
import chart1 from './components/chart1.vue'
import chart2 from './components/chart2.vue'
import chart3 from './components/chart3.vue'
import chart4 from './components/chart4.vue'
import chart5 from './components/chart5.vue'
import chart6 from './components/chart6.vue'

export default {
  name: 'monitorRun',
  components: { chart0, chart1, chart2, chart3, chart4, chart5, chart6 },
  data() {
    return {
      // tableData: [],
      tableData: [{
        'name': '风电最大电力',
        'data1': '14.88',
        'data2': '13.93',
        'data3': '13.47',
        'data4': '12.59',
        'data5': '12.48',
        'data6': '12.09',
        'data7': '10.57',
        'data8': '10.43',
        'data9': '10.33',
        'data10': '10.15',
        'data11': '9.78',
        'data12': '9.23',
        'data13': '9.12',
        'data14': '8.55'
      }, {
        'name': '风电最高同时率',
        'data1': '14.88',
        'data2': '13.93',
        'data3': '13.47',
        'data4': '12.59',
        'data5': '12.48',
        'data6': '12.09',
        'data7': '10.57',
        'data8': '10.43',
        'data9': '10.33',
        'data10': '10.15',
        'data11': '9.78',
        'data12': '9.23',
        'data13': '9.12',
        'data14': '8.55'
      }, {
        'name': '新能源电站可利用率',
        'data1': '14.88',
        'data2': '13.93',
        'data3': '13.47',
        'data4': '12.59',
        'data5': '12.48',
        'data6': '12.09',
        'data7': '10.57',
        'data8': '10.43',
        'data9': '10.33',
        'data10': '10.15',
        'data11': '9.78',
        'data12': '9.23',
        'data13': '9.12',
        'data14': '8.55'
      }],
      // tablePageTotal: 0,
      tablePageTotal: 14,
      // listLoading: true,
      tablePageCurrent: 1,
      tablePageNum: 10,
      saveChart0Data: {},
      saveChart1Data: {},
      saveChart2Data: {},
      saveChart3Data: {},
      saveChart4Data: {},
      saveChart5Data: {},
      saveChart6Data: {},
      saveChart7Data: {},
      echartData: {
        chart0: {},
        chart1: {},
        chart2: {},
        chart3: {},
        chart4: {},
        chart5: {},
        chart6: {},
        chart7: {}
      }
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    /* 根据table数据的总页数，来展示 */
    realPageSizes() {
      const pageSizes = [10, 20, 30, 40]
      for (let i = 0; i < pageSizes.length; i++) {
        if (this.tablePageTotal < pageSizes[i]) {
          return pageSizes.slice(0, i + 1)
        }
      }
    }
  },
  methods: {
    fetchData() {

    },
    triggerDate() {
      this.$refs.elDatePick.focus()
      this.$refs.triggerDate.blur()
    },
    updateSizeChange(val) {
      this.tablePageNum = val
      this.fetchData()
    },
    updateCurrentChange(val) {
      this.tablePageCurrent = val
      this.fetchData()
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
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
.monitorRun{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.listTable{
  padding-top: 1%;
  padding-left: 1%;
  padding-right: 1%;
}
</style>
<style>

</style>
