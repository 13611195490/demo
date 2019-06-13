<template>
  <div id="content">
    <div class="cgnySta">
      <el-row class="tableCard2 firstCard">
        <el-col :span="12" class="rootCardr">
          <div class="clearfix nsd-row chart">
            <chart0 :chart="echartData"></chart0>        
          </div>
        </el-col>
        <el-col :span="12" class="rootCardl">
          <div class="clearfix nsd-row chart">
            <chart1 :chart="echartData"></chart1>   
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard2">
        <el-col :span="12" class="rootCardr">
          <div class="clearfix nsd-row chart">
            <chart2 :chart="echartData"></chart2>
          </div>
        </el-col>
        <el-col :span="12" class="rootCardl">
          <div class="clearfix nsd-row chart">
            <chart3 :chart="echartData"></chart3>
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard2">
        <el-col :span="12" class="rootCardr">
          <div class="clearfix nsd-row chart">
            <chart4 :chart="echartData"></chart4>
          </div>
        </el-col>
        <el-col :span="12" class="rootCardl">
          <div class="clearfix nsd-row chart">
            <chart5 :chart="echartData"></chart5>
          </div>
        </el-col>
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

export default {
  name: 'cgdySta',
  components: { chart0, chart1, chart2, chart3, chart4, chart5 },
  data() {
    return {
      saveChart0Data: {},
      saveChart1Data: {},
      saveChart2Data: {},
      saveChart3Data: {},
      saveChart4Data: {},
      saveChart5Data: {},
      echartData: {
        chart0: {},
        chart1: {},
        chart2: {},
        chart3: {},
        chart4: {},
        chart5: {}
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() { }
  }
}
</script>
<style src="@/styles/public.css"></style>
<style scoped>
.cgnySta{
  /* background:#8fc0ed; */
  border-radius: 10px;
  min-height: 100%;
}
</style>

